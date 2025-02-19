import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Context, ContextDocument } from './schemas/context.schema';
import { CreateContextDto } from './dto/create-context.dto';
import { UpdateContextDto } from './dto/update-context.dto';
import { DEFAULT_CONTEXTS } from './constants/default-contexts';

@Injectable()
export class ContextsService {
  constructor(
    @InjectModel(Context.name)
    private contextModel: Model<ContextDocument>
  ) {}

  async create(createContextDto: CreateContextDto): Promise<Context> {
    const createdContext = new this.contextModel(createContextDto);
    return createdContext.save();
  }

  async findAll(): Promise<Context[]> {
    return this.contextModel
      .find({ isDeleted: { $ne: true } })
      .sort({ order: 'asc' })
      .exec();
  }

  async findOne(id: string): Promise<Context> {
    const context = await this.contextModel
      .findOne({ _id: id, isDeleted: { $ne: true } })
      .exec();

    if (!context) {
      throw new NotFoundException(`Context with ID "${id}" not found`);
    }

    return context;
  }

  async update(id: string, updateContextDto: UpdateContextDto): Promise<Context> {
    const updatedContext = await this.contextModel
      .findOneAndUpdate(
        { _id: id, isDeleted: { $ne: true } },
        updateContextDto,
        { new: true }
      )
      .exec();

    if (!updatedContext) {
      throw new NotFoundException(`Context with ID "${id}" not found`);
    }

    return updatedContext;
  }

  async remove(id: string): Promise<void> {
    const result = await this.contextModel
      .findOneAndUpdate(
        { _id: id, isDeleted: { $ne: true } },
        { isDeleted: true }
      )
      .exec();

    if (!result) {
      throw new NotFoundException(`Context with ID "${id}" not found`);
    }
  }

  async seedDefaultContexts(): Promise<void> {
    const count = await this.contextModel.countDocuments().exec();
    
    if (count === 0) {
      await this.contextModel.insertMany(DEFAULT_CONTEXTS);
    }
  }
}