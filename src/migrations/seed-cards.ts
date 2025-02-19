import { Card, CardType } from '../tarot/cards/schemas/card.schema';
import { Connection, Types } from 'mongoose';
import { CardSuit } from '../tarot/suits/schemas/suit.schema';

interface RelatedIds {
  deckId: string;
  majorArcanaId: string;
  minorArcanaId: string;
  suitMap: { [key in CardSuit]: string };
}

interface CardData {
  name: string;
  description: string;
  imageUrl: string;
  deckId: string;
  number: number;
  type: CardType;
  suitId?: string;
  arcanaTypeId: string;
  generalKeywords: string[];
  generalMeaningUpright: string;
  generalMeaningReversed: string;
}

// Hàm helper để lấy ID của các model liên quan
async function getRelatedIds(connection: Connection): Promise<RelatedIds> {
  const DeckModel = connection.model('Deck');
  const ArcanaTypeModel = connection.model('ArcanaType');
  const SuitModel = connection.model('Suit');

  const deck = await DeckModel.findOne({ name: 'Smith Waite Tarot' });
  const majorArcana = await ArcanaTypeModel.findOne({ type: CardType.MAJOR });
  const minorArcana = await ArcanaTypeModel.findOne({ type: CardType.MINOR });
  const suits = await SuitModel.find();

  const suitMap = suits.reduce<{ [key in CardSuit]: string }>((acc, suit) => {
    acc[suit.name] = suit._id.toString();
    return acc;
  }, {} as { [key in CardSuit]: string });

  return {
    deckId: deck._id.toString(),
    majorArcanaId: majorArcana._id.toString(),
    minorArcanaId: minorArcana._id.toString(),
    suitMap
  };
}

