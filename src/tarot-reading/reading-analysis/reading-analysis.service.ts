import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
  constructor(
    @InjectModel(ReadingAnalysis.name)
    private readingAnalysisModel: Model<ReadingAnalysis>,
    private gptService: GPTService,
    private deepseekService: DeepseekService,
    private cardsService: CardsService,
    private contextsService: ContextsService,
    private questionsService: QuestionsService
  ) {}

  async analyze(createDto: CreateReadingAnalysisDto): Promise<ReadingAnalysis> {
    try {
      // Lấy thông tin context
      const context = await this.contextsService.findOne(createDto.context);
      if (!context) {
        throw new NotFoundException('Context not found');
      }

      // Lấy thông tin câu hỏi nếu có
      let question: Question | undefined;
      if (createDto.questionId) {
        question = await this.questionsService.findOne(createDto.questionId);
        if (!question) {
          throw new NotFoundException('Question not found');
        }
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
      try {
        // Thử với OpenAI trước
        analysis = await this.gptService.analyzeReading({
          context: context.name,
          question: question?.content || '',
          cards: cardsWithDetails
        });
      } catch (error) {
        console.error('OpenAI Analysis error:', error);
        // Nếu OpenAI lỗi, thử với Deepseek
        analysis = await this.deepseekService.analyzeReading({
          context: context.name,
          question: question?.content || '',
          cards: cardsWithDetails
        });
      }

      // Trích xuất patterns
      const extractedPatterns = this.extractPatterns(createDto, analysis);

      // Tạo và lưu phân tích
      const readingAnalysis = new this.readingAnalysisModel({
        spreadType: createDto.spreadTypeId,
        context: createDto.context,
        question: createDto.questionId,
        cards: createDto.cards,
        analysis: {
          overview: analysis.overview,
          positionAnalyses: analysis.positionAnalyses.map(analysis => ({
            ...analysis,
            cardId: createDto.cards.find(c => c.position === analysis.position)?.cardId
          })),
          conclusion: analysis.conclusion
        },
        extractedPatterns
      });

      return await readingAnalysis.save();
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