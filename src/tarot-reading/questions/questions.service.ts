import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/question.schema';
import { CreateQuestionDto } from './dto/create-question.dto';
import { SpreadType } from '../spread-types/schemas/spread-type.schema';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
    @InjectModel(SpreadType.name) private spreadTypeModel: Model<SpreadType>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const { spreadTypeId, positions, ...rest } = createQuestionDto;

    // Validate spreadType exists and positions match
    const spreadType = await this.spreadTypeModel.findById(spreadTypeId).exec();
    if (!spreadType) {
      throw new NotFoundException(`SpreadType with ID "${spreadTypeId}" not found`);
    }

    // Validate positions length
    if (positions.length !== spreadType.positions.length) {
      throw new BadRequestException(
        `Number of positions (${positions.length}) does not match spread type positions (${spreadType.positions.length})`
      );
    }

    // Create and save question
    const createdQuestion = new this.questionModel({
      ...rest,
      positions,
      spreadType: spreadTypeId,
      isDeleted: false
    });

    return (await createdQuestion.save()).populate('spreadType');
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel
      .find({ isDeleted: false })
      .populate('spreadType')
      .exec();
  }

  async findOne(id: string): Promise<Question> {
    const question = await this.questionModel.findById(id).exec();
    if (!question) {
      throw new NotFoundException('Question not found');
    }
    return question;
  }

  async findByContext(context: string): Promise<Question[]> {
    return this.questionModel
      .find({ context, isDeleted: false })
      .populate('spreadType')
      .exec();
  }

  async findByContextPaginated(
    context: string,
    page: number = 1,
    limit: number = 10,
  ): Promise<{ items: Question[]; hasMore: boolean }> {
    const skip = (page - 1) * limit;
    
    const [items, total] = await Promise.all([
      this.questionModel
        .find({ context, isDeleted: false })
        .populate('spreadType')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit + 1)
        .exec(),
      this.questionModel.countDocuments({ context, isDeleted: false }),
    ]);

    const hasMore = items.length > limit;
    if (hasMore) {
      items.pop(); // Remove the extra item we fetched to check hasMore
    }

    return {
      items,
      hasMore,
    };
  }

  async findBySpreadType(spreadTypeId: string): Promise<Question[]> {
    return this.questionModel
      .find({ spreadType: spreadTypeId, isDeleted: false })
      .exec();
  }

  async update(id: string, updateQuestionDto: Partial<CreateQuestionDto>): Promise<Question> {
    const { spreadTypeId, positions, ...rest } = updateQuestionDto;
    let updateData: any = rest;

    if (spreadTypeId) {
      // Validate spreadType exists if provided
      const spreadType = await this.spreadTypeModel.findById(spreadTypeId).exec();
      if (!spreadType) {
        throw new NotFoundException(`SpreadType with ID "${spreadTypeId}" not found`);
      }
      updateData.spreadType = spreadTypeId;

      // Validate positions length if both spreadType and positions are provided
      if (positions && positions.length !== spreadType.positions.length) {
        throw new BadRequestException(
          `Number of positions (${positions.length}) does not match spread type positions (${spreadType.positions.length})`
        );
      }
    }

    if (positions) {
      updateData.positions = positions;
    }
    
    const updatedQuestion = await this.questionModel
      .findOneAndUpdate(
        { _id: id, isDeleted: false },
        updateData,
        { new: true }
      )
      .populate('spreadType')
      .exec();
    
    if (!updatedQuestion) {
      throw new NotFoundException(`Question with ID "${id}" not found`);
    }
    return updatedQuestion;
  }

  async remove(id: string): Promise<Question> {
    const removedQuestion = await this.questionModel
      .findOneAndUpdate(
        { _id: id, isDeleted: false },
        { isDeleted: true },
        { new: true }
      )
      .populate('spreadType')
      .exec();

    if (!removedQuestion) {
      throw new NotFoundException(`Question with ID "${id}" not found`);
    }
    return removedQuestion;
  }
}
