import { Connection } from 'mongoose';
import { SpreadType } from '../tarot-reading/spread-types/schemas/spread-type.schema';
import { Context } from '../tarot/contexts/schemas/context.schema';

interface SpreadTypeData {
  name: string;
  description: string;
  positions: {
    index: number;
    name: string;
    aspect: string;
    description: string;
  }[];
  supportedContexts: string[];
}

export async function seedSpreadTypes(connection: Connection) {
  try {
    console.log('Đang lấy SpreadType và Context model...');
    const SpreadTypeModel = connection.model(SpreadType.name);
    const ContextModel = connection.model(Context.name);

    // Kiểm tra xem đã có spread types chưa
    console.log('Kiểm tra spread types...');
    const existingSpreadTypes = await SpreadTypeModel.find();
    
    if (existingSpreadTypes.length > 0) {
      console.log('✓ Spread types đã tồn tại, bỏ qua');
      return;
    }

    // Lấy tất cả contexts
    const contexts = await ContextModel.find();
    const spreadTypes: SpreadTypeData[] = [];

    // Tạo spread types cho mỗi context
    for (const context of contexts) {
      // Trải bài 1 lá
      const singleCardName = context.name === 'Các mối quan hệ xã hội' 
        ? 'Trải Bài Quan Hệ Xã Hội Đơn Giản'
        : `Trải Bài ${context.name} Đơn Giản`;

      const singleCardDescription = `Một lá bài để hiểu tình hình ${context.name.toLowerCase()} hiện tại của bạn`;

      spreadTypes.push({
        name: singleCardName,
        description: singleCardDescription,
        positions: [{
          index: 0,
          name: `${context.name} Hiện Tại`,
          aspect: `Tình hình ${context.name.toLowerCase()}`,
          description: `Lá bài này phản ánh tình hình ${context.name.toLowerCase()} hiện tại của bạn`
        }],
        supportedContexts: [context._id]
      });

      // Trải bài 3 lá
      let threeCardPositions;
      switch (context.type) {
        case 'relationship':
          threeCardPositions = [
            {
              index: 0,
              name: 'Quá Khứ',
              aspect: 'Nền tảng mối quan hệ',
              description: 'Những gì đã xảy ra trong quá khứ ảnh hưởng đến mối quan hệ hiện tại'
            },
            {
              index: 1,
              name: 'Hiện Tại',
              aspect: 'Tình trạng hiện tại',
              description: 'Tình hình mối quan hệ của bạn ở thời điểm hiện tại'
            },
            {
              index: 2,
              name: 'Tương Lai',
              aspect: 'Tiềm năng phát triển',
              description: 'Hướng phát triển của mối quan hệ trong tương lai gần'
            }
          ];
          break;
        case 'career':
          threeCardPositions = [
            {
              index: 0,
              name: 'Thách Thức',
              aspect: 'Khó khăn cần vượt qua',
              description: 'Những thách thức bạn đang phải đối mặt trong công việc'
            },
            {
              index: 1,
              name: 'Cơ Hội',
              aspect: 'Tiềm năng phát triển',
              description: 'Những cơ hội đang chờ đợi bạn trong sự nghiệp'
            },
            {
              index: 2,
              name: 'Lời Khuyên',
              aspect: 'Hướng đi phù hợp',
              description: 'Lời khuyên để phát triển sự nghiệp tốt nhất'
            }
          ];
          break;
        case 'finance':
          threeCardPositions = [
            {
              index: 0,
              name: 'Thu Nhập',
              aspect: 'Nguồn thu',
              description: 'Tình hình thu nhập và các nguồn thu nhập tiềm năng'
            },
            {
              index: 1,
              name: 'Chi Tiêu',
              aspect: 'Quản lý chi tiêu',
              description: 'Cách bạn quản lý và sử dụng tiền bạc'
            },
            {
              index: 2,
              name: 'Tiết Kiệm',
              aspect: 'Kế hoạch tiết kiệm',
              description: 'Lời khuyên về việc tiết kiệm và đầu tư'
            }
          ];
          break;
        case 'social':
          threeCardPositions = [
            {
              index: 0,
              name: 'Bạn Bè',
              aspect: 'Quan hệ bạn bè',
              description: 'Tình hình các mối quan hệ bạn bè của bạn'
            },
            {
              index: 1,
              name: 'Đồng Nghiệp',
              aspect: 'Quan hệ công việc',
              description: 'Mối quan hệ với đồng nghiệp và cấp trên'
            },
            {
              index: 2,
              name: 'Xã Hội',
              aspect: 'Quan hệ xã hội',
              description: 'Các mối quan hệ xã hội nói chung của bạn'
            }
          ];
          break;
        default:
          threeCardPositions = [
            {
              index: 0,
              name: 'Quá Khứ',
              aspect: 'Nền tảng',
              description: 'Những gì đã xảy ra trong quá khứ'
            },
            {
              index: 1,
              name: 'Hiện Tại',
              aspect: 'Tình trạng hiện tại',
              description: 'Tình hình hiện tại của bạn'
            },
            {
              index: 2,
              name: 'Tương Lai',
              aspect: 'Tiềm năng phát triển',
              description: 'Hướng phát triển trong tương lai gần'
            }
          ];
      }

      const threeCardName = context.name === 'Các mối quan hệ xã hội'
        ? 'Trải Bài Quan Hệ Xã Hội Ba Lá'
        : `Trải Bài ${context.name} Ba Lá`;

      spreadTypes.push({
        name: threeCardName,
        description: `Ba lá bài để hiểu rõ về ${context.description.toLowerCase()}`,
        positions: threeCardPositions,
        supportedContexts: [context._id]
      });
    }

    // Tạo spread types trong database
    await SpreadTypeModel.create(spreadTypes);
    console.log('✓ Đã tạo spread types thành công');
    
  } catch (error) {
    console.error('❌ Lỗi trong quá trình tạo spread types:', error);
    throw error;
  }
} 