import { ArcanaType } from '../tarot/arcana-types/schemas/arcana-type.schema';
import { CardType } from '../tarot/cards/schemas/card.schema';
import { Connection } from 'mongoose';

export const ARCANA_TYPES = [
  {
    type: CardType.MAJOR,
    name: 'Major Arcana',
    description: 'Bộ Ẩn Chính (Major Arcana) đại diện cho những bài học nghiệp quả và tâm linh trong cuộc sống. Những lá bài này thể hiện những ảnh hưởng mạnh mẽ và năng lượng lớn đang tác động đến cuộc sống và hành trình tâm linh của bạn.',
    significance: 'Các sự kiện quan trọng trong đời, bài học tâm linh và ảnh hưởng của nghiệp',
    keywords: ['tâm linh', 'nghiệp', 'sự kiện quan trọng', 'nguyên mẫu', 'chuyển hóa'],
    readingFocus: 'Những ảnh hưởng dài hạn và những thay đổi lớn trong cuộc sống'
  },
  {
    type: CardType.MINOR,
    name: 'Minor Arcana',
    description: 'Bộ Ẩn Phụ (Minor Arcana) phản ánh những thử thách và biến cố hàng ngày mà tất cả chúng ta đều phải đối mặt. Những lá bài này thể hiện những vấn đề thường nhật và có thể cho thấy tương lai gần cũng như tình huống hiện tại.',
    significance: 'Các sự kiện hàng ngày, vấn đề thực tế và ảnh hưởng tạm thời',
    keywords: ['cuộc sống hàng ngày', 'thực tế', 'tạm thời', 'thế tục', 'tức thời'],
    readingFocus: 'Những ảnh hưởng ngắn hạn và các vấn đề thực tế'
  }
];

export async function seedArcanaTypes(connection: Connection) {
  try {
    console.log('Đang lấy ArcanaType model...');
    const ArcanaTypeModel = connection.model(ArcanaType.name);
    
    // Kiểm tra xem đã có dữ liệu chưa
    console.log('Kiểm tra dữ liệu hiện có...');
    const existingCount = await ArcanaTypeModel.countDocuments({});
    console.log('Số lượng bản ghi hiện có:', existingCount);
    
    // Nếu đã có dữ liệu, không cần seed nữa
    if (existingCount > 0) {
      console.log('✓ Đã có dữ liệu Arcana types, bỏ qua quá trình seed');
      return;
    }
    
    // Nếu chưa có dữ liệu, thêm mới
    console.log('Chưa có dữ liệu, bắt đầu thêm mới...');
    for (const arcanaType of ARCANA_TYPES) {
      console.log('Đang tạo arcana type:', arcanaType.type);
      await ArcanaTypeModel.create(arcanaType);
    }
    
    console.log('✓ Đã thêm dữ liệu Arcana types thành công');
  } catch (error) {
    console.error('Lỗi trong quá trình thêm Arcana types:', error);
    throw error;
  }
} 