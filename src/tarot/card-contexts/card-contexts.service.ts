import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CardContext, CardContextDocument } from './schemas/card-context.schema';
import { CreateCardContextDto } from './dto/create-card-context.dto';
import { UpdateCardContextDto } from './dto/update-card-context.dto';
import { QueryCardContextDto } from './dto/query-card-context.dto';

@Injectable()
export class CardContextsService {
  constructor(
    @InjectModel(CardContext.name)
    private cardContextModel: Model<CardContextDocument>
  ) {}

  async create(createCardContextDto: CreateCardContextDto): Promise<CardContext> {
    // Kiểm tra xem card context đã tồn tại chưa
    const existingCardContext = await this.cardContextModel.findOne({
      cardId: createCardContextDto.cardId,
      contextId: createCardContextDto.contextId,
      isDeleted: { $ne: true }
    }).exec();

    if (existingCardContext) {
      throw new ConflictException('Card context already exists');
    }

    const createdCardContext = new this.cardContextModel(createCardContextDto);
    return createdCardContext.save();
  }

  async findAll(query: QueryCardContextDto) {
    const { page = 1, limit = 10, cardId, contextId } = query;
    const skip = (page - 1) * limit;

    const filter: any = {
      isDeleted: { $ne: true }
    };

    if (cardId) {
      filter.cardId = cardId;
    }

    if (contextId) {
      filter.contextId = contextId;
    }

    const [items, total] = await Promise.all([
      this.cardContextModel
        .find(filter)
        .skip(skip)
        .limit(limit)
        .populate('cardId')
        .populate('contextId')
        .exec(),
      this.cardContextModel.countDocuments(filter)
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
        hasPreviousPage: page > 1
      }
    };
  }

  async findOne(id: string): Promise<CardContext> {
    const cardContext = await this.cardContextModel
      .findById(id)
      .populate('cardId')
      .populate('contextId')
      .exec();

    if (!cardContext || cardContext.isDeleted) {
      throw new NotFoundException(`Card context with ID "${id}" not found`);
    }

    return cardContext;
  }

  async update(id: string, updateCardContextDto: UpdateCardContextDto): Promise<CardContext> {
    // Kiểm tra xem card context có tồn tại không
    const existingCardContext = await this.cardContextModel
      .findOne({ _id: id, isDeleted: { $ne: true } })
      .exec();

    if (!existingCardContext) {
      throw new NotFoundException(`Card context with ID "${id}" not found`);
    }

    // Nếu có thay đổi cardId hoặc contextId, kiểm tra xem có trùng lặp không
    if (updateCardContextDto.cardId || updateCardContextDto.contextId) {
      const cardId = updateCardContextDto.cardId || existingCardContext.cardId;
      const contextId = updateCardContextDto.contextId || existingCardContext.contextId;

      const duplicateCardContext = await this.cardContextModel.findOne({
        _id: { $ne: id },
        cardId,
        contextId,
        isDeleted: { $ne: true }
      }).exec();

      if (duplicateCardContext) {
        throw new ConflictException('Card context already exists');
      }
    }

    const updatedCardContext = await this.cardContextModel
      .findOneAndUpdate(
        { _id: id, isDeleted: { $ne: true } },
        updateCardContextDto,
        { new: true }
      )
      .populate('cardId')
      .populate('contextId')
      .exec();

    if (!updatedCardContext) {
      throw new NotFoundException(`Card context with ID "${id}" not found`);
    }

    return updatedCardContext;
  }

  async remove(id: string): Promise<void> {
    const result = await this.cardContextModel
      .findOneAndUpdate(
        { _id: id, isDeleted: { $ne: true } },
        { isDeleted: true }
      )
      .exec();

    if (!result) {
      throw new NotFoundException(`Card context with ID "${id}" not found`);
    }
  }
} 
