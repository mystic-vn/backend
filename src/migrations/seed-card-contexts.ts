import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { CardContext } from '../tarot/card-contexts/schemas/card-context.schema';
import { generateWandsContexts } from './card-contexts/wands';
import { generateCupsContexts } from './card-contexts/cups';
import { generateSwordsContexts } from './card-contexts/swords';
import { generatePentaclesContexts } from './card-contexts/pentacles';
import { generateMajorContexts } from './card-contexts/major';
import { getRelatedIds } from './card-contexts/types';

@Injectable()
export class SeedCardContexts {
  constructor(
    @InjectModel(CardContext.name)
    private cardContextModel: Model<CardContext>,
    private connection: Connection
  ) {}

  async run() {
    try {
      // Xóa dữ liệu cũ
      await this.cardContextModel.deleteMany({});

      // Lấy IDs của tất cả cards và contexts
      const relatedIds = await getRelatedIds(this.connection);

      // Tổng hợp dữ liệu từ tất cả các bộ bài
      const cardContexts = [
        ...generateMajorContexts(relatedIds),
        ...generateWandsContexts(relatedIds),
        ...generateCupsContexts(relatedIds),
        ...generateSwordsContexts(relatedIds),
        ...generatePentaclesContexts(relatedIds)
      ];

      // Lưu vào database
      await this.cardContextModel.insertMany(cardContexts);

      console.log('✅ Seeded card contexts successfully');
    } catch (error) {
      console.error('❌ Error seeding card contexts:', error);
      throw error;
    }
  }
} 