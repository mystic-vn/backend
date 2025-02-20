import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card, CardDocument } from './schemas/card.schema';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { QueryCardDto } from './dto/query-card.dto';
import { FilterCardDto } from './dto/filter-card.dto';
import { PaginatedCards } from './interfaces/paginated-cards.interface';

@Injectable()
export class CardsService {
  constructor(
    @InjectModel(Card.name) private cardModel: Model<CardDocument>
  ) {}

  async create(createCardDto: CreateCardDto): Promise<Card> {
    const createdCard = new this.cardModel(createCardDto);
    const savedCard = await createdCard.save();
    return savedCard.populate('deckId');
  }

  async findAllWithoutPagination(): Promise<Card[]> {
    return this.cardModel
      .find({ isDeleted: { $ne: true } })
      .populate({
        path: 'deckId',
        select: 'name description'
      })
      .populate('arcanaType')
      .populate('suit')
      .exec();
  }

  async filterCards(filterDto: FilterCardDto): Promise<Card[]> {
    const { arcanaTypeId, suitId } = filterDto;
    console.log('Filter params received:', filterDto); // Debug log

    const filter: any = {
      isDeleted: { $ne: true },
      arcanaTypeId: arcanaTypeId
    };

    // Nếu có suitId và là Minor Arcana, thêm điều kiện lọc theo suit
    if (suitId && suitId !== 'all') {
      filter.suitId = suitId;
    }

    const cards = await this.cardModel
      .find(filter)
      .populate({
        path: 'deckId',
        select: 'name description'
      })
      .populate('arcanaType')
      .populate('suit')
      .exec();

    console.log('Found cards:', cards.length); // Debug log
    return cards;
  }

  async findAll(query: QueryCardDto): Promise<PaginatedCards> {
    const { 
      page = 1, 
      limit = 10, 
      search,
      isDeleted = false,
      sortBy = 'number',
      sortOrder = 'ASC'
    } = query;
    const skip = (page - 1) * limit;

    const filter: any = {
      isDeleted: { $ne: true }
    };

    if (query.deckId) {
      filter.deckId = query.deckId;
    }

    if (query.arcanaTypeId) {
      filter.arcanaTypeId = query.arcanaTypeId;
    }

    if (query.suitId) {
      filter.suitId = query.suitId;
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { generalKeywords: { $regex: search, $options: 'i' } }
      ];
    }

    const sort: any = {};
    sort[sortBy] = sortOrder === 'ASC' ? 1 : -1;

    const [items, total] = await Promise.all([
      this.cardModel
        .find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .populate({
          path: 'deckId',
          select: 'name description'
        })
        .populate('arcanaType')
        .populate('suit')
        .exec(),
      this.cardModel.countDocuments(filter)
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      }
    };
  }

  async findOne(id: string): Promise<Card> {
    const card = await this.cardModel.findById(id).populate('deckId').exec();
    if (!card) {
      throw new NotFoundException(`Card with ID "${id}" not found`);
    }
    return card;
  }

  async update(id: string, updateCardDto: UpdateCardDto): Promise<Card> {
    const updatedCard = await this.cardModel
      .findOneAndUpdate(
        { _id: id, isDeleted: { $ne: true } },
        updateCardDto,
        { new: true }
      )
      .populate({
        path: 'deckId',
        select: 'name description'
      })
      .exec();
    
    if (!updatedCard) {
      throw new NotFoundException(`Card with ID "${id}" not found`);
    }
    return updatedCard;
  }

  async remove(id: string): Promise<void> {
    const result = await this.cardModel
      .findOneAndUpdate(
        { _id: id, isDeleted: { $ne: true } },
        { isDeleted: true }
      )
      .exec();
    
    if (!result) {
      throw new NotFoundException(`Card with ID "${id}" not found`);
    }
  }
} 
