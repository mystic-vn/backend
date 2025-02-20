import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SpreadType } from './schemas/spread-type.schema';
import { CreateSpreadTypeDto } from './dto/create-spread-type.dto';
import { Context } from '../../tarot/contexts/schemas/context.schema';

@Injectable()
export class SpreadTypesService {
  constructor(
    @InjectModel(SpreadType.name) private spreadTypeModel: Model<SpreadType>,
    @InjectModel(Context.name) private contextModel: Model<Context>,
  ) {}

  async create(createSpreadTypeDto: CreateSpreadTypeDto): Promise<SpreadType> {
    const createdSpreadType = new this.spreadTypeModel(createSpreadTypeDto);
    return createdSpreadType.save();
  }

  async findAll(): Promise<SpreadType[]> {
    const spreadTypes = await this.spreadTypeModel
      .find({ isDeleted: false })
      .populate({
        path: 'supportedContexts',
        model: this.contextModel,
        select: 'name',
      })
      .exec();

    return spreadTypes;
  }

  async findOne(id: string): Promise<SpreadType> {
    const spreadType = await this.spreadTypeModel
      .findOne({ _id: id, isDeleted: false })
      .populate({
        path: 'supportedContexts',
        model: this.contextModel,
        select: 'name',
      })
      .exec();

    if (!spreadType) {
      throw new NotFoundException(`SpreadType with ID "${id}" not found`);
    }
    return spreadType;
  }

  async findByContext(contextSlug: string): Promise<SpreadType[]> {
    // Tìm context theo slug
    const context = await this.contextModel.findOne({ slug: contextSlug, isDeleted: false }).exec();
    if (!context) {
      throw new NotFoundException(`Context with slug "${contextSlug}" not found`);
    }

    // Tìm spread types có chứa context._id trong supportedContexts
    return this.spreadTypeModel
      .find({ supportedContexts: context._id, isDeleted: false })
      .populate({
        path: 'supportedContexts',
        model: this.contextModel,
        select: 'name slug',
      })
      .exec();
  }

  async update(id: string, updateSpreadTypeDto: Partial<CreateSpreadTypeDto>): Promise<SpreadType> {
    const updatedSpreadType = await this.spreadTypeModel
      .findOneAndUpdate(
        { _id: id, isDeleted: false },
        updateSpreadTypeDto,
        { new: true }
      )
      .populate({
        path: 'supportedContexts',
        model: this.contextModel,
        select: 'name',
      })
      .exec();
    
    if (!updatedSpreadType) {
      throw new NotFoundException(`SpreadType with ID "${id}" not found`);
    }
    return updatedSpreadType;
  }

  async remove(id: string): Promise<SpreadType> {
    const removedSpreadType = await this.spreadTypeModel
      .findOneAndUpdate(
        { _id: id, isDeleted: false },
        { isDeleted: true },
        { new: true }
      )
      .populate({
        path: 'supportedContexts',
        model: this.contextModel,
        select: 'name',
      })
      .exec();

    if (!removedSpreadType) {
      throw new NotFoundException(`SpreadType with ID "${id}" not found`);
    }
    return removedSpreadType;
  }
} 