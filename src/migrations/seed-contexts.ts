import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Context } from '../tarot/contexts/schemas/context.schema';

@Injectable()
export class ContextsSeeder {
  constructor(
    @InjectModel(Context.name)
    private readonly contextModel: Model<Context>,
  ) {}

  async seed() {
    const count = await this.contextModel.countDocuments().exec();
    
    if (count === 0) {
      const contexts = [
        {
          name: 'Tình yêu',
          description: 'Các vấn đề về tình cảm, hẹn hò, mối quan hệ trước hôn nhân',
          slug: 'tinh-yeu',
          order: 1,
          type: 'relationship'
        },
        {
          name: 'Gia đạo',
          description: 'Các vấn đề về hôn nhân, gia đình sau kết hôn, quan hệ vợ chồng',
          slug: 'gia-dao',
          order: 2,
          type: 'relationship'
        },
        {
          name: 'Gia đình',
          description: 'Quan hệ với cha mẹ, anh chị em, con cái',
          slug: 'gia-dinh',
          order: 3,
          type: 'relationship'
        },
        {
          name: 'Công việc',
          description: 'Sự nghiệp, học tập, phát triển bản thân, thăng tiến',
          slug: 'cong-viec',
          order: 4,
          type: 'career'
        },
        {
          name: 'Tài chính',
          description: 'Tiền bạc, đầu tư, tài sản, thu nhập, chi tiêu',
          slug: 'tai-chinh',
          order: 5,
          type: 'finance'
        },
        {
          name: 'Các mối quan hệ xã hội',
          description: 'Quan hệ với bạn bè, đồng nghiệp, đối tác',
          slug: 'quan-he-xa-hoi',
          order: 6,
          type: 'social'
        }
      ];

      await this.contextModel.insertMany(contexts);
      console.log('Seeded default contexts');
    } else {
      console.log('Contexts collection is not empty, skipping seeding');
    }
  }
} 