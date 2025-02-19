import { Deck } from '../tarot/decks/schemas/deck.schema';
import { Connection } from 'mongoose';

export const DECKS = [
  {
    name: 'Smith Waite Tarot',
    description: 'Bộ bài Rider-Waite-Smith (RWS) là một trong những bộ bài Tarot phổ biến và có ảnh hưởng nhất. Được tạo ra bởi Arthur Edward Waite và minh họa bởi Pamela Colman Smith, xuất bản lần đầu năm 1909.',
    author: 'Arthur Edward Waite & Pamela Colman Smith',
    publishedYear: 1909,
    publisher: 'Rider Company',
    isActive: true,
    imageUrl: '',
    keywords: ['truyền thống', 'phổ biến', 'cổ điển', 'chi tiết', 'biểu tượng'],
  }
];

export async function seedDecks(connection: Connection) {
  try {
    console.log('Đang lấy Deck model...');
    const DeckModel = connection.model(Deck.name);
    
    // Kiểm tra xem đã có dữ liệu chưa
    console.log('Kiểm tra dữ liệu hiện có...');
    const existingCount = await DeckModel.countDocuments({});
    console.log('Số lượng bản ghi hiện có:', existingCount);
    
    // Nếu đã có dữ liệu, không cần seed nữa
    if (existingCount > 0) {
      console.log('✓ Đã có dữ liệu Decks, bỏ qua quá trình seed');
      return;
    }
    
    // Nếu chưa có dữ liệu, thêm mới
    console.log('Chưa có dữ liệu, bắt đầu thêm mới...');
    for (const deck of DECKS) {
      console.log('Đang tạo deck:', deck.name);
      await DeckModel.create(deck);
    }
    
    console.log('✓ Đã thêm dữ liệu Decks thành công');
  } catch (error) {
    console.error('Lỗi trong quá trình thêm Decks:', error);
    throw error;
  }
} 