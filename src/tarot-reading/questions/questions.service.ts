import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/question.schema';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return createdQuestion.save();
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find({ isActive: true }).exec();
  }

  async findOne(id: string): Promise<Question> {
    const question = await this.questionModel.findById(id).exec();
    if (!question) {
      throw new NotFoundException(`Question with ID "${id}" not found`);
    }
    return question;
  }

  async findByContext(context: string): Promise<Question[]> {
    return this.questionModel
      .find({ context, isActive: true })
      .exec();
  }

  async findBySpreadType(spreadType: string): Promise<Question[]> {
    return this.questionModel
      .find({ spreadType, isActive: true })
      .exec();
  }

  async update(id: string, updateQuestionDto: Partial<CreateQuestionDto>): Promise<Question> {
    const updatedQuestion = await this.questionModel
      .findByIdAndUpdate(id, updateQuestionDto, { new: true })
      .exec();
    
    if (!updatedQuestion) {
      throw new NotFoundException(`Question with ID "${id}" not found`);
    }
    return updatedQuestion;
  }

  async remove(id: string): Promise<Question> {
    const removedQuestion = await this.questionModel.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true },
    ).exec();

    if (!removedQuestion) {
      throw new NotFoundException(`Question with ID "${id}" not found`);
    }
    return removedQuestion;
  }
}
