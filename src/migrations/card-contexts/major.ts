import { CardContextData, RelatedIds } from './types';

export const generateMajorContexts = (relatedIds: RelatedIds): CardContextData[] => {
  const { cardIds, contextIds } = relatedIds;

  return [
    // 0 - The Fool (Kẻ Khờ)
    {
      cardId: cardIds.fool,
      contextId: contextIds.tinhYeu,
      keywords: ['Mới mẻ', 'Tự do', 'Phiêu lưu', 'Ngây thơ'],
      meaningUpright: 'Bắt đầu một mối quan hệ mới với tâm hồn tự do, cởi mở.',
      meaningReversed: 'Thiếu suy nghĩ trong tình yêu, hành động bốc đồng.',
      advice: 'Hãy để trái tim dẫn lối nhưng đừng quên lắng nghe lý trí.'
    },
    {
      cardId: cardIds.fool,
      contextId: contextIds.giaDao,
      keywords: ['Thoải mái', 'Vô tư', 'Mới mẻ', 'Thay đổi'],
      meaningUpright: 'Mang đến không khí mới mẻ, thoải mái cho gia đình.',
      meaningReversed: 'Thiếu trách nhiệm với gia đình, quá vô tư.',
      advice: 'Giữ tinh thần lạc quan nhưng đừng quên trách nhiệm với gia đình.'
    },
    {
      cardId: cardIds.fool,
      contextId: contextIds.giaDinh,
      keywords: ['Vui vẻ', 'Tự do', 'Khám phá', 'Mới mẻ'],
      meaningUpright: 'Bắt đầu một hành trình mới cùng gia đình, không khí vui vẻ.',
      meaningReversed: 'Thiếu sự ổn định, quá tự do trong môi trường gia đình.',
      advice: 'Tạo không khí vui vẻ nhưng vẫn giữ sự ổn định cho gia đình.'
    },
    {
      cardId: cardIds.fool,
      contextId: contextIds.congViec,
      keywords: ['Cơ hội', 'Mạo hiểm', 'Sáng tạo', 'Bắt đầu'],
      meaningUpright: 'Bắt đầu công việc mới, dự án mới với tinh thần lạc quan.',
      meaningReversed: 'Thiếu kế hoạch, quá mạo hiểm trong công việc.',
      advice: 'Nắm bắt cơ hội mới nhưng cần có kế hoạch rõ ràng.'
    },
    {
      cardId: cardIds.fool,
      contextId: contextIds.taiChinh,
      keywords: ['Mạo hiểm', 'Cơ hội', 'Đầu tư', 'Mới mẻ'],
      meaningUpright: 'Có cơ hội đầu tư mới, tiềm năng phát triển.',
      meaningReversed: 'Quá liều lĩnh trong đầu tư, thiếu tính toán.',
      advice: 'Cân nhắc kỹ trước khi đầu tư, đừng quá mạo hiểm.'
    },
    {
      cardId: cardIds.fool,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Cởi mở', 'Vui vẻ', 'Gặp gỡ', 'Khám phá'],
      meaningUpright: 'Dễ dàng kết bạn mới, tạo mối quan hệ tốt.',
      meaningReversed: 'Quá tin người, thiếu cảnh giác trong giao tiếp.',
      advice: 'Giữ tinh thần cởi mở nhưng cần có sự đề phòng cần thiết.'
    },

    // 1 - The Magician (Nhà Ảo Thuật)
    {
      cardId: cardIds.magician,
      contextId: contextIds.tinhYeu,
      keywords: ['Chủ động', 'Sáng tạo', 'Quyến rũ', 'Tài năng'],
      meaningUpright: 'Chủ động trong tình yêu, thể hiện sự quyến rũ và tài năng.',
      meaningReversed: 'Thao túng, lừa dối trong tình cảm.',
      advice: 'Sử dụng tài năng của mình một cách chân thành trong tình yêu.'
    },
    {
      cardId: cardIds.magician,
      contextId: contextIds.giaDao,
      keywords: ['Khéo léo', 'Sáng tạo', 'Giải quyết', 'Tài năng'],
      meaningUpright: 'Khéo léo xử lý các vấn đề gia đạo, tạo không khí hài hòa.',
      meaningReversed: 'Lợi dụng, thao túng trong gia đình.',
      advice: 'Sử dụng khả năng của mình để xây dựng hạnh phúc gia đình.'
    },
    {
      cardId: cardIds.magician,
      contextId: contextIds.giaDinh,
      keywords: ['Sáng tạo', 'Tài năng', 'Hỗ trợ', 'Phát triển'],
      meaningUpright: 'Sử dụng tài năng để cải thiện cuộc sống gia đình.',
      meaningReversed: 'Ích kỷ, chỉ nghĩ đến bản thân trong gia đình.',
      advice: 'Dùng khả năng của mình để giúp đỡ các thành viên trong gia đình.'
    },
    {
      cardId: cardIds.magician,
      contextId: contextIds.congViec,
      keywords: ['Tài năng', 'Sáng tạo', 'Thành công', 'Chủ động'],
      meaningUpright: 'Phát huy tài năng trong công việc, đạt được thành công.',
      meaningReversed: 'Lạm dụng tài năng, thiếu trung thực trong công việc.',
      advice: 'Tận dụng khả năng của mình một cách chính đáng.'
    },
    {
      cardId: cardIds.magician,
      contextId: contextIds.taiChinh,
      keywords: ['Tài năng', 'Cơ hội', 'Sáng tạo', 'Phát triển'],
      meaningUpright: 'Tận dụng tài năng để tạo cơ hội tài chính mới.',
      meaningReversed: 'Lừa dối, thao túng trong vấn đề tài chính.',
      advice: 'Sử dụng khả năng của mình để tạo thu nhập chính đáng.'
    },
    {
      cardId: cardIds.magician,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Quyến rũ', 'Tài năng', 'Ảnh hưởng', 'Lãnh đạo'],
      meaningUpright: 'Có sức ảnh hưởng tốt đến người khác, được ngưỡng mộ.',
      meaningReversed: 'Thao túng, lợi dụng người khác.',
      advice: 'Sử dụng sức ảnh hưởng của mình một cách tích cực.'
    },

    // 2 - The High Priestess (Nữ Tư Tế)
    {
      cardId: cardIds.highPriestess,
      contextId: contextIds.tinhYeu,
      keywords: ['Trực giác', 'Bí ẩn', 'Nội tâm', 'Hiểu biết'],
      meaningUpright: 'Lắng nghe trực giác trong tình yêu, hiểu sâu sắc đối phương.',
      meaningReversed: 'Thiếu kết nối tinh thần, che giấu cảm xúc.',
      advice: 'Tin vào trực giác của mình trong chuyện tình cảm.'
    },
    {
      cardId: cardIds.highPriestess,
      contextId: contextIds.giaDao,
      keywords: ['Hiểu biết', 'Trực giác', 'Bình yên', 'Khôn ngoan'],
      meaningUpright: 'Hiểu rõ và xử lý khéo léo các vấn đề gia đạo.',
      meaningReversed: 'Thiếu sự thấu hiểu, giấu diếm trong gia đình.',
      advice: 'Sử dụng sự hiểu biết sâu sắc để giải quyết vấn đề gia đình.'
    },
    {
      cardId: cardIds.highPriestess,
      contextId: contextIds.giaDinh,
      keywords: ['Trực giác', 'Hiểu biết', 'Bảo vệ', 'Hòa thuận'],
      meaningUpright: 'Tạo không khí an bình, hiểu biết trong gia đình.',
      meaningReversed: 'Thiếu sự gắn kết tinh thần trong gia đình.',
      advice: 'Phát triển sự thấu hiểu giữa các thành viên trong gia đình.'
    },
    {
      cardId: cardIds.highPriestess,
      contextId: contextIds.congViec,
      keywords: ['Trực giác', 'Khôn ngoan', 'Bí mật', 'Nghiên cứu'],
      meaningUpright: 'Sử dụng trực giác và sự hiểu biết trong công việc.',
      meaningReversed: 'Thiếu minh bạch, giấu giếm thông tin.',
      advice: 'Tin tưởng vào trực giác nhưng cần minh bạch trong công việc.'
    },
    {
      cardId: cardIds.highPriestess,
      contextId: contextIds.taiChinh,
      keywords: ['Khôn ngoan', 'Thận trọng', 'Trực giác', 'Tiết kiệm'],
      meaningUpright: 'Quyết định tài chính khôn ngoan dựa trên trực giác.',
      meaningReversed: 'Thiếu minh bạch trong tài chính, giấu giếm thu chi.',
      advice: 'Lắng nghe trực giác khi đưa ra quyết định tài chính.'
    },
    {
      cardId: cardIds.highPriestess,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Bí ẩn', 'Khôn ngoan', 'Trực giác', 'Tôn trọng'],
      meaningUpright: 'Được tôn trọng vì sự khôn ngoan và hiểu biết.',
      meaningReversed: 'Quá khép kín, thiếu kết nối với người khác.',
      advice: 'Giữ sự bí ẩn nhưng vẫn duy trì kết nối với người khác.'
    },

    // 3 - The Empress (Nữ Hoàng)
    {
      cardId: cardIds.empress,
      contextId: contextIds.tinhYeu,
      keywords: ['Yêu thương', 'Chăm sóc', 'Phong phú', 'Sinh sản'],
      meaningUpright: 'Tình yêu trưởng thành, đầy yêu thương và chăm sóc.',
      meaningReversed: 'Quá bao bọc, ngột ngạt trong tình yêu.',
      advice: 'Thể hiện tình yêu thương một cách cân bằng và tự nhiên.'
    },
    {
      cardId: cardIds.empress,
      contextId: contextIds.giaDao,
      keywords: ['Chăm sóc', 'Phát triển', 'Hài hòa', 'Sung túc'],
      meaningUpright: 'Gia đạo hạnh phúc, đầy đủ về vật chất và tinh thần.',
      meaningReversed: 'Quá can thiệp vào chuyện gia đạo của người khác.',
      advice: 'Tạo môi trường gia đạo ấm áp nhưng tôn trọng không gian riêng.'
    },
    {
      cardId: cardIds.empress,
      contextId: contextIds.giaDinh,
      keywords: ['Mẫu tử', 'Chăm sóc', 'Phát triển', 'Ấm áp'],
      meaningUpright: 'Gia đình hạnh phúc, đầy tình thương và sự chăm sóc.',
      meaningReversed: 'Quá bao bọc con cái, thiếu không gian phát triển.',
      advice: 'Cân bằng giữa sự chăm sóc và tạo cơ hội phát triển cho con cái.'
    },
    {
      cardId: cardIds.empress,
      contextId: contextIds.congViec,
      keywords: ['Sáng tạo', 'Phát triển', 'Nuôi dưỡng', 'Thành công'],
      meaningUpright: 'Công việc phát triển tốt, đầy sáng tạo và thành quả.',
      meaningReversed: 'Thiếu tập trung, quá phân tán trong công việc.',
      advice: 'Phát triển công việc một cách bền vững và sáng tạo.'
    },
    {
      cardId: cardIds.empress,
      contextId: contextIds.taiChinh,
      keywords: ['Thịnh vượng', 'Phong phú', 'Đầu tư', 'Phát triển'],
      meaningUpright: 'Tài chính dồi dào, có nhiều cơ hội phát triển.',
      meaningReversed: 'Chi tiêu hoang phí, thiếu kế hoạch tài chính.',
      advice: 'Tận hưởng sự thịnh vượng nhưng cần có kế hoạch rõ ràng.'
    },
    {
      cardId: cardIds.empress,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Quan tâm', 'Hòa đồng', 'Được yêu mến', 'Hỗ trợ'],
      meaningUpright: 'Được mọi người yêu mến và tôn trọng.',
      meaningReversed: 'Can thiệp quá nhiều vào chuyện của người khác.',
      advice: 'Thể hiện sự quan tâm một cách tinh tế và đúng mực.'
    },

    // 4 - The Emperor (Hoàng Đế)
    {
      cardId: cardIds.emperor,
      contextId: contextIds.tinhYeu,
      keywords: ['Bảo vệ', 'Ổn định', 'Trách nhiệm', 'Cam kết'],
      meaningUpright: 'Mối quan hệ ổn định, có trách nhiệm và sự bảo vệ.',
      meaningReversed: 'Quá độc đoán, kiểm soát trong tình yêu.',
      advice: 'Xây dựng mối quan hệ vững chắc trên nền tảng tôn trọng.'
    },
    {
      cardId: cardIds.emperor,
      contextId: contextIds.giaDao,
      keywords: ['Lãnh đạo', 'Trật tự', 'Kỷ cương', 'Bảo vệ'],
      meaningUpright: 'Gia đạo có trật tự, kỷ cương và sự ổn định.',
      meaningReversed: 'Quá nghiêm khắc, thiếu linh hoạt trong gia đạo.',
      advice: 'Duy trì kỷ cương nhưng cần có sự mềm mỏng cần thiết.'
    },
    {
      cardId: cardIds.emperor,
      contextId: contextIds.giaDinh,
      keywords: ['Quyền uy', 'Bảo vệ', 'Trách nhiệm', 'Kỷ luật'],
      meaningUpright: 'Gia đình có người đứng đầu tốt, được bảo vệ.',
      meaningReversed: 'Quá áp đặt, thiếu lắng nghe ý kiến gia đình.',
      advice: 'Kết hợp sự nghiêm khắc với lòng yêu thương trong gia đình.'
    },
    {
      cardId: cardIds.emperor,
      contextId: contextIds.congViec,
      keywords: ['Lãnh đạo', 'Kỷ luật', 'Thành công', 'Quyền lực'],
      meaningUpright: 'Thành công trong công việc nhờ kỷ luật và lãnh đạo tốt.',
      meaningReversed: 'Lạm dụng quyền lực, quá cứng nhắc trong công việc.',
      advice: 'Sử dụng quyền lực một cách công bằng và hiệu quả.'
    },
    {
      cardId: cardIds.emperor,
      contextId: contextIds.taiChinh,
      keywords: ['Ổn định', 'Kế hoạch', 'Quản lý', 'Đầu tư'],
      meaningUpright: 'Tài chính ổn định, có kế hoạch rõ ràng.',
      meaningReversed: 'Quá thận trọng, thiếu linh hoạt trong đầu tư.',
      advice: 'Quản lý tài chính một cách khoa học và có chiến lược.'
    },
    {
      cardId: cardIds.emperor,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Quyền lực', 'Tôn trọng', 'Lãnh đạo', 'Ảnh hưởng'],
      meaningUpright: 'Có vị trí và ảnh hưởng trong xã hội.',
      meaningReversed: 'Quá áp đặt, tạo khoảng cách với người khác.',
      advice: 'Sử dụng ảnh hưởng để tạo môi trường xã hội tích cực.'
    },

    // 5 - The Hierophant (Giáo Hoàng)
    {
      cardId: cardIds.hierophant,
      contextId: contextIds.tinhYeu,
      keywords: ['Cam kết', 'Truyền thống', 'Niềm tin', 'Hôn nhân'],
      meaningUpright: 'Mối quan hệ truyền thống, cam kết lâu dài.',
      meaningReversed: 'Quá bảo thủ, không chấp nhận thay đổi trong tình yêu.',
      advice: 'Tôn trọng giá trị truyền thống nhưng vẫn cởi mở với cái mới.'
    },
    {
      cardId: cardIds.hierophant,
      contextId: contextIds.giaDao,
      keywords: ['Truyền thống', 'Giáo dục', 'Đạo đức', 'Niềm tin'],
      meaningUpright: 'Gia đạo theo khuôn phép, tôn trọng truyền thống.',
      meaningReversed: 'Quá cứng nhắc với các quy tắc gia đình.',
      advice: 'Duy trì giá trị gia đình nhưng cần linh hoạt khi cần thiết.'
    },
    {
      cardId: cardIds.hierophant,
      contextId: contextIds.giaDinh,
      keywords: ['Giáo dục', 'Truyền thống', 'Đạo đức', 'Khuôn phép'],
      meaningUpright: 'Gia đình có nền tảng đạo đức và giáo dục tốt.',
      meaningReversed: 'Áp đặt quá nhiều quy tắc lên các thành viên.',
      advice: 'Cân bằng giữa giáo dục truyền thống và tự do cá nhân.'
    },
    {
      cardId: cardIds.hierophant,
      contextId: contextIds.congViec,
      keywords: ['Học hỏi', 'Kỷ luật', 'Kinh nghiệm', 'Truyền thống'],
      meaningUpright: 'Thành công nhờ tuân thủ quy tắc và học hỏi kinh nghiệm.',
      meaningReversed: 'Quá cứng nhắc, khó thích nghi với thay đổi.',
      advice: 'Kết hợp kinh nghiệm truyền thống với đổi mới.'
    },
    {
      cardId: cardIds.hierophant,
      contextId: contextIds.taiChinh,
      keywords: ['An toàn', 'Ổn định', 'Truyền thống', 'Đầu tư'],
      meaningUpright: 'Quản lý tài chính theo cách truyền thống, an toàn.',
      meaningReversed: 'Quá bảo thủ trong đầu tư, bỏ lỡ cơ hội.',
      advice: 'Giữ phương pháp an toàn nhưng đừng bỏ qua cơ hội mới.'
    },
    {
      cardId: cardIds.hierophant,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Tôn trọng', 'Đạo đức', 'Giáo dục', 'Truyền thống'],
      meaningUpright: 'Được tôn trọng vì kiến thức và đạo đức.',
      meaningReversed: 'Quá giáo điều trong cách cư xử với người khác.',
      advice: 'Chia sẻ kiến thức và kinh nghiệm một cách khiêm tốn.'
    },

    // 6 - The Lovers (Đôi Tình Nhân)
    {
      cardId: cardIds.lovers,
      contextId: contextIds.tinhYeu,
      keywords: ['Tình yêu', 'Lựa chọn', 'Hòa hợp', 'Cam kết'],
      meaningUpright: 'Tình yêu đích thực, sự hòa hợp hoàn hảo.',
      meaningReversed: 'Thiếu cam kết, do dự trong tình yêu.',
      advice: 'Lắng nghe trái tim và đưa ra quyết định đúng đắn.'
    },
    {
      cardId: cardIds.lovers,
      contextId: contextIds.giaDao,
      keywords: ['Hòa hợp', 'Lựa chọn', 'Cân bằng', 'Tình cảm'],
      meaningUpright: 'Gia đạo hòa thuận, có sự cân bằng tốt.',
      meaningReversed: 'Mâu thuẫn trong gia đình, khó đưa ra quyết định.',
      advice: 'Tạo sự hài hòa trong gia đình bằng tình yêu thương.'
    },
    {
      cardId: cardIds.lovers,
      contextId: contextIds.giaDinh,
      keywords: ['Yêu thương', 'Hòa hợp', 'Lựa chọn', 'Gắn kết'],
      meaningUpright: 'Gia đình gắn kết, đầy tình yêu thương.',
      meaningReversed: 'Thiếu sự gắn kết, khó khăn trong quyết định gia đình.',
      advice: 'Đặt tình yêu thương làm nền tảng cho mọi quyết định.'
    },
    {
      cardId: cardIds.lovers,
      contextId: contextIds.congViec,
      keywords: ['Hợp tác', 'Lựa chọn', 'Cân bằng', 'Quyết định'],
      meaningUpright: 'Hợp tác tốt, đưa ra quyết định đúng đắn.',
      meaningReversed: 'Khó khăn trong việc lựa chọn đối tác hoặc công việc.',
      advice: 'Cân nhắc kỹ lưỡng và tin tưởng vào quyết định của mình.'
    },
    {
      cardId: cardIds.lovers,
      contextId: contextIds.taiChinh,
      keywords: ['Lựa chọn', 'Cân bằng', 'Hợp tác', 'Quyết định'],
      meaningUpright: 'Quyết định tài chính đúng đắn, hợp tác tốt.',
      meaningReversed: 'Do dự trong quyết định tài chính, thiếu cân bằng.',
      advice: 'Cân nhắc kỹ các lựa chọn và tin vào trực giác.'
    },
    {
      cardId: cardIds.lovers,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Hòa hợp', 'Kết nối', 'Lựa chọn', 'Quan hệ'],
      meaningUpright: 'Các mối quan hệ hài hòa, kết nối tốt.',
      meaningReversed: 'Khó khăn trong việc duy trì quan hệ xã hội.',
      advice: 'Xây dựng mối quan hệ dựa trên sự chân thành và tôn trọng.'
    },

    // 7 - The Chariot (Cỗ Xe)
    {
      cardId: cardIds.chariot,
      contextId: contextIds.tinhYeu,
      keywords: ['Tiến triển', 'Quyết tâm', 'Chinh phục', 'Thành công'],
      meaningUpright: 'Mối quan hệ tiến triển tốt, vượt qua thử thách.',
      meaningReversed: 'Thiếu kiểm soát, mất phương hướng trong tình yêu.',
      advice: 'Kiên định với mục tiêu nhưng đừng quá áp đặt.'
    },
    {
      cardId: cardIds.chariot,
      contextId: contextIds.giaDao,
      keywords: ['Tiến triển', 'Kiểm soát', 'Vượt qua', 'Thành công'],
      meaningUpright: 'Vượt qua khó khăn, gia đạo tiến triển tốt.',
      meaningReversed: 'Mất kiểm soát trong việc xử lý vấn đề gia đạo.',
      advice: 'Kiên trì giải quyết vấn đề với sự bình tĩnh.'
    },
    {
      cardId: cardIds.chariot,
      contextId: contextIds.giaDinh,
      keywords: ['Phát triển', 'Kiểm soát', 'Vượt qua', 'Thành công'],
      meaningUpright: 'Gia đình vượt qua khó khăn, phát triển tốt.',
      meaningReversed: 'Khó kiểm soát tình hình gia đình, mất phương hướng.',
      advice: 'Duy trì sự kiên định và đoàn kết trong gia đình.'
    },
    {
      cardId: cardIds.chariot,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Quyết tâm', 'Tiến triển', 'Chiến thắng'],
      meaningUpright: 'Đạt được mục tiêu công việc nhờ nỗ lực.',
      meaningReversed: 'Gặp trở ngại, thiếu kiểm soát trong công việc.',
      advice: 'Duy trì quyết tâm và kiểm soát để đạt mục tiêu.'
    },
    {
      cardId: cardIds.chariot,
      contextId: contextIds.taiChinh,
      keywords: ['Tiến triển', 'Kiểm soát', 'Thành công', 'Phát triển'],
      meaningUpright: 'Tài chính phát triển tốt nhờ kiểm soát tốt.',
      meaningReversed: 'Mất kiểm soát chi tiêu, đầu tư thiếu định hướng.',
      advice: 'Duy trì kỷ luật và kiểm soát trong quản lý tài chính.'
    },
    {
      cardId: cardIds.chariot,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Thành công', 'Tiến triển', 'Ảnh hưởng', 'Kiểm soát'],
      meaningUpright: 'Thành công trong các mối quan hệ xã hội.',
      meaningReversed: 'Khó khăn trong việc duy trì các mối quan hệ.',
      advice: 'Cân bằng giữa thành công và duy trì mối quan hệ tốt.'
    },

    // 8 - Strength (Sức Mạnh)
    {
      cardId: cardIds.strength,
      contextId: contextIds.tinhYeu,
      keywords: ['Kiên nhẫn', 'Dũng cảm', 'Kiểm soát', 'Tình yêu'],
      meaningUpright: 'Tình yêu mạnh mẽ, vượt qua thử thách bằng lòng kiên nhẫn.',
      meaningReversed: 'Thiếu kiên nhẫn, yếu đuối trong tình yêu.',
      advice: 'Dùng sức mạnh nội tâm để vun đắp tình yêu.'
    },
    {
      cardId: cardIds.strength,
      contextId: contextIds.giaDao,
      keywords: ['Kiên nhẫn', 'Bao dung', 'Mạnh mẽ', 'Kiểm soát'],
      meaningUpright: 'Xử lý vấn đề gia đạo với sự kiên nhẫn và bao dung.',
      meaningReversed: 'Thiếu kiên nhẫn trong xử lý mâu thuẫn gia đình.',
      advice: 'Giữ bình tĩnh và kiên nhẫn trong mọi tình huống.'
    },
    {
      cardId: cardIds.strength,
      contextId: contextIds.giaDinh,
      keywords: ['Mạnh mẽ', 'Kiên nhẫn', 'Yêu thương', 'Bao dung'],
      meaningUpright: 'Gia đình vững mạnh nhờ tình yêu thương và sự kiên nhẫn.',
      meaningReversed: 'Thiếu kiên nhẫn trong giáo dục và chăm sóc gia đình.',
      advice: 'Dùng tình yêu thương và sự kiên nhẫn để xây dựng gia đình.'
    },
    {
      cardId: cardIds.strength,
      contextId: contextIds.congViec,
      keywords: ['Kiên trì', 'Mạnh mẽ', 'Kiểm soát', 'Thành công'],
      meaningUpright: 'Thành công nhờ sự kiên trì và khả năng kiểm soát.',
      meaningReversed: 'Thiếu kiên nhẫn, dễ nản lòng trong công việc.',
      advice: 'Duy trì sự kiên trì và bình tĩnh để đạt mục tiêu.'
    },
    {
      cardId: cardIds.strength,
      contextId: contextIds.taiChinh,
      keywords: ['Kiên nhẫn', 'Kiểm soát', 'Mạnh mẽ', 'Ổn định'],
      meaningUpright: 'Quản lý tài chính tốt nhờ sự kiên nhẫn và kiểm soát.',
      meaningReversed: 'Thiếu kiên nhẫn trong đầu tư, dễ bị cảm xúc chi phối.',
      advice: 'Giữ bình tĩnh và kiên nhẫn trong các quyết định tài chính.'
    },
    {
      cardId: cardIds.strength,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Mạnh mẽ', 'Kiên nhẫn', 'Ảnh hưởng', 'Tôn trọng'],
      meaningUpright: 'Được tôn trọng nhờ sức mạnh nội tâm và sự kiên nhẫn.',
      meaningReversed: 'Thiếu kiên nhẫn trong xử lý các mối quan hệ.',
      advice: 'Sử dụng sự kiên nhẫn và bao dung trong giao tiếp.'
    },

    // 9 - The Hermit (Ẩn Sĩ)
    {
      cardId: cardIds.hermit,
      contextId: contextIds.tinhYeu,
      keywords: ['Suy ngẫm', 'Cô độc', 'Nội tâm', 'Tìm kiếm'],
      meaningUpright: 'Thời gian suy ngẫm về tình yêu, tìm hiểu bản thân.',
      meaningReversed: 'Cô đơn quá mức, tự cô lập trong tình yêu.',
      advice: 'Dành thời gian để hiểu rõ bản thân và mong muốn thực sự.'
    },
    {
      cardId: cardIds.hermit,
      contextId: contextIds.giaDao,
      keywords: ['Suy ngẫm', 'Hướng dẫn', 'Khôn ngoan', 'Tĩnh lặng'],
      meaningUpright: 'Thời gian để suy ngẫm về các vấn đề gia đạo.',
      meaningReversed: 'Tránh né vấn đề gia đình, thiếu kết nối.',
      advice: 'Tìm sự khôn ngoan từ bên trong để giải quyết vấn đề.'
    },
    {
      cardId: cardIds.hermit,
      contextId: contextIds.giaDinh,
      keywords: ['Hướng dẫn', 'Suy ngẫm', 'Trí tuệ', 'Tĩnh lặng'],
      meaningUpright: 'Là người dẫn dắt khôn ngoan trong gia đình.',
      meaningReversed: 'Thiếu sự gắn kết với các thành viên gia đình.',
      advice: 'Chia sẻ sự khôn ngoan và kinh nghiệm với người thân.'
    },
    {
      cardId: cardIds.hermit,
      contextId: contextIds.congViec,
      keywords: ['Tập trung', 'Nghiên cứu', 'Chuyên môn', 'Độc lập'],
      meaningUpright: 'Tập trung vào phát triển chuyên môn và kỹ năng.',
      meaningReversed: 'Cô lập trong công việc, thiếu hợp tác.',
      advice: 'Dành thời gian để nâng cao chuyên môn và học hỏi.'
    },
    {
      cardId: cardIds.hermit,
      contextId: contextIds.taiChinh,
      keywords: ['Thận trọng', 'Nghiên cứu', 'Tiết kiệm', 'Kế hoạch'],
      meaningUpright: 'Cẩn trọng trong quyết định tài chính, nghiên cứu kỹ.',
      meaningReversed: 'Quá thận trọng, bỏ lỡ cơ hội đầu tư.',
      advice: 'Nghiên cứu kỹ trước khi đưa ra quyết định tài chính.'
    },
    {
      cardId: cardIds.hermit,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Độc lập', 'Khôn ngoan', 'Hướng dẫn', 'Tĩnh lặng'],
      meaningUpright: 'Được tìm đến để xin lời khuyên và hướng dẫn.',
      meaningReversed: 'Tự cô lập, tránh né các mối quan hệ xã hội.',
      advice: 'Cân bằng giữa thời gian một mình và giao tiếp xã hội.'
    },

    // 10 - Wheel of Fortune (Bánh Xe Số Mệnh)
    {
      cardId: cardIds.wheelOfFortune,
      contextId: contextIds.tinhYeu,
      keywords: ['Thay đổi', 'Cơ hội', 'Định mệnh', 'Chu kỳ'],
      meaningUpright: 'Những thay đổi tích cực trong tình yêu, cơ hội mới.',
      meaningReversed: 'Thay đổi không mong muốn, bất ổn trong tình cảm.',
      advice: 'Chấp nhận những thay đổi và tin tưởng vào định mệnh.'
    },
    {
      cardId: cardIds.wheelOfFortune,
      contextId: contextIds.giaDao,
      keywords: ['Thay đổi', 'Vận may', 'Chu kỳ', 'Cơ hội'],
      meaningUpright: 'Những thay đổi tích cực trong gia đạo.',
      meaningReversed: 'Biến động không mong muốn trong gia đình.',
      advice: 'Sẵn sàng đón nhận và thích nghi với thay đổi.'
    },
    {
      cardId: cardIds.wheelOfFortune,
      contextId: contextIds.giaDinh,
      keywords: ['Thay đổi', 'May mắn', 'Cơ hội', 'Phát triển'],
      meaningUpright: 'Những thay đổi tốt đẹp trong cuộc sống gia đình.',
      meaningReversed: 'Bất ổn trong gia đình, thay đổi khó khăn.',
      advice: 'Giúp các thành viên thích nghi với những thay đổi mới.'
    },
    {
      cardId: cardIds.wheelOfFortune,
      contextId: contextIds.congViec,
      keywords: ['Cơ hội', 'Thay đổi', 'Vận may', 'Phát triển'],
      meaningUpright: 'Cơ hội mới trong công việc, thay đổi tích cực.',
      meaningReversed: 'Bất ổn trong công việc, thay đổi không mong muốn.',
      advice: 'Nắm bắt cơ hội khi chúng đến và sẵn sàng thích nghi.'
    },
    {
      cardId: cardIds.wheelOfFortune,
      contextId: contextIds.taiChinh,
      keywords: ['Vận may', 'Thay đổi', 'Cơ hội', 'Chu kỳ'],
      meaningUpright: 'Cơ hội tài chính mới, vận may trong đầu tư.',
      meaningReversed: 'Biến động tài chính, mất mát không mong muốn.',
      advice: 'Chuẩn bị cho những thay đổi trong tài chính.'
    },
    {
      cardId: cardIds.wheelOfFortune,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Thay đổi', 'Cơ hội', 'Gặp gỡ', 'Định mệnh'],
      meaningUpright: 'Gặp gỡ những người mới, cơ hội kết nối.',
      meaningReversed: 'Thay đổi trong các mối quan hệ, bất ổn.',
      advice: 'Đón nhận những mối quan hệ mới đến từ định mệnh.'
    },

    // 11 - Justice (Công Lý)
    {
      cardId: cardIds.justice,
      contextId: contextIds.tinhYeu,
      keywords: ['Công bằng', 'Trung thực', 'Cân bằng', 'Quyết định'],
      meaningUpright: 'Mối quan hệ công bằng, quyết định đúng đắn.',
      meaningReversed: 'Thiếu công bằng trong tình yêu, quyết định sai lầm.',
      advice: 'Đưa ra quyết định dựa trên lý trí và công bằng.'
    },
    {
      cardId: cardIds.justice,
      contextId: contextIds.giaDao,
      keywords: ['Công bằng', 'Hài hòa', 'Trách nhiệm', 'Quyết định'],
      meaningUpright: 'Giải quyết vấn đề gia đạo một cách công bằng.',
      meaningReversed: 'Thiếu công bằng trong xử lý vấn đề gia đình.',
      advice: 'Xử lý mọi việc với sự công bằng và khách quan.'
    },
    {
      cardId: cardIds.justice,
      contextId: contextIds.giaDinh,
      keywords: ['Công bằng', 'Trách nhiệm', 'Quyết định', 'Hài hòa'],
      meaningUpright: 'Gia đình hài hòa nhờ sự công bằng và trách nhiệm.',
      meaningReversed: 'Thiếu công bằng trong đối xử với các thành viên.',
      advice: 'Đối xử công bằng với mọi thành viên trong gia đình.'
    },
    {
      cardId: cardIds.justice,
      contextId: contextIds.congViec,
      keywords: ['Công bằng', 'Chính trực', 'Trách nhiệm', 'Quyết định'],
      meaningUpright: 'Thành công nhờ sự chính trực và công bằng.',
      meaningReversed: 'Thiếu công bằng trong môi trường làm việc.',
      advice: 'Duy trì sự chính trực và công bằng trong công việc.'
    },
    {
      cardId: cardIds.justice,
      contextId: contextIds.taiChinh,
      keywords: ['Công bằng', 'Cân bằng', 'Trách nhiệm', 'Quyết định'],
      meaningUpright: 'Quyết định tài chính công bằng và có trách nhiệm.',
      meaningReversed: 'Thiếu công bằng trong giao dịch tài chính.',
      advice: 'Đưa ra quyết định tài chính dựa trên sự công bằng.'
    },
    {
      cardId: cardIds.justice,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Công bằng', 'Tôn trọng', 'Trách nhiệm', 'Hài hòa'],
      meaningUpright: 'Các mối quan hệ xã hội công bằng và tôn trọng.',
      meaningReversed: 'Thiếu công bằng trong đối xử với người khác.',
      advice: 'Xây dựng mối quan hệ dựa trên sự công bằng và tôn trọng.'
    },

    // 12 - The Hanged Man (Người Treo Ngược)
    {
      cardId: cardIds.hangedMan,
      contextId: contextIds.tinhYeu,
      keywords: ['Hy sinh', 'Chờ đợi', 'Nhìn nhận mới', 'Buông bỏ'],
      meaningUpright: 'Nhìn nhận tình yêu từ góc độ mới, sẵn sàng hy sinh.',
      meaningReversed: 'Hy sinh vô ích, không chịu thay đổi góc nhìn.',
      advice: 'Sẵn sàng thay đổi góc nhìn để hiểu đối phương hơn.'
    },
    {
      cardId: cardIds.hangedMan,
      contextId: contextIds.giaDao,
      keywords: ['Hy sinh', 'Thay đổi', 'Chấp nhận', 'Buông bỏ'],
      meaningUpright: 'Sẵn sàng hy sinh vì gia đạo, thay đổi góc nhìn.',
      meaningReversed: 'Không chịu thay đổi, hy sinh không đúng chỗ.',
      advice: 'Chấp nhận thay đổi để cải thiện tình hình gia đạo.'
    },
    {
      cardId: cardIds.hangedMan,
      contextId: contextIds.giaDinh,
      keywords: ['Hy sinh', 'Thấu hiểu', 'Chờ đợi', 'Thay đổi'],
      meaningUpright: 'Hy sinh vì gia đình, hiểu được giá trị thực sự.',
      meaningReversed: 'Hy sinh không được đánh giá đúng, thiếu thấu hiểu.',
      advice: 'Nhìn nhận vấn đề gia đình từ nhiều góc độ khác nhau.'
    },
    {
      cardId: cardIds.hangedMan,
      contextId: contextIds.congViec,
      keywords: ['Tạm dừng', 'Suy ngẫm', 'Thay đổi', 'Hy sinh'],
      meaningUpright: 'Thời gian tạm dừng để nhìn nhận công việc khác đi.',
      meaningReversed: 'Trì hoãn không cần thiết, không chịu thay đổi.',
      advice: 'Dành thời gian để nhìn nhận công việc từ góc độ mới.'
    },
    {
      cardId: cardIds.hangedMan,
      contextId: contextIds.taiChinh,
      keywords: ['Chờ đợi', 'Hy sinh', 'Đầu tư', 'Thay đổi'],
      meaningUpright: 'Thời điểm chờ đợi, đầu tư dài hạn.',
      meaningReversed: 'Lãng phí thời gian và tiền bạc, đầu tư sai lầm.',
      advice: 'Sẵn sàng hy sinh ngắn hạn để có lợi ích dài hạn.'
    },
    {
      cardId: cardIds.hangedMan,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Quan sát', 'Thấu hiểu', 'Thay đổi', 'Chấp nhận'],
      meaningUpright: 'Nhìn nhận các mối quan hệ từ góc độ mới.',
      meaningReversed: 'Không chịu thay đổi cách nhìn về người khác.',
      advice: 'Thay đổi góc nhìn để hiểu người khác tốt hơn.'
    },

    // 13 - Death (Tử Thần)
    {
      cardId: cardIds.death,
      contextId: contextIds.tinhYeu,
      keywords: ['Kết thúc', 'Thay đổi', 'Đổi mới', 'Chuyển tiếp'],
      meaningUpright: 'Kết thúc một giai đoạn tình cảm để bắt đầu mới.',
      meaningReversed: 'Sợ hãi thay đổi, bám víu vào quá khứ.',
      advice: 'Chấp nhận sự kết thúc để đón nhận khởi đầu mới.'
    },
    {
      cardId: cardIds.death,
      contextId: contextIds.giaDao,
      keywords: ['Thay đổi', 'Chuyển tiếp', 'Đổi mới', 'Buông bỏ'],
      meaningUpright: 'Thay đổi lớn trong gia đạo, bước ngoặt quan trọng.',
      meaningReversed: 'Kháng cự với thay đổi cần thiết trong gia đình.',
      advice: 'Đón nhận thay đổi như cơ hội để cải thiện gia đạo.'
    },
    {
      cardId: cardIds.death,
      contextId: contextIds.giaDinh,
      keywords: ['Thay đổi', 'Chuyển tiếp', 'Đổi mới', 'Tái sinh'],
      meaningUpright: 'Gia đình trải qua thay đổi lớn.',
      meaningReversed: 'Khó khăn trong việc chấp nhận thay đổi.',
      advice: 'Đoàn kết để vượt qua khó khăn và xây dựng lại.'
    },
    {
      cardId: cardIds.death,
      contextId: contextIds.congViec,
      keywords: ['Thay đổi', 'Đột phá', 'Khủng hoảng', 'Cơ hội'],
      meaningUpright: 'Thay đổi đột ngột trong công việc hoặc sự nghiệp.',
      meaningReversed: 'Trì hoãn thay đổi không thể tránh khỏi.',
      advice: 'Coi khủng hoảng như cơ hội để phát triển mới.'
    },
    {
      cardId: cardIds.death,
      contextId: contextIds.taiChinh,
      keywords: ['Thay đổi', 'Đầu tư', 'Chuyển tiếp', 'Cơ hội'],
      meaningUpright: 'Thay đổi phương thức quản lý tài chính.',
      meaningReversed: 'Sợ rủi ro, bỏ lỡ cơ hội đầu tư.',
      advice: 'Sẵn sàng thay đổi chiến lược tài chính khi cần.'
    },
    {
      cardId: cardIds.death,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Thay đổi', 'Kết thúc', 'Đổi mới', 'Chuyển tiếp'],
      meaningUpright: 'Kết thúc các mối quan hệ cũ, bắt đầu mới.',
      meaningReversed: 'Khó từ bỏ các mối quan hệ không lành mạnh.',
      advice: 'Chấp nhận kết thúc để mở đường cho mối quan hệ mới.'
    },

    // 14 - Temperance (Tiết Độ)
    {
      cardId: cardIds.temperance,
      contextId: contextIds.tinhYeu,
      keywords: ['Cân bằng', 'Hài hòa', 'Kiên nhẫn', 'Ôn hòa'],
      meaningUpright: 'Mối quan hệ cân bằng và hài hòa.',
      meaningReversed: 'Thiếu kiên nhẫn, mất cân bằng trong tình yêu.',
      advice: 'Duy trì sự cân bằng và kiên nhẫn trong tình yêu.'
    },
    {
      cardId: cardIds.temperance,
      contextId: contextIds.giaDao,
      keywords: ['Hài hòa', 'Cân bằng', 'Ôn hòa', 'Kiên nhẫn'],
      meaningUpright: 'Gia đạo hài hòa, mọi việc được cân bằng tốt.',
      meaningReversed: 'Thiếu sự cân bằng trong cuộc sống gia đình.',
      advice: 'Tạo sự hài hòa trong gia đạo bằng sự kiên nhẫn.'
    },
    {
      cardId: cardIds.temperance,
      contextId: contextIds.giaDinh,
      keywords: ['Cân bằng', 'Hài hòa', 'Chăm sóc', 'Kiên nhẫn'],
      meaningUpright: 'Gia đình hạnh phúc, cân bằng giữa các thành viên.',
      meaningReversed: 'Mất cân bằng trong cuộc sống gia đình.',
      advice: 'Duy trì sự cân bằng giữa các khía cạnh trong gia đình.'
    },
    {
      cardId: cardIds.temperance,
      contextId: contextIds.congViec,
      keywords: ['Cân bằng', 'Hợp tác', 'Kiên nhẫn', 'Điều độ'],
      meaningUpright: 'Làm việc hiệu quả với sự cân bằng và kiên nhẫn.',
      meaningReversed: 'Mất cân bằng giữa công việc và cuộc sống.',
      advice: 'Duy trì sự cân bằng trong công việc và cuộc sống.'
    },
    {
      cardId: cardIds.temperance,
      contextId: contextIds.taiChinh,
      keywords: ['Cân bằng', 'Tiết kiệm', 'Điều độ', 'Kiên nhẫn'],
      meaningUpright: 'Quản lý tài chính cân bằng và khôn ngoan.',
      meaningReversed: 'Chi tiêu thiếu cân nhắc, mất kiểm soát.',
      advice: 'Duy trì sự cân bằng trong chi tiêu và tiết kiệm.'
    },
    {
      cardId: cardIds.temperance,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Hài hòa', 'Cân bằng', 'Hợp tác', 'Ôn hòa'],
      meaningUpright: 'Các mối quan hệ xã hội hài hòa và cân bằng.',
      meaningReversed: 'Thiếu cân bằng trong các mối quan hệ.',
      advice: 'Xây dựng mối quan hệ dựa trên sự hài hòa và cân bằng.'
    },

    // 15 - The Devil (Quỷ Dữ)
    {
      cardId: cardIds.devil,
      contextId: contextIds.tinhYeu,
      keywords: ['Ràng buộc', 'Đam mê', 'Cám dỗ', 'Phụ thuộc'],
      meaningUpright: 'Mối quan hệ có sự ràng buộc hoặc phụ thuộc.',
      meaningReversed: 'Thoát khỏi mối quan hệ độc hại.',
      advice: 'Nhận biết và thoát khỏi những ràng buộc không lành mạnh.'
    },
    {
      cardId: cardIds.devil,
      contextId: contextIds.giaDao,
      keywords: ['Ràng buộc', 'Xung đột', 'Áp lực', 'Giải thoát'],
      meaningUpright: 'Gia đạo có những ràng buộc tiêu cực.',
      meaningReversed: 'Cơ hội thoát khỏi áp lực gia đình.',
      advice: 'Nhận diện và giải quyết các vấn đề ràng buộc trong gia đạo.'
    },
    {
      cardId: cardIds.devil,
      contextId: contextIds.giaDinh,
      keywords: ['Ràng buộc', 'Xung đột', 'Áp lực', 'Thay đổi'],
      meaningUpright: 'Gia đình chịu ảnh hưởng của các thói quen xấu.',
      meaningReversed: 'Cơ hội thay đổi môi trường gia đình.',
      advice: 'Cùng nhau vượt qua những thói quen và ràng buộc tiêu cực.'
    },
    {
      cardId: cardIds.devil,
      contextId: contextIds.congViec,
      keywords: ['Ràng buộc', 'Áp lực', 'Tham vọng', 'Giải thoát'],
      meaningUpright: 'Cảm thấy bị ràng buộc trong công việc.',
      meaningReversed: 'Cơ hội thoát khỏi công việc áp lực.',
      advice: 'Cân nhắc giữa tham vọng và sự tự do trong công việc.'
    },
    {
      cardId: cardIds.devil,
      contextId: contextIds.taiChinh,
      keywords: ['Tham lam', 'Ràng buộc', 'Nợ nần', 'Giải thoát'],
      meaningUpright: 'Gặp khó khăn về nợ nần hoặc chi tiêu quá mức.',
      meaningReversed: 'Cơ hội thoát khỏi khó khăn tài chính.',
      advice: 'Kiểm soát chi tiêu và thoát khỏi các khoản nợ.'
    },
    {
      cardId: cardIds.devil,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Ràng buộc', 'Ảnh hưởng', 'Cám dỗ', 'Giải thoát'],
      meaningUpright: 'Bị ảnh hưởng bởi môi trường xã hội tiêu cực.',
      meaningReversed: 'Thoát khỏi ảnh hưởng xấu từ người khác.',
      advice: 'Tránh xa những mối quan hệ độc hại và tiêu cực.'
    },

    // 16 - The Tower (Tháp Sét)
    {
      cardId: cardIds.tower,
      contextId: contextIds.tinhYeu,
      keywords: ['Đổ vỡ', 'Thay đổi', 'Giải thoát', 'Bất ngờ'],
      meaningUpright: 'Sự đổ vỡ bất ngờ trong mối quan hệ.',
      meaningReversed: 'Tránh né thay đổi cần thiết trong tình yêu.',
      advice: 'Chấp nhận thay đổi như cơ hội để xây dựng lại.'
    },
    {
      cardId: cardIds.tower,
      contextId: contextIds.giaDao,
      keywords: ['Xáo trộn', 'Thay đổi', 'Đột phá', 'Tái thiết'],
      meaningUpright: 'Biến cố lớn trong gia đạo, thay đổi đột ngột.',
      meaningReversed: 'Cố gắng ngăn chặn thay đổi không thể tránh khỏi.',
      advice: 'Đối mặt với thay đổi và cùng nhau xây dựng lại.'
    },
    {
      cardId: cardIds.tower,
      contextId: contextIds.giaDinh,
      keywords: ['Biến động', 'Thay đổi', 'Đột phá', 'Xây dựng lại'],
      meaningUpright: 'Gia đình trải qua biến cố lớn.',
      meaningReversed: 'Khó khăn trong việc chấp nhận thay đổi.',
      advice: 'Đoàn kết để vượt qua khó khăn và xây dựng lại.'
    },
    {
      cardId: cardIds.tower,
      contextId: contextIds.congViec,
      keywords: ['Thay đổi', 'Đột phá', 'Khủng hoảng', 'Cơ hội'],
      meaningUpright: 'Thay đổi đột ngột trong công việc hoặc sự nghiệp.',
      meaningReversed: 'Trì hoãn thay đổi không thể tránh khỏi.',
      advice: 'Coi khủng hoảng như cơ hội để phát triển mới.'
    },
    {
      cardId: cardIds.tower,
      contextId: contextIds.taiChinh,
      keywords: ['Mất mát', 'Khủng hoảng', 'Thay đổi', 'Tái thiết'],
      meaningUpright: 'Tổn thất tài chính bất ngờ, khủng hoảng.',
      meaningReversed: 'Tránh né đối mặt với vấn đề tài chính.',
      advice: 'Đối mặt với khó khăn và xây dựng lại từ đầu.'
    },
    {
      cardId: cardIds.tower,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Đổ vỡ', 'Thay đổi', 'Tiết lộ', 'Tái thiết'],
      meaningUpright: 'Thay đổi đột ngột trong các mối quan hệ xã hội.',
      meaningReversed: 'Cố gắng duy trì các mối quan hệ không còn phù hợp.',
      advice: 'Chấp nhận thay đổi để xây dựng các mối quan hệ mới tốt đẹp hơn.'
    },

    // 17 - The Star (Ngôi Sao)
    {
      cardId: cardIds.star,
      contextId: contextIds.tinhYeu,
      keywords: ['Hy vọng', 'Niềm tin', 'Cảm hứng', 'Hạnh phúc'],
      meaningUpright: 'Tình yêu tràn đầy hy vọng và niềm tin.',
      meaningReversed: 'Mất niềm tin vào tình yêu, thất vọng.',
      advice: 'Giữ vững niềm tin và hy vọng trong tình yêu.'
    },
    {
      cardId: cardIds.star,
      contextId: contextIds.giaDao,
      keywords: ['Hy vọng', 'Bình an', 'Hài hòa', 'Phát triển'],
      meaningUpright: 'Gia đạo tràn đầy hy vọng và sự bình an.',
      meaningReversed: 'Mất niềm tin vào tương lai gia đạo.',
      advice: 'Duy trì niềm tin vào sự phát triển của gia đạo.'
    },
    {
      cardId: cardIds.star,
      contextId: contextIds.giaDinh,
      keywords: ['Hy vọng', 'Hạnh phúc', 'Phát triển', 'Bình an'],
      meaningUpright: 'Gia đình tràn đầy hạnh phúc và hy vọng.',
      meaningReversed: 'Thiếu niềm tin vào hạnh phúc gia đình.',
      advice: 'Nuôi dưỡng hy vọng và niềm tin trong gia đình.'
    },
    {
      cardId: cardIds.star,
      contextId: contextIds.congViec,
      keywords: ['Cảm hứng', 'Sáng tạo', 'Hy vọng', 'Thành công'],
      meaningUpright: 'Công việc tràn đầy cảm hứng và triển vọng.',
      meaningReversed: 'Mất động lực và niềm tin trong công việc.',
      advice: 'Giữ vững niềm tin vào khả năng của bản thân.'
    },
    {
      cardId: cardIds.star,
      contextId: contextIds.taiChinh,
      keywords: ['Hy vọng', 'Cơ hội', 'Phát triển', 'Thịnh vượng'],
      meaningUpright: 'Triển vọng tài chính tươi sáng, nhiều cơ hội.',
      meaningReversed: 'Thiếu niềm tin vào khả năng tài chính.',
      advice: 'Tin tưởng vào khả năng cải thiện tài chính.'
    },
    {
      cardId: cardIds.star,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Cảm hứng', 'Tin tưởng', 'Hài hòa', 'Phát triển'],
      meaningUpright: 'Các mối quan hệ tràn đầy niềm tin và cảm hứng.',
      meaningReversed: 'Mất niềm tin vào người khác.',
      advice: 'Duy trì niềm tin và sự lạc quan trong giao tiếp.'
    },

    // 18 - The Moon (Mặt Trăng)
    {
      cardId: cardIds.moon,
      contextId: contextIds.tinhYeu,
      keywords: ['Ảo tưởng', 'Bí ẩn', 'Trực giác', 'Lo lắng'],
      meaningUpright: 'Tình cảm phức tạp, nhiều điều chưa rõ ràng.',
      meaningReversed: 'Vượt qua được sự nhầm lẫn trong tình yêu.',
      advice: 'Lắng nghe trực giác và làm rõ mọi nghi ngờ.'
    },
    {
      cardId: cardIds.moon,
      contextId: contextIds.giaDao,
      keywords: ['Bí ẩn', 'Lo lắng', 'Trực giác', 'Hiểu lầm'],
      meaningUpright: 'Có những vấn đề chưa rõ ràng trong gia đạo.',
      meaningReversed: 'Dần làm rõ được những hiểu lầm.',
      advice: 'Cần thẳng thắn và làm rõ mọi vấn đề.'
    },
    {
      cardId: cardIds.moon,
      contextId: contextIds.giaDinh,
      keywords: ['Lo lắng', 'Bí ẩn', 'Hiểu lầm', 'Trực giác'],
      meaningUpright: 'Gia đình có những lo lắng và hiểu lầm.',
      meaningReversed: 'Dần vượt qua được những hiểu lầm.',
      advice: 'Cần trao đổi thẳng thắn để tránh hiểu lầm.'
    },
    {
      cardId: cardIds.moon,
      contextId: contextIds.congViec,
      keywords: ['Bất ổn', 'Lo lắng', 'Trực giác', 'Lừa dối'],
      meaningUpright: 'Công việc có nhiều điều chưa rõ ràng.',
      meaningReversed: 'Dần làm rõ được tình hình công việc.',
      advice: 'Cẩn thận và tin vào trực giác của mình.'
    },
    {
      cardId: cardIds.moon,
      contextId: contextIds.taiChinh,
      keywords: ['Lo lắng', 'Bất ổn', 'Lừa dối', 'Cẩn trọng'],
      meaningUpright: 'Tình hình tài chính không rõ ràng, cần cẩn trọng.',
      meaningReversed: 'Dần vượt qua được những lo lắng về tài chính.',
      advice: 'Thận trọng trong các quyết định tài chính.'
    },
    {
      cardId: cardIds.moon,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Bí ẩn', 'Lo lắng', 'Lừa dối', 'Trực giác'],
      meaningUpright: 'Các mối quan hệ có điều chưa rõ ràng.',
      meaningReversed: 'Vượt qua được những hiểu lầm trong quan hệ.',
      advice: 'Cẩn thận và tin vào linh cảm của mình.'
    },

    // 19 - The Sun (Mặt Trời)
    {
      cardId: cardIds.sun,
      contextId: contextIds.tinhYeu,
      keywords: ['Hạnh phúc', 'Rạng rỡ', 'Thành công', 'Tự tin'],
      meaningUpright: 'Tình yêu tràn đầy hạnh phúc và niềm vui.',
      meaningReversed: 'Hạnh phúc tạm thời bị che khuất.',
      advice: 'Tận hưởng và chia sẻ niềm hạnh phúc trong tình yêu.'
    },
    {
      cardId: cardIds.sun,
      contextId: contextIds.giaDao,
      keywords: ['Hạnh phúc', 'Thành công', 'Rạng rỡ', 'Phát triển'],
      meaningUpright: 'Gia đạo hạnh phúc, tràn đầy năng lượng tích cực.',
      meaningReversed: 'Hạnh phúc gia đình tạm thời bị ảnh hưởng.',
      advice: 'Lan tỏa năng lượng tích cực trong gia đình.'
    },
    {
      cardId: cardIds.sun,
      contextId: contextIds.giaDinh,
      keywords: ['Hạnh phúc', 'Phát triển', 'Thành công', 'Vui vẻ'],
      meaningUpright: 'Gia đình tràn đầy niềm vui và hạnh phúc.',
      meaningReversed: 'Niềm vui gia đình tạm thời bị ảnh hưởng.',
      advice: 'Tạo không khí vui vẻ và tích cực trong gia đình.'
    },
    {
      cardId: cardIds.sun,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Tự tin', 'Phát triển', 'Rạng rỡ'],
      meaningUpright: 'Công việc thành công và phát triển tốt.',
      meaningReversed: 'Thành công tạm thời bị trì hoãn.',
      advice: 'Tự tin và tích cực trong công việc.'
    },
    {
      cardId: cardIds.sun,
      contextId: contextIds.taiChinh,
      keywords: ['Thịnh vượng', 'Thành công', 'Phát triển', 'Rạng rỡ'],
      meaningUpright: 'Tài chính phát triển tốt, nhiều thành công.',
      meaningReversed: 'Sự thịnh vượng tạm thời bị ảnh hưởng.',
      advice: 'Tận dụng cơ hội để phát triển tài chính.'
    },
    {
      cardId: cardIds.sun,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Hòa đồng', 'Tự tin', 'Thành công', 'Rạng rỡ'],
      meaningUpright: 'Các mối quan hệ tốt đẹp và tích cực.',
      meaningReversed: 'Sự hòa đồng tạm thời bị ảnh hưởng.',
      advice: 'Lan tỏa năng lượng tích cực trong giao tiếp.'
    },

    // 20 - Judgement (Phán Xét)
    {
      cardId: cardIds.judgement,
      contextId: contextIds.tinhYeu,
      keywords: ['Tỉnh thức', 'Đánh giá', 'Quyết định', 'Tái sinh'],
      meaningUpright: 'Nhận thức mới về tình yêu, quyết định quan trọng.',
      meaningReversed: 'Trì hoãn quyết định, thiếu nhận thức.',
      advice: 'Lắng nghe tiếng gọi của trái tim và đưa ra quyết định.'
    },
    {
      cardId: cardIds.judgement,
      contextId: contextIds.giaDao,
      keywords: ['Tỉnh thức', 'Thay đổi', 'Quyết định', 'Tái sinh'],
      meaningUpright: 'Nhận thức mới về gia đạo, thay đổi quan trọng.',
      meaningReversed: 'Trì hoãn thay đổi cần thiết trong gia đạo.',
      advice: 'Đưa ra quyết định đúng đắn cho gia đạo.'
    },
    {
      cardId: cardIds.judgement,
      contextId: contextIds.giaDinh,
      keywords: ['Tỉnh thức', 'Đoàn tụ', 'Quyết định', 'Tái sinh'],
      meaningUpright: 'Gia đình có sự thay đổi tích cực, đoàn tụ.',
      meaningReversed: 'Khó khăn trong việc chấp nhận thay đổi.',
      advice: 'Cùng nhau đưa ra quyết định cho gia đình.'
    },
    {
      cardId: cardIds.judgement,
      contextId: contextIds.congViec,
      keywords: ['Tỉnh thức', 'Đánh giá', 'Quyết định', 'Thay đổi'],
      meaningUpright: 'Nhận thức mới về công việc, thay đổi lớn.',
      meaningReversed: 'Trì hoãn quyết định quan trọng.',
      advice: 'Đánh giá kỹ và đưa ra quyết định đúng đắn.'
    },
    {
      cardId: cardIds.judgement,
      contextId: contextIds.taiChinh,
      keywords: ['Đánh giá', 'Quyết định', 'Thay đổi', 'Tái sinh'],
      meaningUpright: 'Quyết định tài chính quan trọng, thay đổi lớn.',
      meaningReversed: 'Trì hoãn quyết định tài chính cần thiết.',
      advice: 'Đánh giá kỹ trước khi đưa ra quyết định.'
    },
    {
      cardId: cardIds.judgement,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Tỉnh thức', 'Đánh giá', 'Thay đổi', 'Tái sinh'],
      meaningUpright: 'Nhận thức mới về các mối quan hệ.',
      meaningReversed: 'Khó thay đổi cách nhìn về người khác.',
      advice: 'Đánh giá lại các mối quan hệ một cách khách quan.'
    },

    // 21 - The World (Thế Giới)
    {
      cardId: cardIds.world,
      contextId: contextIds.tinhYeu,
      keywords: ['Hoàn thiện', 'Thành tựu', 'Viên mãn', 'Hài lòng'],
      meaningUpright: 'Tình yêu viên mãn, đạt được hạnh phúc trọn vẹn.',
      meaningReversed: 'Chưa đạt được sự viên mãn trong tình yêu.',
      advice: 'Trân trọng và duy trì hạnh phúc hiện tại.'
    },
    {
      cardId: cardIds.world,
      contextId: contextIds.giaDao,
      keywords: ['Viên mãn', 'Hoàn thiện', 'Thành công', 'Hài lòng'],
      meaningUpright: 'Gia đạo viên mãn, mọi việc được cân bằng tốt.',
      meaningReversed: 'Chưa đạt được sự viên mãn trong gia đạo.',
      advice: 'Duy trì và phát triển sự hài hòa trong gia đạo.'
    },
    {
      cardId: cardIds.world,
      contextId: contextIds.giaDinh,
      keywords: ['Viên mãn', 'Hoàn thiện', 'Hạnh phúc', 'Thành tựu'],
      meaningUpright: 'Gia đình hạnh phúc viên mãn, đầy đủ.',
      meaningReversed: 'Chưa đạt được sự viên mãn trong gia đình.',
      advice: 'Trân trọng và gìn giữ hạnh phúc gia đình.'
    },
    {
      cardId: cardIds.world,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Hoàn thiện', 'Thành tựu', 'Viên mãn'],
      meaningUpright: 'Đạt được thành công và sự công nhận trong công việc.',
      meaningReversed: 'Chưa đạt được mục tiêu đề ra.',
      advice: 'Tiếp tục phát triển và hoàn thiện công việc.'
    },
    {
      cardId: cardIds.world,
      contextId: contextIds.taiChinh,
      keywords: ['Thành công', 'Viên mãn', 'Thịnh vượng', 'Hoàn thiện'],
      meaningUpright: 'Đạt được sự thịnh vượng và ổn định tài chính.',
      meaningReversed: 'Chưa đạt được mục tiêu tài chính.',
      advice: 'Duy trì và phát triển sự thịnh vượng hiện tại.'
    },
    {
      cardId: cardIds.world,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Hài hòa', 'Viên mãn', 'Thành công', 'Hoàn thiện'],
      meaningUpright: 'Các mối quan hệ xã hội viên mãn, hài hòa.',
      meaningReversed: 'Thiếu cân bằng trong các mối quan hệ.',
      advice: 'Xây dựng mối quan hệ dựa trên sự hài hòa và cân bằng.'
    }
  ];
}; 