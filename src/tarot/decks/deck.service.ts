import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TarotDeck, TarotDeckDocument } from './deck.schema';
import { CreateDeckDto } from './deck.dto';
import { UpdateDeckDto } from './deck.dto';

@Injectable()
export class DeckService {
  constructor(
    @InjectModel(TarotDeck.name) private deckModel: Model<TarotDeckDocument>,
  ) {}

  async create(createDeckDto: CreateDeckDto): Promise<TarotDeck> {
    const createdDeck = new this.deckModel(createDeckDto);
    return createdDeck.save();
  }

  async findAll(options: {
    page: number;
    limit: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) {
    const { page, limit, search, sortBy = 'name', sortOrder = 'asc' } = options;
    const skip = (page - 1) * limit;

    const query: any = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const [items, total] = await Promise.all([
      this.deckModel
        .find(query)
        .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 })
        .skip(skip)
        .limit(limit)
        .exec(),
      this.deckModel.countDocuments(query),
    ]);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page < Math.ceil(total / limit),
        hasPreviousPage: page > 1,
      },
    };
  }

  async findOne(id: string): Promise<TarotDeck> {
    const deck = await this.deckModel.findById(id).exec();
    if (!deck) {
      throw new NotFoundException(`Tarot deck with ID "${id}" not found`);
    }
    return deck;
  }

  async update(id: string, updateDeckDto: UpdateDeckDto): Promise<TarotDeck> {
    const updatedDeck = await this.deckModel
      .findByIdAndUpdate(id, updateDeckDto, { new: true })
      .exec();
    if (!updatedDeck) {
      throw new NotFoundException(`Tarot deck with ID "${id}" not found`);
    }
    return updatedDeck;
  }

  async remove(id: string): Promise<void> {
    const result = await this.deckModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Tarot deck with ID "${id}" not found`);
    }
  }
} 