import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deck, DeckDocument } from './schemas/deck.schema';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { S3Service } from '../../uploads/s3.service';

@Injectable()
export class DecksService {
  constructor(
    @InjectModel(Deck.name) private deckModel: Model<DeckDocument>,
    private readonly s3Service: S3Service,
  ) {}

  async create(createDeckDto: CreateDeckDto, files: {
    coverImage?: Express.Multer.File[],
    backImage?: Express.Multer.File[]
  }, fileUrls?: {
    coverImageUrl?: string,
    backImageUrl?: string
  }) {
    const deck = new this.deckModel(createDeckDto);

    if (files.coverImage?.[0]) {
      const coverImageUrl = await this.s3Service.uploadFile(
        files.coverImage[0],
        'tarot/decks/covers'
      );
      deck.coverImage = coverImageUrl;
    } else if (fileUrls?.coverImageUrl) {
      deck.coverImage = fileUrls.coverImageUrl;
    }

    if (files.backImage?.[0]) {
      const backImageUrl = await this.s3Service.uploadFile(
        files.backImage[0],
        'tarot/decks/backs'
      );
      deck.backImage = backImageUrl;
    } else if (fileUrls?.backImageUrl) {
      deck.backImage = fileUrls.backImageUrl;
    }

    return deck.save();
  }

  async findAll() {
    return this.deckModel.find({ 
      $or: [
        { isDeleted: { $ne: true } },
        { isDeleted: { $exists: false } }
      ] 
    }).sort({ createdAt: -1 });
  }

  async findOne(id: string) {
    const deck = await this.deckModel.findOne({
      _id: id,
      $or: [
        { isDeleted: { $ne: true } },
        { isDeleted: { $exists: false } }
      ]
    });

    if (!deck) {
      throw new NotFoundException('Không tìm thấy bộ bài');
    }

    return deck;
  }

  async update(id: string, updateDeckDto: UpdateDeckDto, files?: {
    coverImage?: Express.Multer.File[],
    backImage?: Express.Multer.File[]
  }) {
    const deck = await this.findOne(id);

    if (updateDeckDto.name) {
      deck.name = updateDeckDto.name;
    }

    if (updateDeckDto.description) {
      deck.description = updateDeckDto.description;
    }

    if (files?.coverImage?.[0]) {
      const coverImageUrl = await this.s3Service.uploadFile(
        files.coverImage[0],
        'tarot/decks/covers'
      );
      deck.coverImage = coverImageUrl;
    } else if (updateDeckDto.coverImageUrl) {
      deck.coverImage = updateDeckDto.coverImageUrl;
    }

    if (files?.backImage?.[0]) {
      const backImageUrl = await this.s3Service.uploadFile(
        files.backImage[0],
        'tarot/decks/backs'
      );
      deck.backImage = backImageUrl;
    } else if (updateDeckDto.backImageUrl) {
      deck.backImage = updateDeckDto.backImageUrl;
    }

    return deck.save();
  }

  async softDelete(id: string) {
    const deck = await this.findOne(id);
    deck.isDeleted = true;
    return deck.save();
  }
} 