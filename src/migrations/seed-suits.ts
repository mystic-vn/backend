import { CardSuit } from '../tarot/suits/schemas/suit.schema';
import { Connection } from 'mongoose';

export const SUITS = [
  {
    name: CardSuit.CUPS,
    meaning: 'Tình cảm và Trực giác',
    element: 'Nước',
    keywords: ['cảm xúc', 'tình yêu', 'mối quan hệ', 'trực giác', 'tinh thần'],
    description: 'Suit Ly (Cups) liên quan đến thế giới cảm xúc, tình cảm và trực giác. Nó phản ánh các mối quan hệ, tình yêu, và trạng thái tinh thần của chúng ta. Được liên kết với nguyên tố Nước, suit này thể hiện dòng chảy cảm xúc và khả năng thấu cảm.'
  },
  {
    name: CardSuit.WANDS,
    meaning: 'Năng lượng và Sáng tạo',
    element: 'Lửa',
    keywords: ['đam mê', 'sáng tạo', 'hành động', 'ý chí', 'tham vọng'],
    description: 'Suit Trượng (Wands) đại diện cho năng lượng sáng tạo, đam mê và hành động. Được liên kết với nguyên tố Lửa, suit này thể hiện sự nhiệt huyết, khát vọng và động lực thúc đẩy chúng ta tiến về phía trước.'
  },
  {
    name: CardSuit.PENTACLES,
    meaning: 'Vật chất và Thực tế',
    element: 'Đất',
    keywords: ['tiền bạc', 'sự nghiệp', 'vật chất', 'sức khỏe', 'thành tựu'],
    description: 'Suit Xu (Pentacles) liên quan đến thế giới vật chất và những vấn đề thực tế trong cuộc sống. Được liên kết với nguyên tố Đất, suit này phản ánh công việc, tiền bạc, sức khỏe và những thành tựu hữu hình.'
  },
  {
    name: CardSuit.SWORDS,
    meaning: 'Trí tuệ và Tư duy',
    element: 'Khí',
    keywords: ['lý trí', 'trí tuệ', 'giao tiếp', 'sự thật', 'thách thức'],
    description: 'Suit Kiếm (Swords) đại diện cho thế giới của tư duy và trí tuệ. Được liên kết với nguyên tố Khí, suit này thể hiện cách chúng ta suy nghĩ, giao tiếp và đối mặt với những thách thức trong cuộc sống.'
  }
];

export async function seedSuits(connection: Connection) {
  try {
    console.log('Đang lấy Suit model...');
    const SuitModel = connection.model('Suit');
    
    // Kiểm tra xem đã có dữ liệu chưa
    console.log('Kiểm tra dữ liệu hiện có...');
    const existingCount = await SuitModel.countDocuments({});
    console.log('Số lượng bản ghi hiện có:', existingCount);
    
    // Nếu đã có dữ liệu, không cần seed nữa
    if (existingCount > 0) {
      console.log('✓ Đã có dữ liệu Suits, bỏ qua quá trình seed');
      return;
    }
    
    // Nếu chưa có dữ liệu, thêm mới
    console.log('Chưa có dữ liệu, bắt đầu thêm mới...');
    for (const suit of SUITS) {
      console.log('Đang tạo suit:', suit.name);
      await SuitModel.create(suit);
    }
    
    console.log('✓ Đã thêm dữ liệu Suits thành công');
  } catch (error) {
    console.error('Lỗi trong quá trình thêm Suits:', error);
    throw error;
  }
} 