// Định nghĩa 78 lá bài
export const generateCards = async (relatedIds: RelatedIds): Promise<CardData[]> => {
  const { deckId, majorArcanaId, minorArcanaId, suitMap } = relatedIds;

  const majorArcanaCards: CardData[] = [
    {
      name: 'The Fool',
      description: 'Người Khờ - biểu tượng của sự ngây thơ, tự do và khởi đầu mới',
      imageUrl: '',
      deckId,
      number: 0,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['khởi đầu mới', 'tự do', 'ngây thơ', 'phiêu lưu', 'tự phát'],
      generalMeaningUpright: 'Bắt đầu một hành trình mới với tâm hồn tự do, không lo lắng về kết quả',
      generalMeaningReversed: 'Thiếu suy nghĩ, liều lĩnh, không có kế hoạch'
    },
    {
      name: 'The Magician',
      description: 'Nhà Ảo Thuật - biểu tượng của sự sáng tạo, ý chí và khả năng biến ước mơ thành hiện thực',
      imageUrl: '',
      deckId,
      number: 1,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['sáng tạo', 'ý chí', 'kỹ năng', 'tập trung', 'hành động'],
      generalMeaningUpright: 'Có đủ nguồn lực và khả năng để thực hiện mục tiêu',
      generalMeaningReversed: 'Thao túng, lừa dối, lãng phí tài năng'
    },
    {
      name: 'The High Priestess',
      description: 'Nữ Tư Tế - biểu tượng của trực giác, bí ẩn và tri thức nội tại',
      imageUrl: '',
      deckId,
      number: 2,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['trực giác', 'bí ẩn', 'tri thức nội tại', 'tiềm thức', 'khôn ngoan'],
      generalMeaningUpright: 'Lắng nghe tiếng nói nội tâm và trực giác của bản thân',
      generalMeaningReversed: 'Bỏ qua trực giác, thiếu kết nối với nội tâm'
    },
    {
      name: 'The Empress',
      description: 'Nữ Hoàng - biểu tượng của sự phong phú, sáng tạo và nuôi dưỡng',
      imageUrl: '',
      deckId,
      number: 3,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['phong phú', 'sáng tạo', 'nuôi dưỡng', 'sinh sản', 'tình mẫu tử'],
      generalMeaningUpright: 'Thời kỳ phát triển, sáng tạo và nuôi dưỡng',
      generalMeaningReversed: 'Phụ thuộc quá mức, thiếu sự nuôi dưỡng'
    },
    {
      name: 'The Emperor',
      description: 'Hoàng Đế - biểu tượng của quyền lực, uy quyền và trật tự',
      imageUrl: '',
      deckId,
      number: 4,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['quyền lực', 'uy quyền', 'kỷ luật', 'lãnh đạo', 'cấu trúc'],
      generalMeaningUpright: 'Kiểm soát, ổn định và lãnh đạo hiệu quả',
      generalMeaningReversed: 'Độc đoán, kiểm soát quá mức'
    },
    {
      name: 'The Hierophant',
      description: 'Giáo Hoàng - biểu tượng của truyền thống, giáo dục và tâm linh',
      imageUrl: '',
      deckId,
      number: 5,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['truyền thống', 'giáo dục', 'tâm linh', 'niềm tin', 'quy ước'],
      generalMeaningUpright: 'Tuân theo truyền thống, học hỏi từ người thầy, tìm kiếm sự hướng dẫn tâm linh',
      generalMeaningReversed: 'Thách thức quy ước, nổi loạn, giáo điều cứng nhắc'
    },
    {
      name: 'The Lovers',
      description: 'Đôi Tình Nhân - biểu tượng của tình yêu, sự lựa chọn và hài hòa',
      imageUrl: '',
      deckId,
      number: 6,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['tình yêu', 'lựa chọn', 'hài hòa', 'mối quan hệ', 'giá trị'],
      generalMeaningUpright: 'Tình yêu đích thực, sự lựa chọn từ trái tim, hài hòa trong các mối quan hệ',
      generalMeaningReversed: 'Mất cân bằng trong quan hệ, lựa chọn sai lầm, xung đột nội tâm'
    },
    {
      name: 'The Chariot',
      description: 'Chiến Xa - biểu tượng của ý chí chiến thắng, quyết tâm và tiến bước',
      imageUrl: '',
      deckId,
      number: 7,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['chiến thắng', 'quyết tâm', 'tiến bước', 'kiểm soát', 'thành công'],
      generalMeaningUpright: 'Đạt được thành công thông qua quyết tâm và nỗ lực',
      generalMeaningReversed: 'Thiếu phương hướng, mất kiểm soát, thất bại do thiếu tập trung'
    },
    {
      name: 'Strength',
      description: 'Sức Mạnh - biểu tượng của sức mạnh nội tâm, lòng can đảm và kiên nhẫn',
      imageUrl: '',
      deckId,
      number: 8,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['sức mạnh nội tâm', 'can đảm', 'kiên nhẫn', 'kiểm soát cảm xúc', 'từ bi'],
      generalMeaningUpright: 'Sức mạnh nội tâm, kiểm soát được bản năng, lòng can đảm và kiên nhẫn',
      generalMeaningReversed: 'Yếu đuối, thiếu tự tin, mất kiểm soát cảm xúc'
    },
    {
      name: 'The Hermit',
      description: 'Ẩn Sĩ - biểu tượng của sự tĩnh tâm, nội quán và tìm kiếm chân lý',
      imageUrl: '',
      deckId,
      number: 9,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['tĩnh tâm', 'nội quán', 'cô độc', 'trí tuệ', 'hướng dẫn'],
      generalMeaningUpright: 'Thời gian tĩnh tâm, tìm kiếm chân lý nội tại, sự hướng dẫn tâm linh',
      generalMeaningReversed: 'Cô đơn, cô lập, lạc lối, từ chối lời khuyên'
    },
    {
      name: 'Wheel of Fortune',
      description: 'Bánh Xe Vận Mệnh - biểu tượng của sự thay đổi, vận may và chu kỳ cuộc sống',
      imageUrl: '',
      deckId,
      number: 10,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['thay đổi', 'vận may', 'chu kỳ', 'định mệnh', 'cơ hội'],
      generalMeaningUpright: 'Thay đổi tích cực, vận may, cơ hội mới',
      generalMeaningReversed: 'Thay đổi tiêu cực, xui xẻo, trì hoãn'
    },
    {
      name: 'Justice',
      description: 'Công Lý - biểu tượng của sự công bằng, cân bằng và trách nhiệm',
      imageUrl: '',
      deckId,
      number: 11,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['công bằng', 'cân bằng', 'trách nhiệm', 'chân thật', 'quyết định'],
      generalMeaningUpright: 'Công lý được thực thi, quyết định công bằng, cân bằng',
      generalMeaningReversed: 'Bất công, thiếu cân bằng, trốn tránh trách nhiệm'
    },
    {
      name: 'The Hanged Man',
      description: 'Người Treo Cổ - biểu tượng của sự hy sinh, buông bỏ và nhìn nhận mới',
      imageUrl: '',
      deckId,
      number: 12,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['hy sinh', 'buông bỏ', 'quan điểm mới', 'chờ đợi', 'giác ngộ'],
      generalMeaningUpright: 'Nhìn nhận vấn đề từ góc độ mới, sự hy sinh cần thiết',
      generalMeaningReversed: 'Trì hoãn vô ích, bám víu, thiếu sẵn sàng thay đổi'
    },
    {
      name: 'Death',
      description: 'Tử Thần - biểu tượng của sự kết thúc, chuyển hóa và tái sinh',
      imageUrl: '',
      deckId,
      number: 13,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['kết thúc', 'chuyển hóa', 'tái sinh', 'thay đổi', 'buông bỏ'],
      generalMeaningUpright: 'Kết thúc một giai đoạn, chuyển hóa và bắt đầu mới',
      generalMeaningReversed: 'Kháng cự thay đổi, trì trệ, sợ hãi kết thúc'
    },
    {
      name: 'Temperance',
      description: 'Tiết Chế - biểu tượng của sự cân bằng, hòa hợp và kiên nhẫn',
      imageUrl: '',
      deckId,
      number: 14,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['cân bằng', 'hòa hợp', 'kiên nhẫn', 'điều độ', 'tích hợp'],
      generalMeaningUpright: 'Tìm thấy sự cân bằng, hòa hợp trong cuộc sống',
      generalMeaningReversed: 'Mất cân bằng, thái quá, thiếu kiên nhẫn'
    },
    {
      name: 'The Devil',
      description: 'Ác Quỷ - biểu tượng của sự ràng buộc, dục vọng và bóng tối nội tâm',
      imageUrl: '',
      deckId,
      number: 15,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['ràng buộc', 'dục vọng', 'bóng tối', 'vật chất', 'nghiện ngập'],
      generalMeaningUpright: 'Đối mặt với bóng tối nội tâm, nhận ra sự ràng buộc',
      generalMeaningReversed: 'Giải phóng khỏi ràng buộc, đối mặt với nỗi sợ'
    },
    {
      name: 'The Tower',
      description: 'Tháp - biểu tượng của sự đổ vỡ bất ngờ, giải phóng và thức tỉnh',
      imageUrl: '',
      deckId,
      number: 16,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['đổ vỡ', 'thay đổi đột ngột', 'giải phóng', 'thức tỉnh', 'hỗn loạn'],
      generalMeaningUpright: 'Thay đổi đột ngột, phá vỡ những niềm tin sai lầm',
      generalMeaningReversed: 'Tránh né thay đổi, kéo dài tình trạng không tốt'
    },
    {
      name: 'The Star',
      description: 'Ngôi Sao - biểu tượng của hy vọng, cảm hứng và sự hướng dẫn',
      imageUrl: '',
      deckId,
      number: 17,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['hy vọng', 'cảm hứng', 'hướng dẫn', 'chữa lành', 'niềm tin'],
      generalMeaningUpright: 'Tìm thấy hy vọng và niềm tin mới, được chữa lành',
      generalMeaningReversed: 'Mất niềm tin, thất vọng, thiếu hy vọng'
    },
    {
      name: 'The Moon',
      description: 'Mặt Trăng - biểu tượng của ảo tưởng, nỗi sợ và tiềm thức',
      imageUrl: '',
      deckId,
      number: 18,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['ảo tưởng', 'nỗi sợ', 'tiềm thức', 'bí ẩn', 'trực giác'],
      generalMeaningUpright: 'Đối mặt với nỗi sợ và ảo tưởng, tin tưởng trực giác',
      generalMeaningReversed: 'Hoang tưởng, lừa dối, rối loạn cảm xúc'
    },
    {
      name: 'The Sun',
      description: 'Mặt Trời - biểu tượng của niềm vui, thành công và sự rõ ràng',
      imageUrl: '',
      deckId,
      number: 19,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['niềm vui', 'thành công', 'rõ ràng', 'tích cực', 'hạnh phúc'],
      generalMeaningUpright: 'Thành công rực rỡ, niềm vui và sự rõ ràng trong cuộc sống',
      generalMeaningReversed: 'Tạm thời u ám, thiếu nhiệt huyết, trì hoãn thành công'
    },
    {
      name: 'Judgement',
      description: 'Phán Xét - biểu tượng của sự thức tỉnh, tái sinh và gọi mời',
      imageUrl: '',
      deckId,
      number: 20,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['thức tỉnh', 'tái sinh', 'gọi mời', 'phán xét', 'tha thứ'],
      generalMeaningUpright: 'Thức tỉnh tâm linh, tái sinh và tha thứ',
      generalMeaningReversed: 'Từ chối lời gọi, tự phán xét, hối tiếc'
    },
    {
      name: 'The World',
      description: 'Thế Giới - biểu tượng của sự hoàn thành, thành tựu và tròn đầy',
      imageUrl: '',
      deckId,
      number: 21,
      type: CardType.MAJOR,
      arcanaTypeId: majorArcanaId,
      generalKeywords: ['hoàn thành', 'thành tựu', 'tròn đầy', 'hài hòa', 'kết thúc chu kỳ'],
      generalMeaningUpright: 'Hoàn thành một chu kỳ, đạt được mục tiêu, cảm giác trọn vẹn',
      generalMeaningReversed: 'Chưa hoàn thành, trì hoãn, thiếu kết thúc'
    }
  ];

  // Tạo các lá Minor Arcana cho mỗi suit
  const createMinorArcanaForSuit = (suit: CardSuit, suitId: string): CardData[] => {
    const cards: CardData[] = [];

    if (suit === CardSuit.WANDS) {
      // Ace to 10 of Wands
      const wandsCards = [
        {
          name: 'Ace of Wands',
          description: 'Át Gậy - biểu tượng của nguồn năng lượng mới, cảm hứng và khởi đầu sáng tạo',
          number: 22,
          generalKeywords: ['khởi đầu', 'cảm hứng', 'tiềm năng', 'sáng tạo', 'nhiệt huyết'],
          generalMeaningUpright: 'Sự khởi đầu đầy hứng khởi, năng lượng sáng tạo mới, cơ hội phát triển',
          generalMeaningReversed: 'Trì hoãn dự án, thiếu động lực, ý tưởng chưa chín muồi'
        },
        {
          name: 'Two of Wands',
          description: 'Hai Gậy - biểu tượng của kế hoạch, quyết định và tầm nhìn xa',
          number: 23,
          generalKeywords: ['kế hoạch', 'quyết định', 'tầm nhìn', 'lựa chọn', 'chuẩn bị'],
          generalMeaningUpright: 'Lập kế hoạch cho tương lai, đưa ra quyết định quan trọng, mở rộng tầm nhìn',
          generalMeaningReversed: 'Thiếu kế hoạch, do dự trong quyết định, sợ thay đổi'
        },
        {
          name: 'Three of Wands',
          description: 'Ba Gậy - biểu tượng của thành quả đầu tiên, mở rộng và khám phá',
          number: 24,
          generalKeywords: ['mở rộng', 'thành quả', 'khám phá', 'cơ hội', 'phát triển'],
          generalMeaningUpright: 'Nhìn thấy thành quả đầu tiên, cơ hội mở rộng, khám phá những chân trời mới',
          generalMeaningReversed: 'Trì hoãn kết quả, thiếu tầm nhìn xa, khó khăn trong mở rộng'
        },
        {
          name: 'Four of Wands',
          description: 'Bốn Gậy - biểu tượng của sự ổn định, thành công và lễ kỷ niệm',
          number: 25,
          generalKeywords: ['ổn định', 'thành công', 'kỷ niệm', 'hạnh phúc', 'hoàn thành'],
          generalMeaningUpright: 'Đạt được mốc quan trọng, kỷ niệm thành công, cảm giác ổn định và hài lòng',
          generalMeaningReversed: 'Chưa đạt mục tiêu, thiếu ổn định, xáo trộn trong công việc'
        },
        {
          name: 'Five of Wands',
          description: 'Năm Gậy - biểu tượng của cạnh tranh, xung đột và thử thách',
          number: 26,
          generalKeywords: ['cạnh tranh', 'xung đột', 'thử thách', 'tranh luận', 'căng thẳng'],
          generalMeaningUpright: 'Đối mặt với cạnh tranh, xung đột cần giải quyết, thử thách trong công việc',
          generalMeaningReversed: 'Tránh né xung đột, cạnh tranh không lành mạnh, mâu thuẫn nội bộ'
        },
        {
          name: 'Six of Wands',
          description: 'Sáu Gậy - biểu tượng của chiến thắng, công nhận và thành công',
          number: 27,
          generalKeywords: ['chiến thắng', 'công nhận', 'thành công', 'tự hào', 'thành tựu'],
          generalMeaningUpright: 'Đạt được thành công, được công nhận và tôn vinh, cảm giác tự hào',
          generalMeaningReversed: 'Kiêu ngạo, thất bại, thiếu sự công nhận'
        },
        {
          name: 'Seven of Wands',
          description: 'Bảy Gậy - biểu tượng của sự phòng thủ, kiên trì và đương đầu',
          number: 28,
          generalKeywords: ['phòng thủ', 'kiên trì', 'đương đầu', 'thách thức', 'bảo vệ'],
          generalMeaningUpright: 'Bảo vệ vị trí, đương đầu với thách thức, kiên trì giữ vững lập trường',
          generalMeaningReversed: 'Cảm thấy bị áp đảo, thiếu tự tin, từ bỏ vị trí'
        },
        {
          name: 'Eight of Wands',
          description: 'Tám Gậy - biểu tượng của hành động nhanh, tiến triển và thông tin',
          number: 29,
          generalKeywords: ['hành động nhanh', 'tiến triển', 'thông tin', 'chuyển động', 'tốc độ'],
          generalMeaningUpright: 'Sự việc tiến triển nhanh chóng, tin tức quan trọng, hành động quyết đoán',
          generalMeaningReversed: 'Trì hoãn, chậm tiến độ, thông tin không rõ ràng'
        },
        {
          name: 'Nine of Wands',
          description: 'Chín Gậy - biểu tượng của sự kiên cường, cảnh giác và bền bỉ',
          number: 30,
          generalKeywords: ['kiên cường', 'cảnh giác', 'bền bỉ', 'phòng vệ', 'kinh nghiệm'],
          generalMeaningUpright: 'Kiên trì đến cùng, cảnh giác với thử thách, sử dụng kinh nghiệm quá khứ',
          generalMeaningReversed: 'Kiệt sức, quá đề phòng, thiếu sức bền'
        },
        {
          name: 'Ten of Wands',
          description: 'Mười Gậy - biểu tượng của gánh nặng, trách nhiệm và áp lực',
          number: 31,
          generalKeywords: ['gánh nặng', 'trách nhiệm', 'áp lực', 'quá tải', 'cam kết'],
          generalMeaningUpright: 'Gánh vác nhiều trách nhiệm, cảm thấy quá tải, nỗ lực hoàn thành cam kết',
          generalMeaningReversed: 'Từ bỏ gánh nặng, chia sẻ trách nhiệm, giảm áp lực'
        },
        {
          name: 'Page of Wands',
          description: 'Thị Đồng Gậy - biểu tượng của sự khám phá, nhiệt tình và tin tức mới',
          number: 32,
          generalKeywords: ['khám phá', 'nhiệt tình', 'tin tức', 'học hỏi', 'phiêu lưu'],
          generalMeaningUpright: 'Tin tức tốt lành, khởi đầu mới đầy nhiệt huyết, tinh thần khám phá',
          generalMeaningReversed: 'Tin xấu, thiếu kiên nhẫn, hấp tấp trong quyết định'
        },
        {
          name: 'Knight of Wands',
          description: 'Kỵ Sĩ Gậy - biểu tượng của hành động, phiêu lưu và nhiệt huyết',
          number: 33,
          generalKeywords: ['hành động', 'phiêu lưu', 'nhiệt huyết', 'can đảm', 'năng động'],
          generalMeaningUpright: 'Hành động quyết đoán, dũng cảm theo đuổi mục tiêu, tinh thần phiêu lưu',
          generalMeaningReversed: 'Hấp tấp, thiếu suy nghĩ, năng lượng tiêu cực'
        },
        {
          name: 'Queen of Wands',
          description: 'Hoàng Hậu Gậy - biểu tượng của sự tự tin, quyến rũ và năng lượng tích cực',
          number: 34,
          generalKeywords: ['tự tin', 'quyến rũ', 'năng động', 'sáng tạo', 'lãnh đạo'],
          generalMeaningUpright: 'Tự tin và quyến rũ, năng lượng tích cực, khả năng lãnh đạo tự nhiên',
          generalMeaningReversed: 'Đòi hỏi sự chú ý, ghen tị, thiếu tự tin'
        },
        {
          name: 'King of Wands',
          description: 'Hoàng Đế Gậy - biểu tượng của tầm nhìn, quyền lực và sự sáng tạo',
          number: 35,
          generalKeywords: ['tầm nhìn', 'quyền lực', 'sáng tạo', 'lãnh đạo', 'thành công'],
          generalMeaningUpright: 'Lãnh đạo đầy tầm nhìn, sức mạnh sáng tạo, đạt được mục tiêu',
          generalMeaningReversed: 'Độc đoán, kiêu ngạo, lạm dụng quyền lực'
        }
      ];

      wandsCards.forEach(card => {
        cards.push({
          ...card,
          imageUrl: '',
          deckId,
          type: CardType.MINOR,
          suitId,
          arcanaTypeId: minorArcanaId,
        });
      });
    } else if (suit === CardSuit.CUPS) {
      // Ace to 14 of Cups
      const cupsCards = [
        {
          name: 'Ace of Cups',
          description: 'Át Ly - biểu tượng của tình yêu mới, cảm xúc dạt dào và sự khởi đầu về tình cảm',
          number: 36,
          generalKeywords: ['tình yêu mới', 'cảm xúc', 'trực giác', 'hạnh phúc', 'chữa lành'],
          generalMeaningUpright: 'Tình yêu mới nảy nở, cảm xúc tràn đầy, khởi đầu mối quan hệ mới',
          generalMeaningReversed: 'Cảm xúc tiêu cực, tình yêu tan vỡ, thiếu kết nối tình cảm'
        },
        {
          name: 'Two of Cups',
          description: 'Hai Ly - biểu tượng của sự kết hợp, quan hệ đối tác và tình yêu đôi lứa',
          number: 37,
          generalKeywords: ['hợp tác', 'tình yêu', 'cam kết', 'hòa hợp', 'kết nối'],
          generalMeaningUpright: 'Mối quan hệ hài hòa, tình yêu đẹp, hợp tác tốt đẹp',
          generalMeaningReversed: 'Chia tay, mất cân bằng trong quan hệ, xung đột'
        },
        {
          name: 'Three of Cups',
          description: 'Ba Ly - biểu tượng của niềm vui, lễ kỷ niệm và tình bạn',
          number: 38,
          generalKeywords: ['kỷ niệm', 'tình bạn', 'niềm vui', 'hội hè', 'chia sẻ'],
          generalMeaningUpright: 'Thời gian vui vẻ với bạn bè, kỷ niệm thành công, chia sẻ niềm vui',
          generalMeaningReversed: 'Cô đơn trong đám đông, tiệc tùng thái quá, mối quan hệ hời hợt'
        },
        {
          name: 'Four of Cups',
          description: 'Bốn Ly - biểu tượng của sự chán nản, thiền định và tự phản tỉnh',
          number: 39,
          generalKeywords: ['chán nản', 'thiền định', 'từ chối', 'nội tâm', 'bất mãn'],
          generalMeaningUpright: 'Cảm giác chán nản, cần thời gian một mình, không nhận ra cơ hội',
          generalMeaningReversed: 'Tỉnh thức, nhận ra cơ hội mới, vượt qua chán nản'
        },
        {
          name: 'Five of Cups',
          description: 'Năm Ly - biểu tượng của sự mất mát, tiếc nuối và nỗi buồn',
          number: 40,
          generalKeywords: ['mất mát', 'tiếc nuối', 'buồn bã', 'thất vọng', 'hy vọng'],
          generalMeaningUpright: 'Đau buồn vì mất mát, tập trung vào tiêu cực, cần thời gian để vượt qua',
          generalMeaningReversed: 'Bắt đầu hồi phục, chấp nhận mất mát, nhìn về phía trước'
        },
        {
          name: 'Six of Cups',
          description: 'Sáu Ly - biểu tượng của hoài niệm, kỷ niệm và sự ngây thơ',
          number: 41,
          generalKeywords: ['hoài niệm', 'kỷ niệm', 'ngây thơ', 'quá khứ', 'hạnh phúc'],
          generalMeaningUpright: 'Nhớ về kỷ niệm đẹp, tình cảm thuần khiết, niềm vui từ quá khứ',
          generalMeaningReversed: 'Mắc kẹt trong quá khứ, hoài niệm không lành mạnh'
        },
        {
          name: 'Seven of Cups',
          description: 'Bảy Ly - biểu tượng của ảo tưởng, lựa chọn và mơ mộng',
          number: 42,
          generalKeywords: ['ảo tưởng', 'lựa chọn', 'mơ mộng', 'tưởng tượng', 'hoang tưởng'],
          generalMeaningUpright: 'Nhiều lựa chọn gây hoang mang, mơ mộng viển vông, cần thực tế hơn',
          generalMeaningReversed: 'Đối mặt với thực tế, làm rõ mục tiêu, tập trung vào ưu tiên'
        },
        {
          name: 'Eight of Cups',
          description: 'Tám Ly - biểu tượng của từ bỏ, rời xa và tìm kiếm ý nghĩa',
          number: 43,
          generalKeywords: ['từ bỏ', 'rời xa', 'tìm kiếm', 'hành trình', 'thay đổi'],
          generalMeaningUpright: 'Rời bỏ tình huống không còn phù hợp, tìm kiếm ý nghĩa sâu sắc hơn',
          generalMeaningReversed: 'Sợ thay đổi, quay lại tình huống cũ, thiếu can đảm'
        },
        {
          name: 'Nine of Cups',
          description: 'Chín Ly - biểu tượng của mãn nguyện, ước mơ thành hiện thực và hạnh phúc',
          number: 44,
          generalKeywords: ['mãn nguyện', 'ước mơ', 'hạnh phúc', 'thành công', 'thỏa mãn'],
          generalMeaningUpright: 'Ước mơ thành hiện thực, cảm giác mãn nguyện, hạnh phúc trọn vẹn',
          generalMeaningReversed: 'Tham lam, không biết đủ, hạnh phúc giả tạo'
        },
        {
          name: 'Ten of Cups',
          description: 'Mười Ly - biểu tượng của hạnh phúc gia đình, hòa hợp và tình yêu trọn vẹn',
          number: 45,
          generalKeywords: ['gia đình', 'hòa hợp', 'hạnh phúc', 'tình yêu', 'trọn vẹn'],
          generalMeaningUpright: 'Hạnh phúc gia đình trọn vẹn, tình yêu viên mãn, cảm giác bình an',
          generalMeaningReversed: 'Xung đột gia đình, mất hòa khí, hạnh phúc không trọn vẹn'
        },
        {
          name: 'Page of Cups',
          description: 'Thị Đồng Ly - biểu tượng của tin vui về tình cảm, sự ngây thơ và sáng tạo',
          number: 46,
          generalKeywords: ['tin vui', 'ngây thơ', 'sáng tạo', 'tình cảm mới', 'học hỏi'],
          generalMeaningUpright: 'Tin vui về tình cảm, khởi đầu sáng tạo, tâm hồn trẻ thơ',
          generalMeaningReversed: 'Tin buồn, thất vọng trong tình cảm, thiếu trưởng thành'
        },
        {
          name: 'Knight of Cups',
          description: 'Kỵ Sĩ Ly - biểu tượng của lãng mạn, quyến rũ và theo đuổi đam mê',
          number: 47,
          generalKeywords: ['lãng mạn', 'quyến rũ', 'đam mê', 'nghệ thuật', 'cảm xúc'],
          generalMeaningUpright: 'Đề xuất lãng mạn, theo đuổi đam mê, tinh thần nghệ thuật',
          generalMeaningReversed: 'Lừa dối trong tình cảm, ảo tưởng, thiếu cam kết'
        },
        {
          name: 'Queen of Cups',
          description: 'Hoàng Hậu Ly - biểu tượng của trực giác, nuôi dưỡng và thấu cảm',
          number: 48,
          generalKeywords: ['trực giác', 'nuôi dưỡng', 'thấu cảm', 'yêu thương', 'cảm thông'],
          generalMeaningUpright: 'Trực giác mạnh mẽ, tình yêu vô điều kiện, khả năng thấu cảm',
          generalMeaningReversed: 'Phụ thuộc cảm xúc, dễ bị tổn thương, mất kết nối trực giác'
        },
        {
          name: 'King of Cups',
          description: 'Hoàng Đế Ly - biểu tượng của kiểm soát cảm xúc, thông thái và từ bi',
          number: 49,
          generalKeywords: ['kiểm soát cảm xúc', 'thông thái', 'từ bi', 'cân bằng', 'lãnh đạo'],
          generalMeaningUpright: 'Làm chủ cảm xúc, lãnh đạo bằng trái tim, sự thông thái và từ bi',
          generalMeaningReversed: 'Thiếu kiểm soát cảm xúc, thao túng tình cảm, lạnh lùng'
        }
      ];

      cupsCards.forEach(card => {
        cards.push({
          ...card,
          imageUrl: '',
          deckId,
          type: CardType.MINOR,
          suitId,
          arcanaTypeId: minorArcanaId,
        });
      });
    } else if (suit === CardSuit.PENTACLES) {
      // Ace to 14 of Pentacles
      const pentaclesCards = [
        {
          name: 'Ace of Pentacles',
          description: 'Át Tiền - biểu tượng của cơ hội vật chất mới, sự thịnh vượng và khởi đầu tài chính',
          number: 50,
          generalKeywords: ['cơ hội mới', 'thịnh vượng', 'vật chất', 'tài chính', 'thành công'],
          generalMeaningUpright: 'Cơ hội tài chính mới, khởi đầu thịnh vượng, nền tảng vững chắc',
          generalMeaningReversed: 'Cơ hội bị bỏ lỡ, mất mát tài chính, đầu tư sai lầm'
        },
        {
          name: 'Two of Pentacles',
          description: 'Hai Tiền - biểu tượng của sự cân bằng, linh hoạt và quản lý nhiều việc',
          number: 51,
          generalKeywords: ['cân bằng', 'linh hoạt', 'quản lý', 'thích nghi', 'đa nhiệm'],
          generalMeaningUpright: 'Giữ cân bằng nhiều trách nhiệm, thích nghi với thay đổi, quản lý tốt',
          generalMeaningReversed: 'Mất cân bằng, quá tải, khó điều phối công việc'
        },
        {
          name: 'Three of Pentacles',
          description: 'Ba Tiền - biểu tượng của kỹ năng chuyên môn, hợp tác và công nhận',
          number: 52,
          generalKeywords: ['kỹ năng', 'hợp tác', 'công nhận', 'chuyên môn', 'học nghề'],
          generalMeaningUpright: 'Được công nhận về chuyên môn, hợp tác hiệu quả, phát triển kỹ năng',
          generalMeaningReversed: 'Thiếu hợp tác, công việc kém chất lượng, không được đánh giá cao'
        },
        {
          name: 'Four of Pentacles',
          description: 'Bốn Tiền - biểu tượng của an toàn tài chính, bảo thủ và nắm giữ',
          number: 53,
          generalKeywords: ['an toàn', 'bảo thủ', 'nắm giữ', 'tích lũy', 'kiểm soát'],
          generalMeaningUpright: 'Đảm bảo an toàn tài chính, giữ vững thành quả, tích lũy',
          generalMeaningReversed: 'Keo kiệt, sợ mất mát, quá bám víu vật chất'
        },
        {
          name: 'Five of Pentacles',
          description: 'Năm Tiền - biểu tượng của khó khăn vật chất, mất mát và cô đơn',
          number: 54,
          generalKeywords: ['khó khăn', 'mất mát', 'cô đơn', 'nghèo khó', 'thử thách'],
          generalMeaningUpright: 'Gặp khó khăn về tài chính, cảm giác cô đơn, thời kỳ thử thách',
          generalMeaningReversed: 'Dần hồi phục, tìm thấy sự giúp đỡ, vượt qua khó khăn'
        },
        {
          name: 'Six of Pentacles',
          description: 'Sáu Tiền - biểu tượng của sự cho và nhận, lòng hào phóng và công bằng',
          number: 55,
          generalKeywords: ['cho và nhận', 'hào phóng', 'công bằng', 'chia sẻ', 'giúp đỡ'],
          generalMeaningUpright: 'Chia sẻ tài nguyên, giúp đỡ người khác, nhận được sự hỗ trợ',
          generalMeaningReversed: 'Nợ nần, cho đi với động cơ không trong sáng, bất công'
        },
        {
          name: 'Seven of Pentacles',
          description: 'Bảy Tiền - biểu tượng của sự kiên nhẫn, đánh giá và thu hoạch',
          number: 56,
          generalKeywords: ['kiên nhẫn', 'đánh giá', 'thu hoạch', 'đầu tư', 'chờ đợi'],
          generalMeaningUpright: 'Đánh giá kết quả, chờ đợi thu hoạch, xem xét đầu tư dài hạn',
          generalMeaningReversed: 'Thiếu kiên nhẫn, đầu tư thất bại, kết quả không như mong đợi'
        },
        {
          name: 'Eight of Pentacles',
          description: 'Tám Tiền - biểu tượng của sự chăm chỉ, học hỏi và hoàn thiện kỹ năng',
          number: 57,
          generalKeywords: ['chăm chỉ', 'học hỏi', 'kỹ năng', 'cần mẫn', 'tiến bộ'],
          generalMeaningUpright: 'Phát triển kỹ năng, làm việc chăm chỉ, học hỏi không ngừng',
          generalMeaningReversed: 'Công việc thiếu chất lượng, lười biếng, thiếu động lực học hỏi'
        },
        {
          name: 'Nine of Pentacles',
          description: 'Chín Tiền - biểu tượng của sự độc lập, thành công và sang trọng',
          number: 58,
          generalKeywords: ['độc lập', 'thành công', 'sang trọng', 'tự chủ', 'thành tựu'],
          generalMeaningUpright: 'Độc lập về tài chính, tận hưởng thành công, cuộc sống sung túc',
          generalMeaningReversed: 'Phụ thuộc tài chính, khoe khoang, thiếu kỷ luật'
        },
        {
          name: 'Ten of Pentacles',
          description: 'Mười Tiền - biểu tượng của sự giàu có, di sản và an ninh lâu dài',
          number: 59,
          generalKeywords: ['giàu có', 'di sản', 'gia đình', 'thịnh vượng', 'ổn định'],
          generalMeaningUpright: 'Thịnh vượng lâu dài, di sản gia đình, an ninh tài chính',
          generalMeaningReversed: 'Mất mát tài sản, xung đột gia đình về tiền bạc, bất ổn'
        },
        {
          name: 'Page of Pentacles',
          description: 'Thị Đồng Tiền - biểu tượng của học hỏi, cơ hội mới và tin tức về tài chính',
          number: 60,
          generalKeywords: ['học hỏi', 'cơ hội', 'tin tức', 'thực tế', 'chăm chỉ'],
          generalMeaningUpright: 'Tin tức về tài chính, cơ hội học hỏi mới, tinh thần thực tế',
          generalMeaningReversed: 'Lãng phí cơ hội, thiếu tập trung, tin xấu về tài chính'
        },
        {
          name: 'Knight of Pentacles',
          description: 'Kỵ Sĩ Tiền - biểu tượng của sự đáng tin cậy, cần mẫn và kiên trì',
          number: 61,
          generalKeywords: ['đáng tin cậy', 'cần mẫn', 'kiên trì', 'trách nhiệm', 'thực tế'],
          generalMeaningUpright: 'Làm việc chăm chỉ, đáng tin cậy, theo đuổi mục tiêu kiên trì',
          generalMeaningReversed: 'Trì trệ, cầu toàn quá mức, thiếu linh hoạt'
        },
        {
          name: 'Queen of Pentacles',
          description: 'Hoàng Hậu Tiền - biểu tượng của sự thịnh vượng, chu đáo và thực tế',
          number: 62,
          generalKeywords: ['thịnh vượng', 'chu đáo', 'thực tế', 'quản lý', 'nuôi dưỡng'],
          generalMeaningUpright: 'Quản lý tài chính tốt, chăm sóc người khác, thực tế và chu đáo',
          generalMeaningReversed: 'Quá chú trọng vật chất, thiếu cân bằng công việc-gia đình'
        },
        {
          name: 'King of Pentacles',
          description: 'Hoàng Đế Tiền - biểu tượng của sự thành công, kinh doanh và sự ổn định',
          number: 63,
          generalKeywords: ['thành công', 'kinh doanh', 'ổn định', 'thịnh vượng', 'lãnh đạo'],
          generalMeaningUpright: 'Thành công trong kinh doanh, lãnh đạo tài ba, tạo dựng sự ổn định',
          generalMeaningReversed: 'Tham lam, độc đoán trong kinh doanh, mất kiểm soát tài chính'
        }
      ];

      pentaclesCards.forEach(card => {
        cards.push({
          ...card,
          imageUrl: '',
          deckId,
          type: CardType.MINOR,
          suitId,
          arcanaTypeId: minorArcanaId,
        });
      });
    } else if (suit === CardSuit.SWORDS) {
      // Ace to 14 of Swords
      const swordsCards = [
        {
          name: 'Ace of Swords',
          description: 'Át Kiếm - biểu tượng của sự sáng suốt, chân lý và khởi đầu mới trong tư duy',
          number: 64,
          generalKeywords: ['sáng suốt', 'chân lý', 'trí tuệ', 'quyết đoán', 'đột phá'],
          generalMeaningUpright: 'Tìm thấy chân lý, sự sáng suốt trong tư duy, đột phá mới',
          generalMeaningReversed: 'Nhầm lẫn, thiếu sáng suốt, ý tưởng sai lầm'
        },
        {
          name: 'Two of Swords',
          description: 'Hai Kiếm - biểu tượng của lưỡng lự, cân nhắc và quyết định khó khăn',
          number: 65,
          generalKeywords: ['lưỡng lự', 'cân nhắc', 'quyết định', 'đối mặt', 'bế tắc'],
          generalMeaningUpright: 'Cần cân nhắc kỹ lưỡng, đối mặt với quyết định khó khăn',
          generalMeaningReversed: 'Bối rối, không thể quyết định, tránh né vấn đề'
        },
        {
          name: 'Three of Swords',
          description: 'Ba Kiếm - biểu tượng của đau khổ, tan vỡ và thử thách cảm xúc',
          number: 66,
          generalKeywords: ['đau khổ', 'tan vỡ', 'thử thách', 'buồn bã', 'học hỏi'],
          generalMeaningUpright: 'Trải qua đau khổ, tan vỡ trong tình cảm, bài học cảm xúc',
          generalMeaningReversed: 'Hồi phục sau tổn thương, vượt qua nỗi đau'
        },
        {
          name: 'Four of Swords',
          description: 'Bốn Kiếm - biểu tượng của nghỉ ngơi, hồi phục và thiền định',
          number: 67,
          generalKeywords: ['nghỉ ngơi', 'hồi phục', 'thiền định', 'tĩnh tâm', 'chuẩn bị'],
          generalMeaningUpright: 'Thời gian nghỉ ngơi cần thiết, hồi phục năng lượng',
          generalMeaningReversed: 'Kiệt sức, thiếu nghỉ ngơi, bồn chồn'
        },
        {
          name: 'Five of Swords',
          description: 'Năm Kiếm - biểu tượng của xung đột, thất bại và mâu thuẫn',
          number: 68,
          generalKeywords: ['xung đột', 'thất bại', 'mâu thuẫn', 'tranh chấp', 'tổn thất'],
          generalMeaningUpright: 'Xung đột và tranh chấp, chiến thắng phù phiếm',
          generalMeaningReversed: 'Hòa giải, vượt qua xung đột, chấp nhận thua cuộc'
        },
        {
          name: 'Six of Swords',
          description: 'Sáu Kiếm - biểu tượng của chuyển tiếp, di chuyển và vượt qua khó khăn',
          number: 69,
          generalKeywords: ['chuyển tiếp', 'di chuyển', 'vượt qua', 'thay đổi', 'bình an'],
          generalMeaningUpright: 'Chuyển sang giai đoạn mới, vượt qua khó khăn',
          generalMeaningReversed: 'Mắc kẹt, khó thay đổi, trở ngại trong chuyển tiếp'
        },
        {
          name: 'Seven of Swords',
          description: 'Bảy Kiếm - biểu tượng của mưu mẹo, lừa dối và chiến lược',
          number: 70,
          generalKeywords: ['mưu mẹo', 'lừa dối', 'chiến lược', 'tránh né', 'thông minh'],
          generalMeaningUpright: 'Cần có chiến lược thông minh, hành động bí mật',
          generalMeaningReversed: 'Đối mặt với sự thật, từ bỏ lừa dối'
        },
        {
          name: 'Eight of Swords',
          description: 'Tám Kiếm - biểu tượng của giới hạn, tự trói buộc và cảm giác bất lực',
          number: 71,
          generalKeywords: ['giới hạn', 'tự trói', 'bất lực', 'sợ hãi', 'niềm tin'],
          generalMeaningUpright: 'Cảm thấy bị giới hạn, tự đặt ra rào cản cho bản thân',
          generalMeaningReversed: 'Giải phóng khỏi giới hạn, vượt qua nỗi sợ'
        },
        {
          name: 'Nine of Swords',
          description: 'Chín Kiếm - biểu tượng của lo âu, ác mộng và nỗi sợ hãi',
          number: 72,
          generalKeywords: ['lo âu', 'ác mộng', 'sợ hãi', 'stress', 'đau khổ'],
          generalMeaningUpright: 'Lo lắng và sợ hãi quá mức, stress tinh thần',
          generalMeaningReversed: 'Vượt qua lo âu, nhìn thấy hy vọng'
        },
        {
          name: 'Ten of Swords',
          description: 'Mười Kiếm - biểu tượng của kết thúc đau đớn, đáy của khổ đau và sự tái sinh',
          number: 73,
          generalKeywords: ['kết thúc', 'đau đớn', 'tái sinh', 'buông bỏ', 'hy vọng'],
          generalMeaningUpright: 'Đạt đến điểm cuối của đau khổ, cơ hội để tái sinh',
          generalMeaningReversed: 'Hồi phục, vượt qua giai đoạn khó khăn'
        },
        {
          name: 'Page of Swords',
          description: 'Thị Đồng Kiếm - biểu tượng của sự tò mò, học hỏi và tin tức mới',
          number: 74,
          generalKeywords: ['tò mò', 'học hỏi', 'tin tức', 'cảnh giác', 'thông minh'],
          generalMeaningUpright: 'Tìm hiểu thông tin mới, tinh thần học hỏi, cảnh giác',
          generalMeaningReversed: 'Tin đồn không tốt, thiếu tập trung, hấp tấp'
        },
        {
          name: 'Knight of Swords',
          description: 'Kỵ Sĩ Kiếm - biểu tượng của hành động nhanh, quyết đoán và tham vọng',
          number: 75,
          generalKeywords: ['nhanh chóng', 'quyết đoán', 'tham vọng', 'mạnh mẽ', 'thẳng thắn'],
          generalMeaningUpright: 'Hành động nhanh chóng, quyết đoán trong mục tiêu',
          generalMeaningReversed: 'Hấp tấp, thiếu suy nghĩ, gây rối'
        },
        {
          name: 'Queen of Swords',
          description: 'Hoàng Hậu Kiếm - biểu tượng của sự thông minh, độc lập và khách quan',
          number: 76,
          generalKeywords: ['thông minh', 'độc lập', 'khách quan', 'thẳng thắn', 'công bằng'],
          generalMeaningUpright: 'Tư duy sắc bén, độc lập trong quyết định, công bằng',
          generalMeaningReversed: 'Cay nghiệt, lạnh lùng, phán xét người khác'
        },
        {
          name: 'King of Swords',
          description: 'Hoàng Đế Kiếm - biểu tượng của quyền lực trí tuệ, logic và công lý',
          number: 77,
          generalKeywords: ['trí tuệ', 'logic', 'công lý', 'quyền lực', 'lãnh đạo'],
          generalMeaningUpright: 'Lãnh đạo bằng trí tuệ, quyết định công bằng và logic',
          generalMeaningReversed: 'Độc đoán, lạm dụng quyền lực, thiếu công bằng'
        }
      ];

      swordsCards.forEach(card => {
        cards.push({
          ...card,
          imageUrl: '',
          deckId,
          type: CardType.MINOR,
          suitId,
          arcanaTypeId: minorArcanaId,
        });
      });
    } else {
      // Ace to 10
      for (let i = 1; i <= 10; i++) {
        cards.push({
          name: `${i} of ${suit}`,
          description: `Lá ${i} trong suit ${suit}`,
          imageUrl: '',
          deckId,
          number: i,
          type: CardType.MINOR,
          suitId,
          arcanaTypeId: minorArcanaId,
          generalKeywords: ['keyword1', 'keyword2'],
          generalMeaningUpright: `Ý nghĩa xuôi của lá ${i} of ${suit}`,
          generalMeaningReversed: `Ý nghĩa ngược của lá ${i} of ${suit}`
        });
      }

      // Court cards
      const courtCards = [
        { name: 'Page', number: 11 },
        { name: 'Knight', number: 12 },
        { name: 'Queen', number: 13 },
        { name: 'King', number: 14 }
      ];

      courtCards.forEach(card => {
        cards.push({
          name: `${card.name} of ${suit}`,
          description: `${card.name} trong suit ${suit}`,
          imageUrl: '',
          deckId,
          number: card.number,
          type: CardType.MINOR,
          suitId,
          arcanaTypeId: minorArcanaId,
          generalKeywords: ['keyword1', 'keyword2'],
          generalMeaningUpright: `Ý nghĩa xuôi của lá ${card.name} of ${suit}`,
          generalMeaningReversed: `Ý nghĩa ngược của lá ${card.name} of ${suit}`
        });
      });
    }

    return cards;
  };

  const minorArcanaCards = [
    ...createMinorArcanaForSuit(CardSuit.CUPS, suitMap[CardSuit.CUPS]),
    ...createMinorArcanaForSuit(CardSuit.WANDS, suitMap[CardSuit.WANDS]),
    ...createMinorArcanaForSuit(CardSuit.PENTACLES, suitMap[CardSuit.PENTACLES]),
    ...createMinorArcanaForSuit(CardSuit.SWORDS, suitMap[CardSuit.SWORDS])
  ];

  return [...majorArcanaCards, ...minorArcanaCards];
};

export async function seedCards(connection: Connection) {
  try {
    console.log('Đang lấy Card model...');
    const CardModel = connection.model(Card.name);
    
    // Kiểm tra xem đã có dữ liệu chưa
    console.log('Kiểm tra dữ liệu hiện có...');
    const existingCount = await CardModel.countDocuments({});
    console.log('Số lượng bản ghi hiện có:', existingCount);
    
    // Nếu đã có dữ liệu, không cần seed nữa
    if (existingCount > 0) {
      console.log('✓ Đã có dữ liệu Cards, bỏ qua quá trình seed');
      return;
    }
    
    // Lấy các ID liên quan
    const relatedIds = await getRelatedIds(connection);
    
    // Tạo dữ liệu cards
    const cards = await generateCards(relatedIds);
    
    // Thêm dữ liệu vào database
    console.log('Chưa có dữ liệu, bắt đầu thêm mới...');
    for (const card of cards) {
      console.log('Đang tạo card:', card.name);
      await CardModel.create(card);
    }
    
    console.log('✓ Đã thêm dữ liệu Cards thành công');
  } catch (error) {
    console.error('Lỗi trong quá trình thêm Cards:', error);
    throw error;
  }
}