import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Suit, SuitDocument } from './schemas/suit.schema';
import { CreateSuitDto } from './dto/create-suit.dto';
import { UpdateSuitDto } from './dto/update-suit.dto';

@Injectable()
export class SuitsService {
  constructor(
    @InjectModel(Suit.name) private suitModel: Model<SuitDocument>
  ) {}

  async create(createSuitDto: CreateSuitDto): Promise<Suit> {
    const createdSuit = new this.suitModel(createSuitDto);
    return createdSuit.save();
  }

  async findAll() {
    return this.suitModel.find({ 
      isDeleted: { $ne: true }
    }).sort({ name: 1 });
  }

  async findOne(id: string): Promise<Suit> {
    const suit = await this.suitModel.findOne({ 
      _id: id,
      isDeleted: { $ne: true }
    });
    
    if (!suit) {
      throw new NotFoundException(`Suit with ID "${id}" not found`);
    }
    return suit;
  }

  async findByName(name: string): Promise<Suit> {
    const suit = await this.suitModel.findOne({ 
      name,
      isDeleted: { $ne: true }
    });
    
    if (!suit) {
      throw new NotFoundException(`Suit "${name}" not found`);
    }
    return suit;
  }

  async update(id: string, updateSuitDto: UpdateSuitDto): Promise<Suit> {
    const updatedSuit = await this.suitModel
      .findOneAndUpdate(
        { _id: id, isDeleted: { $ne: true } },
        updateSuitDto,
        { new: true }
      )
      .exec();
    
    if (!updatedSuit) {
      throw new NotFoundException(`Suit with ID "${id}" not found`);
    }
    return updatedSuit;
  }

  async updateByName(name: string, updateSuitDto: UpdateSuitDto): Promise<Suit> {
    const updatedSuit = await this.suitModel
      .findOneAndUpdate(
        { name, isDeleted: { $ne: true } },
        updateSuitDto,
        { new: true }
      )
      .exec();
    
    if (!updatedSuit) {
      throw new NotFoundException(`Suit "${name}" not found`);
    }
    return updatedSuit;
  }

  async remove(id: string): Promise<void> {
    const result = await this.suitModel
      .findOneAndUpdate(
        { _id: id, isDeleted: { $ne: true } },
        { isDeleted: true }
      )
      .exec();
    
    if (!result) {
      throw new NotFoundException(`Suit with ID "${id}" not found`);
    }
  }
} 