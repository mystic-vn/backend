import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cache } from 'cache-manager';
import { Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { ReadingAnalysis } from './schemas/reading-analysis.schema';
import { CreateReadingAnalysisDto } from './dto/create-reading-analysis.dto';
import { GPTService } from './gpt.service';
import { DeepseekService } from './deepseek.service';
import { CardsService } from '../../tarot/cards/cards.service';
import { ContextsService } from '../../tarot/contexts/contexts.service';
import { QuestionsService } from '../questions/questions.service';
import { Question } from '../questions/schemas/question.schema';

@Injectable()
export class ReadingAnalysisService {
  private readonly API_TIMEOUT = 30000; // 30 giây
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY = 2000; // 2 giây delay giữa các lần retry
  private readonly ERROR_CODES = {
    TIMEOUT: 'TIMEOUT',
    FORMAT_ERROR: 'FORMAT_ERROR',
    VALIDATION_ERROR: 'VALIDATION_ERROR'
  };

  constructor(
    @InjectModel(ReadingAnalysis.name)
    private readingAnalysisModel: Model<ReadingAnalysis>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private gptService: GPTService,
    private deepseekService: DeepseekService,
    private cardsService: CardsService,
    private contextsService: ContextsService,
    private questionsService: QuestionsService
  ) {}

  private generateCacheKey(createDto: CreateReadingAnalysisDto): string {
    // Tạo cache key từ các thông tin quan trọng
    const keyParts = [
      createDto.spreadTypeId,
      createDto.context,
      createDto.questionId || 'no-question',
      ...createDto.cards.map(card => 
        `${card.cardId}-${card.position}-${card.isReversed}`
      )
    ];
    return `reading-analysis:${keyParts.join(':')}`;
  }

  private validateAnalysisResponse(analysis: any, cardCount: number) {
    // Kiểm tra format cơ bản
    if (!analysis || typeof analysis !== 'object') {
      throw new Error(`${this.ERROR_CODES.FORMAT_ERROR}: Response không phải là object`);
    }

    // Kiểm tra overview
    if (!analysis.overview || typeof analysis.overview !== 'string') {
      throw new Error(`${this.ERROR_CODES.FORMAT_ERROR}: Overview không hợp lệ`);
    }

    // Kiểm tra conclusion
    if (!analysis.conclusion || typeof analysis.conclusion !== 'string') {
      throw new Error(`${this.ERROR_CODES.FORMAT_ERROR}: Conclusion không hợp lệ`);
    }

    // Kiểm tra positionAnalyses
    if (!Array.isArray(analysis.positionAnalyses)) {
      throw new Error(`${this.ERROR_CODES.FORMAT_ERROR}: positionAnalyses không phải là array`);
    }

    // Kiểm tra số lượng phân tích
    if (analysis.positionAnalyses.length !== cardCount) {
      throw new Error(
        `${this.ERROR_CODES.VALIDATION_ERROR}: Số lượng phân tích (${analysis.positionAnalyses.length}) không khớp với số lượng lá bài (${cardCount})`
      );
    }

    // Kiểm tra từng phân tích
    analysis.positionAnalyses.forEach((pos: any, idx: number) => {
      if (!pos || typeof pos !== 'object') {
        throw new Error(`${this.ERROR_CODES.FORMAT_ERROR}: Phân tích vị trí ${idx} không hợp lệ`);
      }

      if (typeof pos.position !== 'number') {
        throw new Error(`${this.ERROR_CODES.FORMAT_ERROR}: Position của vị trí ${idx} không hợp lệ`);
      }

      if (!pos.interpretation || typeof pos.interpretation !== 'string') {
        throw new Error(`${this.ERROR_CODES.FORMAT_ERROR}: Interpretation của vị trí ${idx} không hợp lệ`);
      }

      if (!pos.advice || typeof pos.advice !== 'string') {
        throw new Error(`${this.ERROR_CODES.FORMAT_ERROR}: Advice của vị trí ${idx} không hợp lệ`);
      }
    });

    return true;
  }

  private async callAIWithTimeout(service: 'gpt' | 'deepseek', params: any): Promise<any> {
    try {
      const aiService = service === 'gpt' ? this.gptService : this.deepseekService;
      
      return await Promise.race([
        aiService.analyzeReading(params),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error(this.ERROR_CODES.TIMEOUT)), this.API_TIMEOUT)
        )
      ]);
    } catch (error) {
      if (error.message === this.ERROR_CODES.TIMEOUT) {
        throw new Error(`${service.toUpperCase()} API timeout sau ${this.API_TIMEOUT}ms`);
      }
      throw error;
    }
  }

  async analyze(createDto: CreateReadingAnalysisDto): Promise<ReadingAnalysis> {
    try {
      // Kiểm tra cache
      const cacheKey = this.generateCacheKey(createDto);
      const cachedAnalysis = await this.cacheManager.get<ReadingAnalysis>(cacheKey);
      
      if (cachedAnalysis) {
        console.log('Returning cached analysis');
        return cachedAnalysis;
      }

      // Lấy thông tin context và question
      const [context, question] = await Promise.all([
        this.contextsService.findOne(createDto.context),
        createDto.questionId ? this.questionsService.findOne(createDto.questionId) : null
      ]);

      if (!context) {
        throw new NotFoundException('Context not found');
      }

      // Lấy thông tin chi tiết của các lá bài
      const cardsWithDetails = await Promise.all(
        createDto.cards.map(async card => {
          const cardDetail = await this.cardsService.findOne(card.cardId);
          return {
            ...card,
            name: cardDetail.name
          };
        })
      );

      // Phân tích với GPT hoặc Deepseek
      let analysis;
      let retries = 0;
      let currentService: 'gpt' | 'deepseek' = 'gpt';

      while (retries < this.MAX_RETRIES) {
        try {
          console.log(`Attempt ${retries + 1}/${this.MAX_RETRIES} with ${currentService.toUpperCase()}`);
          
          const params = {
            context: context.name,
            question: question?.content || '',
            cards: cardsWithDetails
          };

          analysis = await this.callAIWithTimeout(currentService, params);
          
          // Log response từ AI để debug
          console.log(`${currentService.toUpperCase()} Analysis Response:`, JSON.stringify(analysis, null, 2));
          
          // Validate response
          this.validateAnalysisResponse(analysis, createDto.cards.length);
          
          break;
        } catch (error) {
          console.error(`${currentService.toUpperCase()} Analysis error (attempt ${retries + 1}):`, error);
          
          // Nếu là lỗi format hoặc validation, thử lại
          if (error.message.startsWith(this.ERROR_CODES.FORMAT_ERROR) || 
              error.message.startsWith(this.ERROR_CODES.VALIDATION_ERROR)) {
            retries++;
          }
          
          // Nếu là lỗi timeout, chuyển sang service khác
          if (error.message.includes(this.ERROR_CODES.TIMEOUT)) {
            currentService = 'deepseek';
          }
          
          if (retries === this.MAX_RETRIES || (currentService === 'deepseek' && error.message.includes(this.ERROR_CODES.TIMEOUT))) {
            throw new Error(`Không thể phân tích sau ${this.MAX_RETRIES} lần thử. Lỗi cuối cùng: ${error.message}`);
          }
          
          // Delay trước khi thử lại
          await new Promise(resolve => setTimeout(resolve, this.RETRY_DELAY));
        }
      }

      // Tạo và lưu phân tích
      const readingAnalysis = new this.readingAnalysisModel({
        spreadType: createDto.spreadTypeId,
        context: createDto.context,
        question: createDto.questionId,
        cards: createDto.cards,
        analysis: {
          overview: analysis.overview,
          positionAnalyses: createDto.cards.map(card => {
            const positionAnalysis = analysis.positionAnalyses.find(
              a => a.position === card.position
            );
            
            if (!positionAnalysis) {
              throw new Error(`${this.ERROR_CODES.VALIDATION_ERROR}: Không tìm thấy phân tích cho vị trí ${card.position}`);
            }

            return {
              position: card.position,
              cardId: card.cardId,
              interpretation: positionAnalysis.interpretation,
              advice: positionAnalysis.advice
            };
          }),
          conclusion: analysis.conclusion
        },
        extractedPatterns: this.extractPatterns(createDto, analysis)
      });

      const savedAnalysis = await readingAnalysis.save();
      
      // Lưu vào cache với TTL 24 giờ
      await this.cacheManager.set(cacheKey, savedAnalysis, 86400);
      
      return savedAnalysis;
    } catch (error) {
      console.error('Analysis error:', error);
      throw error;
    }
  }

  private extractPatterns(
    input: CreateReadingAnalysisDto,
    analysis: any
  ) {
    return {
      cardCombinations: this.extractCardCombinations(input.cards),
      contextKeywords: this.extractKeywords(
        analysis.overview + analysis.conclusion
      ),
      interpretationTemplates: this.extractTemplates(
        analysis.positionAnalyses
      )
    };
  }

  private extractCardCombinations(cards: CreateReadingAnalysisDto['cards']): string[] {
    const combinations: string[] = [];
    
    // 2-card combinations
    for (let i = 0; i < cards.length - 1; i++) {
      for (let j = i + 1; j < cards.length; j++) {
        combinations.push(`${cards[i].cardId}-${cards[j].cardId}`);
      }
    }

    // 3-card combinations if possible
    if (cards.length >= 3) {
      for (let i = 0; i < cards.length - 2; i++) {
        for (let j = i + 1; j < cards.length - 1; j++) {
          for (let k = j + 1; k < cards.length; k++) {
            combinations.push(
              `${cards[i].cardId}-${cards[j].cardId}-${cards[k].cardId}`
            );
          }
        }
      }
    }

    return combinations;
  }

  private extractKeywords(text: string): string[] {
    // Simple keyword extraction based on common patterns
    const keywords = text.toLowerCase()
      .match(/\b\w+\b/g) || [];
    return [...new Set(keywords)];
  }

  private extractTemplates(analyses: any[]): string[] {
    // Extract common sentence patterns
    const templates = new Set<string>();
    analyses.forEach(analysis => {
      const sentences = analysis.interpretation
        .split(/[.!?]/)
        .map(s => s.trim())
        .filter(s => s.length > 0);
      
      sentences.forEach(sentence => {
        // Replace specific details with placeholders
        const template = sentence
          .replace(/\b\d+\b/g, '{number}')
          .replace(/\b[A-Z][a-z]+\b/g, '{word}');
        templates.add(template);
      });
    });
    
    return Array.from(templates);
  }

  async findOne(id: string): Promise<ReadingAnalysis> {
    const analysis = await this.readingAnalysisModel
      .findOne({ _id: id, isDeleted: false })
      .populate('spreadType')
      .populate('cards.cardId')
      .exec();

    if (!analysis) {
      throw new NotFoundException(`Reading analysis not found`);
    }

    return analysis;
  }

  async findByContext(context: string): Promise<ReadingAnalysis[]> {
    return this.readingAnalysisModel
      .find({ context, isDeleted: false })
      .populate('spreadType')
      .populate('cards.cardId')
      .exec();
  }
} 