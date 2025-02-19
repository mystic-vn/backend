import { CardContextData, RelatedIds } from './types';

export const generateWandsContexts = (relatedIds: RelatedIds): CardContextData[] => {
  const { cardIds, contextIds } = relatedIds;

  return [
    // Ace of Wands
    {
      cardId: cardIds.aceOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Khởi đầu', 'Đam mê', 'Nhiệt huyết', 'Sáng tạo'],
      meaningUpright: 'Khởi đầu mới đầy đam mê trong tình yêu. Sự thu hút mạnh mẽ và nhiệt huyết.',
      meaningReversed: 'Có thể thiếu nhiệt huyết hoặc năng lượng trong mối quan hệ.',
      advice: 'Hãy để đam mê và sự sáng tạo dẫn dắt con đường tình yêu của bạn.'
    },
    {
      cardId: cardIds.aceOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Khởi đầu', 'Năng lượng', 'Sáng tạo', 'Phát triển'],
      meaningUpright: 'Khởi đầu mới trong môi trường gia đạo. Năng lượng tích cực cho sự phát triển.',
      meaningReversed: 'Có thể gặp trở ngại trong việc bắt đầu kế hoạch gia đình.',
      advice: 'Tận dụng năng lượng mới để xây dựng môi trường gia đình tích cực.'
    },
    {
      cardId: cardIds.aceOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Khởi đầu', 'Sáng tạo', 'Năng lượng', 'Phát triển'],
      meaningUpright: 'Bắt đầu giai đoạn mới trong cuộc sống gia đình. Năng lượng tích cực cho sự phát triển.',
      meaningReversed: 'Có thể gặp khó khăn trong việc thực hiện các kế hoạch gia đình mới.',
      advice: 'Sử dụng sự sáng tạo để tạo môi trường gia đình năng động và tích cực.'
    },
    {
      cardId: cardIds.aceOfWands,
      contextId: contextIds.congViec,
      keywords: ['Cơ hội', 'Sáng tạo', 'Khởi nghiệp', 'Đam mê'],
      meaningUpright: 'Cơ hội mới trong sự nghiệp. Khởi đầu đầy hứng khởi và sáng tạo.',
      meaningReversed: 'Có thể thiếu định hướng hoặc gặp trở ngại trong việc bắt đầu.',
      advice: 'Nắm bắt cơ hội và để sự sáng tạo dẫn dắt con đường sự nghiệp.'
    },
    {
      cardId: cardIds.aceOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Cơ hội', 'Đầu tư', 'Sáng tạo', 'Phát triển'],
      meaningUpright: 'Cơ hội đầu tư mới. Tiềm năng phát triển tài chính thông qua sáng tạo.',
      meaningReversed: 'Có thể gặp rủi ro hoặc thiếu cân nhắc trong đầu tư mới.',
      advice: 'Cân nhắc kỹ lưỡng nhưng đừng bỏ lỡ cơ hội đầu tư sáng tạo.'
    },
    {
      cardId: cardIds.aceOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Kết nối', 'Năng động', 'Sáng tạo', 'Giao tiếp'],
      meaningUpright: 'Tạo dựng các mối quan hệ mới đầy năng lượng. Cơ hội kết nối sáng tạo.',
      meaningReversed: 'Có thể gặp khó khăn trong việc duy trì các mối quan hệ mới.',
      advice: 'Sử dụng sự sáng tạo và năng lượng tích cực để xây dựng mạng lưới quan hệ.'
    },

    // Two of Wands
    {
      cardId: cardIds.twoOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Lựa chọn', 'Kế hoạch', 'Khám phá', 'Quyết định'],
      meaningUpright: 'Đứng trước lựa chọn trong tình yêu. Cần lập kế hoạch cho tương lai mối quan hệ.',
      meaningReversed: 'Có thể đang do dự hoặc thiếu quyết đoán trong tình yêu.',
      advice: 'Đánh giá các lựa chọn và lập kế hoạch rõ ràng cho tương lai.'
    },
    {
      cardId: cardIds.twoOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Kế hoạch', 'Định hướng', 'Phát triển', 'Quyết định'],
      meaningUpright: 'Lập kế hoạch cho tương lai gia đình. Cân nhắc các hướng phát triển mới.',
      meaningReversed: 'Có thể thiếu định hướng hoặc gặp khó khăn trong việc lập kế hoạch.',
      advice: 'Xây dựng kế hoạch chi tiết và cân nhắc kỹ các quyết định gia đình.'
    },
    {
      cardId: cardIds.twoOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Kế hoạch', 'Tầm nhìn', 'Quyết định', 'Phát triển'],
      meaningUpright: 'Hoạch định tương lai gia đình. Cân nhắc các cơ hội phát triển mới.',
      meaningReversed: 'Có thể thiếu quyết đoán hoặc gặp khó khăn trong việc định hướng.',
      advice: 'Lập kế hoạch chi tiết và thảo luận với các thành viên trong gia đình.'
    },
    {
      cardId: cardIds.twoOfWands,
      contextId: contextIds.congViec,
      keywords: ['Kế hoạch', 'Tầm nhìn', 'Cơ hội', 'Quyết định'],
      meaningUpright: 'Đứng trước cơ hội nghề nghiệp mới. Cần lập kế hoạch phát triển sự nghiệp.',
      meaningReversed: 'Có thể thiếu định hướng hoặc do dự trong quyết định nghề nghiệp.',
      advice: 'Đánh giá kỹ các cơ hội và lập kế hoạch phát triển chi tiết.'
    },
    {
      cardId: cardIds.twoOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Kế hoạch', 'Đầu tư', 'Cơ hội', 'Quyết định'],
      meaningUpright: 'Cân nhắc các cơ hội đầu tư mới. Lập kế hoạch tài chính dài hạn.',
      meaningReversed: 'Có thể thiếu quyết đoán hoặc gặp khó khăn trong việc lựa chọn đầu tư.',
      advice: 'Nghiên cứu kỹ và lập kế hoạch chi tiết trước khi đầu tư.'
    },
    {
      cardId: cardIds.twoOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Mở rộng', 'Kết nối', 'Cơ hội', 'Kế hoạch'],
      meaningUpright: 'Cơ hội mở rộng mạng lưới quan hệ. Lập kế hoạch phát triển các mối quan hệ.',
      meaningReversed: 'Có thể do dự trong việc mở rộng các mối quan hệ xã hội.',
      advice: 'Chủ động tìm kiếm và nắm bắt cơ hội kết nối mới.'
    },

    // Three of Wands
    {
      cardId: cardIds.threeOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Phát triển', 'Mở rộng', 'Khám phá', 'Tiến triển'],
      meaningUpright: 'Mối quan hệ đang phát triển tốt đẹp. Cơ hội khám phá và mở rộng tình yêu.',
      meaningReversed: 'Có thể gặp trở ngại trong việc phát triển mối quan hệ.',
      advice: 'Mở lòng đón nhận những trải nghiệm mới trong tình yêu.'
    },
    {
      cardId: cardIds.threeOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Phát triển', 'Kết quả', 'Tiến triển', 'Mở rộng'],
      meaningUpright: 'Những kế hoạch gia đình đang có kết quả tốt. Cơ hội phát triển mới.',
      meaningReversed: 'Có thể gặp chậm trễ hoặc trở ngại trong kế hoạch gia đình.',
      advice: 'Kiên nhẫn theo đuổi mục tiêu và sẵn sàng đón nhận cơ hội mới.'
    },
    {
      cardId: cardIds.threeOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Phát triển', 'Mở rộng', 'Tiến triển', 'Kết quả'],
      meaningUpright: 'Gia đình đang phát triển theo hướng tích cực. Nhìn thấy kết quả của những nỗ lực.',
      meaningReversed: 'Có thể gặp trở ngại trong việc thực hiện kế hoạch gia đình.',
      advice: 'Tiếp tục phát triển và mở rộng tầm nhìn cho tương lai gia đình.'
    },
    {
      cardId: cardIds.threeOfWands,
      contextId: contextIds.congViec,
      keywords: ['Phát triển', 'Mở rộng', 'Thành công', 'Cơ hội'],
      meaningUpright: 'Sự nghiệp đang phát triển tốt. Cơ hội mở rộng và thành công mới.',
      meaningReversed: 'Có thể gặp chậm trễ hoặc trở ngại trong kế hoạch phát triển.',
      advice: 'Tận dụng cơ hội mở rộng và phát triển sự nghiệp.'
    },
    {
      cardId: cardIds.threeOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Phát triển', 'Đầu tư', 'Kết quả', 'Mở rộng'],
      meaningUpright: 'Các khoản đầu tư đang sinh lời. Cơ hội mở rộng tài chính.',
      meaningReversed: 'Có thể gặp chậm trễ hoặc khó khăn trong việc thu hồi đầu tư.',
      advice: 'Tiếp tục theo đuổi kế hoạch đầu tư và tìm kiếm cơ hội mới.'
    },
    {
      cardId: cardIds.threeOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Mở rộng', 'Kết nối', 'Phát triển', 'Cơ hội'],
      meaningUpright: 'Mạng lưới quan hệ đang phát triển tốt. Cơ hội mở rộng kết nối mới.',
      meaningReversed: 'Có thể gặp khó khăn trong việc duy trì hoặc mở rộng các mối quan hệ.',
      advice: 'Tích cực mở rộng mạng lưới và tận dụng các cơ hội kết nối.'
    },

    // Four of Wands
    {
      cardId: cardIds.fourOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Hạnh phúc', 'Kết hôn', 'Lễ kỷ niệm', 'Ổn định'],
      meaningUpright: 'Thời điểm hạnh phúc trong tình yêu. Có thể dẫn đến hôn nhân hoặc cam kết lâu dài.',
      meaningReversed: 'Có thể gặp trở ngại trong việc cam kết hoặc tổ chức lễ cưới.',
      advice: 'Tận hưởng khoảng thời gian hạnh phúc và chuẩn bị cho những bước tiến mới.'
    },
    {
      cardId: cardIds.fourOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Hòa hợp', 'Lễ kỷ niệm', 'Đoàn tụ', 'Ổn định'],
      meaningUpright: 'Gia đình đang trong giai đoạn hạnh phúc và hòa hợp. Có thể có dịp đoàn tụ.',
      meaningReversed: 'Có thể có xung đột hoặc khó khăn trong việc tổ chức các sự kiện gia đình.',
      advice: 'Tận dụng thời điểm tốt đẹp để củng cố mối quan hệ gia đình.'
    },
    {
      cardId: cardIds.fourOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Đoàn tụ', 'Hạnh phúc', 'Ổn định', 'Kỷ niệm'],
      meaningUpright: 'Thời điểm hạnh phúc và đoàn tụ gia đình. Không khí ấm áp và hòa thuận.',
      meaningReversed: 'Có thể có khó khăn trong việc duy trì sự hòa hợp hoặc tổ chức đoàn tụ.',
      advice: 'Tạo thêm nhiều dịp để gia đình sum họp và gắn kết.'
    },
    {
      cardId: cardIds.fourOfWands,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Kỷ niệm', 'Hoàn thành', 'Ghi nhận'],
      meaningUpright: 'Đạt được thành tựu đáng kể trong công việc. Thời điểm kỷ niệm và ghi nhận.',
      meaningReversed: 'Có thể chưa đạt được mục tiêu như mong đợi hoặc thiếu sự ghi nhận.',
      advice: 'Tận hưởng thành công và chia sẻ niềm vui với đồng nghiệp.'
    },
    {
      cardId: cardIds.fourOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Ổn định', 'Thành công', 'Thịnh vượng', 'An toàn'],
      meaningUpright: 'Đạt được sự ổn định về tài chính. Có thể có khoản thu nhập đáng kể.',
      meaningReversed: 'Có thể gặp một số bất ổn trong việc duy trì sự ổn định tài chính.',
      advice: 'Tận dụng thời điểm thuận lợi để củng cố nền tảng tài chính.'
    },
    {
      cardId: cardIds.fourOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Kỷ niệm', 'Gặp gỡ', 'Hòa hợp', 'Vui vẻ'],
      meaningUpright: 'Thời điểm tốt để tổ chức gặp gỡ, kỷ niệm. Các mối quan hệ hòa hợp.',
      meaningReversed: 'Có thể gặp khó khăn trong việc tổ chức các sự kiện xã hội.',
      advice: 'Tận dụng cơ hội để tổ chức các buổi gặp gỡ và kết nối.'
    },

    // Five of Wands
    {
      cardId: cardIds.fiveOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Cạnh tranh', 'Xung đột', 'Thử thách', 'Căng thẳng'],
      meaningUpright: 'Có sự cạnh tranh hoặc xung đột trong tình yêu. Thời điểm thử thách.',
      meaningReversed: 'Tránh né xung đột hoặc không giải quyết được bất đồng.',
      advice: 'Đối mặt với xung đột một cách trưởng thành và tìm giải pháp hòa giải.'
    },
    {
      cardId: cardIds.fiveOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Xung đột', 'Bất đồng', 'Cạnh tranh', 'Căng thẳng'],
      meaningUpright: 'Có sự bất đồng trong gia đình. Các thành viên có quan điểm khác nhau.',
      meaningReversed: 'Tránh né vấn đề hoặc không giải quyết được mâu thuẫn gia đình.',
      advice: 'Lắng nghe và tôn trọng ý kiến của mọi người để tìm giải pháp chung.'
    },
    {
      cardId: cardIds.fiveOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Bất đồng', 'Tranh cãi', 'Căng thẳng', 'Thử thách'],
      meaningUpright: 'Có sự bất đồng và tranh cãi trong gia đình. Thời điểm căng thẳng.',
      meaningReversed: 'Khó khăn trong việc giải quyết mâu thuẫn gia đình.',
      advice: 'Cần bình tĩnh và kiên nhẫn để giải quyết các bất đồng.'
    },
    {
      cardId: cardIds.fiveOfWands,
      contextId: contextIds.congViec,
      keywords: ['Cạnh tranh', 'Thử thách', 'Xung đột', 'Áp lực'],
      meaningUpright: 'Môi trường làm việc cạnh tranh cao. Có thể có xung đột với đồng nghiệp.',
      meaningReversed: 'Tránh né cạnh tranh hoặc không đối mặt với thử thách.',
      advice: 'Biến áp lực cạnh tranh thành động lực để phát triển.'
    },
    {
      cardId: cardIds.fiveOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Cạnh tranh', 'Bất ổn', 'Thử thách', 'Căng thẳng'],
      meaningUpright: 'Gặp cạnh tranh trong đầu tư hoặc kinh doanh. Thời điểm thị trường bất ổn.',
      meaningReversed: 'Khó khăn trong việc đối mặt với thách thức tài chính.',
      advice: 'Cẩn trọng trong quyết định tài chính và sẵn sàng đối mặt với cạnh tranh.'
    },
    {
      cardId: cardIds.fiveOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Xung đột', 'Cạnh tranh', 'Bất đồng', 'Căng thẳng'],
      meaningUpright: 'Có sự cạnh tranh hoặc xung đột trong các mối quan hệ xã hội.',
      meaningReversed: 'Tránh né xung đột hoặc không giải quyết được bất đồng.',
      advice: 'Học cách xử lý xung đột một cách khéo léo và xây dựng.'
    },

    // Six of Wands
    {
      cardId: cardIds.sixOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Chiến thắng', 'Công nhận', 'Tự tin', 'Thành công'],
      meaningUpright: 'Mối quan hệ phát triển tốt đẹp. Nhận được sự ủng hộ và công nhận.',
      meaningReversed: 'Có thể thiếu tự tin hoặc không nhận được sự ủng hộ mong muốn.',
      advice: 'Tự hào về mối quan hệ và tiếp tục phát triển nó.'
    },
    {
      cardId: cardIds.sixOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Thành công', 'Tự hào', 'Ghi nhận', 'Vinh dự'],
      meaningUpright: 'Gia đình đạt được thành tựu đáng tự hào. Nhận được sự công nhận từ người khác.',
      meaningReversed: 'Có thể thiếu sự ghi nhận hoặc không đạt được mục tiêu gia đình.',
      advice: 'Chia sẻ và tận hưởng thành công cùng gia đình.'
    },
    {
      cardId: cardIds.sixOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Thành công', 'Tự hào', 'Ghi nhận', 'Hạnh phúc'],
      meaningUpright: 'Gia đình đạt được thành tựu đáng tự hào. Mọi người vui vẻ và hạnh phúc.',
      meaningReversed: 'Có thể thiếu sự ghi nhận hoặc không đạt được mong đợi.',
      advice: 'Tận hưởng thành công và tiếp tục phát triển hạnh phúc gia đình.'
    },
    {
      cardId: cardIds.sixOfWands,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Thăng tiến', 'Công nhận', 'Vinh dự'],
      meaningUpright: 'Đạt được thành công và công nhận trong công việc. Có thể được thăng chức.',
      meaningReversed: 'Có thể chưa đạt được thành công như mong đợi hoặc thiếu sự ghi nhận.',
      advice: 'Tận dụng thành công để tiếp tục phát triển sự nghiệp.'
    },
    {
      cardId: cardIds.sixOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Thành công', 'Lợi nhuận', 'Công nhận', 'Thịnh vượng'],
      meaningUpright: 'Đạt được thành công về tài chính. Các khoản đầu tư sinh lời tốt.',
      meaningReversed: 'Có thể chưa đạt được mục tiêu tài chính hoặc thành công ngắn hạn.',
      advice: 'Tận dụng thời điểm thuận lợi để củng cố và phát triển tài chính.'
    },
    {
      cardId: cardIds.sixOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Thành công', 'Danh tiếng', 'Công nhận', 'Uy tín'],
      meaningUpright: 'Được công nhận và tôn trọng trong các mối quan hệ xã hội.',
      meaningReversed: 'Có thể thiếu sự công nhận hoặc gặp khó khăn trong việc duy trì danh tiếng.',
      advice: 'Sử dụng ảnh hưởng tích cực để giúp đỡ người khác.'
    },

    // Seven of Wands
    {
      cardId: cardIds.sevenOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Bảo vệ', 'Kiên định', 'Đấu tranh', 'Quyết tâm'],
      meaningUpright: 'Bảo vệ mối quan hệ trước những thách thức. Kiên định với tình yêu của mình.',
      meaningReversed: 'Có thể đang mệt mỏi với việc bảo vệ mối quan hệ hoặc thiếu quyết tâm.',
      advice: 'Giữ vững lập trường và bảo vệ những gì quan trọng với bạn.'
    },
    {
      cardId: cardIds.sevenOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Bảo vệ', 'Đấu tranh', 'Kiên định', 'Vượt qua'],
      meaningUpright: 'Bảo vệ lợi ích gia đình trước thách thức. Đứng vững trước áp lực.',
      meaningReversed: 'Có thể cảm thấy quá tải với trách nhiệm gia đình.',
      advice: 'Kiên định bảo vệ giá trị gia đình nhưng cũng cần biết linh hoạt.'
    },
    {
      cardId: cardIds.sevenOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Bảo vệ', 'Kiên định', 'Vượt qua', 'Đấu tranh'],
      meaningUpright: 'Đứng vững trước thách thức để bảo vệ gia đình. Vượt qua khó khăn cùng nhau.',
      meaningReversed: 'Có thể cảm thấy kiệt sức trong việc bảo vệ gia đình.',
      advice: 'Đoàn kết và kiên định để vượt qua thử thách.'
    },
    {
      cardId: cardIds.sevenOfWands,
      contextId: contextIds.congViec,
      keywords: ['Cạnh tranh', 'Kiên định', 'Bảo vệ', 'Vượt qua'],
      meaningUpright: 'Đối mặt với cạnh tranh trong công việc. Bảo vệ vị trí của mình.',
      meaningReversed: 'Có thể cảm thấy quá tải với áp lực cạnh tranh.',
      advice: 'Giữ vững lập trường và tiếp tục phát triển năng lực.'
    },
    {
      cardId: cardIds.sevenOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Bảo vệ', 'Đấu tranh', 'Kiên định', 'Thận trọng'],
      meaningUpright: 'Bảo vệ tài sản và đầu tư của mình. Đứng vững trước biến động.',
      meaningReversed: 'Có thể gặp khó khăn trong việc bảo vệ lợi ích tài chính.',
      advice: 'Thận trọng bảo vệ tài sản và duy trì chiến lược đầu tư.'
    },
    {
      cardId: cardIds.sevenOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Bảo vệ', 'Lập trường', 'Kiên định', 'Đấu tranh'],
      meaningUpright: 'Bảo vệ quan điểm và vị trí của mình trong xã hội.',
      meaningReversed: 'Có thể cảm thấy cô đơn trong việc bảo vệ lập trường.',
      advice: 'Giữ vững nguyên tắc nhưng vẫn cởi mở với ý kiến khác.'
    },

    // Eight of Wands
    {
      cardId: cardIds.eightOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Nhanh chóng', 'Tiến triển', 'Thông tin', 'Hành động'],
      meaningUpright: 'Tình yêu phát triển nhanh chóng. Tin vui trong chuyện tình cảm.',
      meaningReversed: 'Có thể vội vàng hoặc thiếu suy nghĩ trong tình yêu.',
      advice: 'Nắm bắt cơ hội nhưng đừng quá vội vàng trong quyết định.'
    },
    {
      cardId: cardIds.eightOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Thay đổi', 'Nhanh chóng', 'Tin tức', 'Phát triển'],
      meaningUpright: 'Những thay đổi tích cực đến nhanh chóng. Tin vui trong gia đình.',
      meaningReversed: 'Có thể có những thay đổi quá nhanh gây bất ổn.',
      advice: 'Sẵn sàng đón nhận và thích nghi với những thay đổi mới.'
    },
    {
      cardId: cardIds.eightOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Tin tức', 'Phát triển', 'Nhanh chóng', 'Thay đổi'],
      meaningUpright: 'Tin vui đến với gia đình. Sự phát triển diễn ra nhanh chóng.',
      meaningReversed: 'Có thể bị choáng ngợp với tốc độ thay đổi trong gia đình.',
      advice: 'Chuẩn bị tinh thần để đón nhận những thay đổi tích cực.'
    },
    {
      cardId: cardIds.eightOfWands,
      contextId: contextIds.congViec,
      keywords: ['Tiến triển', 'Nhanh chóng', 'Cơ hội', 'Hành động'],
      meaningUpright: 'Công việc phát triển nhanh chóng. Nhiều cơ hội mới xuất hiện.',
      meaningReversed: 'Có thể bị trì hoãn hoặc vội vàng trong quyết định.',
      advice: 'Nắm bắt cơ hội nhưng cần cân nhắc kỹ trước khi hành động.'
    },
    {
      cardId: cardIds.eightOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Nhanh chóng', 'Cơ hội', 'Phát triển', 'Hành động'],
      meaningUpright: 'Cơ hội tài chính đến nhanh chóng. Thời điểm tốt để đầu tư.',
      meaningReversed: 'Cần thận trọng với các quyết định tài chính vội vàng.',
      advice: 'Nắm bắt cơ hội nhưng đừng quên phân tích kỹ lưỡng.'
    },
    {
      cardId: cardIds.eightOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Kết nối', 'Thông tin', 'Nhanh chóng', 'Phát triển'],
      meaningUpright: 'Mở rộng kết nối nhanh chóng. Nhiều cơ hội giao lưu mới.',
      meaningReversed: 'Có thể bị quá tải với thông tin và các mối quan hệ.',
      advice: 'Tận dụng cơ hội kết nối nhưng cần chọn lọc và cân bằng.'
    },

    // Nine of Wands
    {
      cardId: cardIds.nineOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Kiên trì', 'Phòng vệ', 'Bền bỉ', 'Cảnh giác'],
      meaningUpright: 'Kiên trì trong tình yêu dù gặp thử thách. Bảo vệ mối quan hệ.',
      meaningReversed: 'Có thể quá phòng vệ hoặc thiếu niềm tin trong tình yêu.',
      advice: 'Giữ vững niềm tin nhưng đừng quá phòng vệ trong tình yêu.'
    },
    {
      cardId: cardIds.nineOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Bền bỉ', 'Bảo vệ', 'Kiên trì', 'Thận trọng'],
      meaningUpright: 'Kiên trì bảo vệ hạnh phúc gia đình. Vượt qua thử thách cuối cùng.',
      meaningReversed: 'Có thể quá mệt mỏi với việc duy trì ổn định gia đình.',
      advice: 'Tiếp tục kiên trì nhưng cũng cần biết buông bỏ khi cần thiết.'
    },
    {
      cardId: cardIds.nineOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Kiên trì', 'Bảo vệ', 'Bền bỉ', 'Vượt qua'],
      meaningUpright: 'Kiên trì vượt qua thử thách cuối cùng. Bảo vệ hạnh phúc gia đình.',
      meaningReversed: 'Có thể cảm thấy kiệt sức với trách nhiệm gia đình.',
      advice: 'Duy trì sự kiên trì nhưng đừng quên chăm sóc bản thân.'
    },
    {
      cardId: cardIds.nineOfWands,
      contextId: contextIds.congViec,
      keywords: ['Kiên trì', 'Bền bỉ', 'Thận trọng', 'Vượt qua'],
      meaningUpright: 'Kiên trì vượt qua thử thách cuối cùng trong công việc.',
      meaningReversed: 'Có thể cảm thấy kiệt sức hoặc quá phòng vệ.',
      advice: 'Duy trì sự kiên trì và cảnh giác nhưng đừng quá căng thẳng.'
    },
    {
      cardId: cardIds.nineOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Thận trọng', 'Kiên trì', 'Bảo vệ', 'Bền bỉ'],
      meaningUpright: 'Thận trọng trong quản lý tài chính. Kiên trì với kế hoạch dài hạn.',
      meaningReversed: 'Có thể quá lo lắng về tài chính hoặc thiếu linh hoạt.',
      advice: 'Duy trì sự thận trọng nhưng đừng quá bảo thủ.'
    },
    {
      cardId: cardIds.nineOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Cảnh giác', 'Kiên trì', 'Bảo vệ', 'Thận trọng'],
      meaningUpright: 'Thận trọng trong các mối quan hệ. Kiên trì vượt qua thử thách.',
      meaningReversed: 'Có thể quá phòng vệ hoặc thiếu tin tưởng người khác.',
      advice: 'Duy trì sự cảnh giác nhưng vẫn cần mở lòng với người khác.'
    },

    // Ten of Wands
    {
      cardId: cardIds.tenOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Gánh nặng', 'Trách nhiệm', 'Áp lực', 'Kiệt sức'],
      meaningUpright: 'Cảm thấy quá tải với trách nhiệm trong mối quan hệ. Gánh vác nhiều nghĩa vụ.',
      meaningReversed: 'Có thể đang cố gắng buông bỏ gánh nặng hoặc chia sẻ trách nhiệm.',
      advice: 'Học cách chia sẻ trách nhiệm và đừng gánh vác quá nhiều một mình.'
    },
    {
      cardId: cardIds.tenOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Trách nhiệm', 'Gánh nặng', 'Kiệt sức', 'Áp lực'],
      meaningUpright: 'Gánh vác nhiều trách nhiệm gia đình. Cảm thấy nặng nề với nghĩa vụ.',
      meaningReversed: 'Có thể đang cố gắng giảm bớt gánh nặng hoặc phân chia trách nhiệm.',
      advice: 'Phân chia trách nhiệm và tìm kiếm sự hỗ trợ từ các thành viên khác.'
    },
    {
      cardId: cardIds.tenOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Gánh nặng', 'Trách nhiệm', 'Kiệt sức', 'Vượt qua'],
      meaningUpright: 'Đang gánh vác quá nhiều trách nhiệm gia đình. Cảm thấy nặng nề và mệt mỏi.',
      meaningReversed: 'Có thể đang cố gắng buông bỏ hoặc chia sẻ gánh nặng với người khác.',
      advice: 'Học cách phân chia trách nhiệm và chấp nhận sự giúp đỡ từ người thân.'
    },
    {
      cardId: cardIds.tenOfWands,
      contextId: contextIds.congViec,
      keywords: ['Quá tải', 'Áp lực', 'Trách nhiệm', 'Kiệt sức'],
      meaningUpright: 'Gánh vác quá nhiều trách nhiệm trong công việc. Cảm thấy quá tải.',
      meaningReversed: 'Có thể đang cố gắng giảm bớt khối lượng công việc hoặc từ chối thêm trách nhiệm.',
      advice: 'Học cách ủy thác và thiết lập ranh giới trong công việc.'
    },
    {
      cardId: cardIds.tenOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Gánh nặng', 'Áp lực', 'Nợ nần', 'Trách nhiệm'],
      meaningUpright: 'Gánh vác nhiều trách nhiệm tài chính. Cảm thấy nặng nề với các khoản nợ.',
      meaningReversed: 'Có thể đang cố gắng giảm bớt gánh nặng tài chính hoặc tái cơ cấu nợ.',
      advice: 'Lập kế hoạch tài chính rõ ràng và tìm kiếm tư vấn khi cần thiết.'
    },
    {
      cardId: cardIds.tenOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Trách nhiệm', 'Áp lực', 'Gánh nặng', 'Kiệt sức'],
      meaningUpright: 'Cảm thấy quá tải với trách nhiệm xã hội. Gánh vác nhiều vai trò.',
      meaningReversed: 'Có thể đang cố gắng giảm bớt cam kết xã hội hoặc từ chối yêu cầu mới.',
      advice: 'Học cách từ chối và thiết lập ranh giới trong các mối quan hệ.'
    },

    // Page of Wands
    {
      cardId: cardIds.pageOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Khám phá', 'Nhiệt huyết', 'Mới mẻ', 'Phiêu lưu'],
      meaningUpright: 'Bắt đầu một mối quan hệ mới đầy hứng khởi. Khám phá tình yêu với sự nhiệt thành.',
      meaningReversed: 'Có thể thiếu kiên nhẫn hoặc vội vàng trong tình yêu.',
      advice: 'Duy trì sự nhiệt huyết nhưng cần kiên nhẫn và thận trọng.'
    },
    {
      cardId: cardIds.pageOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Tin vui', 'Khởi đầu', 'Nhiệt huyết', 'Sáng tạo'],
      meaningUpright: 'Tin vui mới trong gia đình. Khởi đầu mới đầy hứng khởi.',
      meaningReversed: 'Có thể thiếu sự chuẩn bị hoặc vội vàng trong quyết định gia đình.',
      advice: 'Đón nhận những cơ hội mới nhưng cần cân nhắc kỹ lưỡng.'
    },
    {
      cardId: cardIds.pageOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Khởi đầu', 'Nhiệt huyết', 'Sáng tạo', 'Tin vui'],
      meaningUpright: 'Những khởi đầu mới trong gia đình. Năng lượng tích cực và sáng tạo.',
      meaningReversed: 'Có thể thiếu sự kiên nhẫn hoặc chuẩn bị trong việc gia đình.',
      advice: 'Tận dụng năng lượng tích cực để xây dựng môi trường gia đình vui vẻ.'
    },
    {
      cardId: cardIds.pageOfWands,
      contextId: contextIds.congViec,
      keywords: ['Cơ hội', 'Học hỏi', 'Nhiệt huyết', 'Sáng tạo'],
      meaningUpright: 'Cơ hội mới trong công việc. Học hỏi với sự nhiệt thành.',
      meaningReversed: 'Có thể thiếu kinh nghiệm hoặc quá vội vàng trong quyết định.',
      advice: 'Tận dụng cơ hội học hỏi và phát triển kỹ năng mới.'
    },
    {
      cardId: cardIds.pageOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Cơ hội', 'Học hỏi', 'Khởi đầu', 'Thử nghiệm'],
      meaningUpright: 'Cơ hội tài chính mới. Học hỏi về đầu tư và quản lý tài chính.',
      meaningReversed: 'Có thể thiếu kinh nghiệm hoặc quá mạo hiểm trong đầu tư.',
      advice: 'Học hỏi về tài chính trước khi đưa ra quyết định đầu tư.'
    },
    {
      cardId: cardIds.pageOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Giao tiếp', 'Nhiệt huyết', 'Kết nối', 'Khám phá'],
      meaningUpright: 'Mở rộng các mối quan hệ mới. Giao tiếp với sự nhiệt thành.',
      meaningReversed: 'Có thể thiếu kinh nghiệm hoặc quá vội vàng trong giao tiếp.',
      advice: 'Duy trì sự nhiệt huyết trong giao tiếp nhưng cần thận trọng.'
    },

    // Knight of Wands
    {
      cardId: cardIds.knightOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Đam mê', 'Phiêu lưu', 'Hành động', 'Nhiệt huyết'],
      meaningUpright: 'Mối quan hệ đầy đam mê và phiêu lưu. Hành động quyết đoán trong tình yêu.',
      meaningReversed: 'Có thể quá vội vàng hoặc thiếu kiên nhẫn trong tình yêu.',
      advice: 'Duy trì sự đam mê nhưng cần cân nhắc kỹ trước khi hành động.'
    },
    {
      cardId: cardIds.knightOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Hành động', 'Thay đổi', 'Quyết đoán', 'Năng động'],
      meaningUpright: 'Thời điểm của những thay đổi nhanh chóng trong gia đình. Hành động quyết đoán.',
      meaningReversed: 'Có thể quá vội vàng hoặc thiếu suy nghĩ trong quyết định gia đình.',
      advice: 'Cân bằng giữa hành động nhanh chóng và sự thận trọng.'
    },
    {
      cardId: cardIds.knightOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Năng động', 'Hành động', 'Thay đổi', 'Nhiệt huyết'],
      meaningUpright: 'Mang đến năng lượng tích cực và thay đổi cho gia đình. Hành động quyết đoán.',
      meaningReversed: 'Có thể tạo ra sự xáo trộn hoặc thiếu ổn định trong gia đình.',
      advice: 'Cân bằng giữa sự năng động và nhu cầu ổn định của gia đình.'
    },
    {
      cardId: cardIds.knightOfWands,
      contextId: contextIds.congViec,
      keywords: ['Hành động', 'Cơ hội', 'Nhiệt huyết', 'Thay đổi'],
      meaningUpright: 'Thời điểm của hành động và thay đổi trong công việc. Nắm bắt cơ hội mới.',
      meaningReversed: 'Có thể quá vội vàng hoặc thiếu kế hoạch trong công việc.',
      advice: 'Tận dụng năng lượng tích cực nhưng cần có kế hoạch rõ ràng.'
    },
    {
      cardId: cardIds.knightOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Mạo hiểm', 'Hành động', 'Cơ hội', 'Đầu tư'],
      meaningUpright: 'Thời điểm của những quyết định tài chính táo bạo. Cơ hội đầu tư mới.',
      meaningReversed: 'Có thể quá mạo hiểm hoặc thiếu cân nhắc trong đầu tư.',
      advice: 'Cân bằng giữa sự táo bạo và quản lý rủi ro trong đầu tư.'
    },
    {
      cardId: cardIds.knightOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Năng động', 'Lôi cuốn', 'Hành động', 'Giao tiếp'],
      meaningUpright: 'Thu hút sự chú ý trong các mối quan hệ xã hội. Năng động và lôi cuốn.',
      meaningReversed: 'Có thể quá nóng vội hoặc gây hiểu lầm trong giao tiếp.',
      advice: 'Sử dụng sức hút cá nhân một cách khôn ngoan và có trách nhiệm.'
    },

    // Queen of Wands
    {
      cardId: cardIds.queenOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Tự tin', 'Quyến rũ', 'Độc lập', 'Thu hút'],
      meaningUpright: 'Thu hút và tự tin trong tình yêu. Biết rõ giá trị bản thân.',
      meaningReversed: 'Có thể quá độc đoán hoặc thiếu kiên nhẫn trong mối quan hệ.',
      advice: 'Duy trì sự tự tin nhưng cần quan tâm đến cảm xúc của đối phương.'
    },
    {
      cardId: cardIds.queenOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Lãnh đạo', 'Sáng tạo', 'Năng động', 'Quản lý'],
      meaningUpright: 'Quản lý gia đình hiệu quả. Tạo không khí tích cực và năng động.',
      meaningReversed: 'Có thể quá áp đặt hoặc thiếu linh hoạt trong việc gia đình.',
      advice: 'Sử dụng khả năng lãnh đạo để tạo môi trường gia đình hài hòa.'
    },
    {
      cardId: cardIds.queenOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Chăm sóc', 'Năng động', 'Sáng tạo', 'Bảo vệ'],
      meaningUpright: 'Tạo dựng môi trường gia đình tích cực. Chăm sóc và bảo vệ người thân.',
      meaningReversed: 'Có thể quá bảo vệ hoặc kiểm soát trong gia đình.',
      advice: 'Cân bằng giữa việc chăm sóc và tôn trọng không gian cá nhân.'
    },
    {
      cardId: cardIds.queenOfWands,
      contextId: contextIds.congViec,
      keywords: ['Lãnh đạo', 'Sáng tạo', 'Tự tin', 'Thành công'],
      meaningUpright: 'Thể hiện khả năng lãnh đạo xuất sắc. Tạo cảm hứng cho người khác.',
      meaningReversed: 'Có thể quá độc đoán hoặc thiếu kiên nhẫn với đồng nghiệp.',
      advice: 'Sử dụng khả năng lãnh đạo để tạo môi trường làm việc tích cực.'
    },
    {
      cardId: cardIds.queenOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Quản lý', 'Tự tin', 'Thành công', 'Sáng tạo'],
      meaningUpright: 'Quản lý tài chính hiệu quả. Tự tin trong các quyết định đầu tư.',
      meaningReversed: 'Có thể quá mạo hiểm hoặc thiếu cân nhắc trong tài chính.',
      advice: 'Kết hợp sự tự tin với thận trọng trong quản lý tài chính.'
    },
    {
      cardId: cardIds.queenOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Thu hút', 'Lãnh đạo', 'Tự tin', 'Ảnh hưởng'],
      meaningUpright: 'Thu hút sự chú ý và tôn trọng. Có ảnh hưởng tích cực đến người khác.',
      meaningReversed: 'Có thể quá áp đặt hoặc tạo áp lực trong các mối quan hệ.',
      advice: 'Sử dụng sức ảnh hưởng để tạo môi trường xã hội tích cực.'
    },

    // King of Wands
    {
      cardId: cardIds.kingOfWands,
      contextId: contextIds.tinhYeu,
      keywords: ['Lãnh đạo', 'Quyết đoán', 'Tự tin', 'Trưởng thành'],
      meaningUpright: 'Thể hiện sự trưởng thành và quyết đoán trong tình yêu. Dẫn dắt mối quan hệ.',
      meaningReversed: 'Có thể quá độc đoán hoặc áp đặt trong mối quan hệ.',
      advice: 'Sử dụng sự trưởng thành để xây dựng mối quan hệ bền vững.'
    },
    {
      cardId: cardIds.kingOfWands,
      contextId: contextIds.giaDao,
      keywords: ['Lãnh đạo', 'Bảo vệ', 'Quyết đoán', 'Trách nhiệm'],
      meaningUpright: 'Lãnh đạo và bảo vệ gia đình. Đưa ra quyết định quan trọng.',
      meaningReversed: 'Có thể quá nghiêm khắc hoặc thiếu linh hoạt trong gia đình.',
      advice: 'Cân bằng giữa vai trò lãnh đạo và sự cảm thông trong gia đình.'
    },
    {
      cardId: cardIds.kingOfWands,
      contextId: contextIds.giaDinh,
      keywords: ['Bảo vệ', 'Trách nhiệm', 'Quyết đoán', 'Hướng dẫn'],
      meaningUpright: 'Dẫn dắt và bảo vệ gia đình. Tạo môi trường ổn định và phát triển.',
      meaningReversed: 'Có thể quá áp đặt hoặc thiếu sự cảm thông với người thân.',
      advice: 'Kết hợp sự quyết đoán với lòng bao dung trong gia đình.'
    },
    {
      cardId: cardIds.kingOfWands,
      contextId: contextIds.congViec,
      keywords: ['Lãnh đạo', 'Tầm nhìn', 'Quyết đoán', 'Thành công'],
      meaningUpright: 'Thể hiện khả năng lãnh đạo xuất sắc. Đạt được mục tiêu đề ra.',
      meaningReversed: 'Có thể quá độc đoán hoặc thiếu linh hoạt trong công việc.',
      advice: 'Sử dụng khả năng lãnh đạo để truyền cảm hứng và dẫn dắt đội nhóm.'
    },
    {
      cardId: cardIds.kingOfWands,
      contextId: contextIds.taiChinh,
      keywords: ['Quyết đoán', 'Tầm nhìn', 'Thành công', 'Đầu tư'],
      meaningUpright: 'Đưa ra quyết định tài chính sáng suốt. Có tầm nhìn dài hạn.',
      meaningReversed: 'Có thể quá mạo hiểm hoặc độc đoán trong quyết định tài chính.',
      advice: 'Kết hợp tầm nhìn với sự thận trọng trong quản lý tài chính.'
    },
    {
      cardId: cardIds.kingOfWands,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Ảnh hưởng', 'Lãnh đạo', 'Tôn trọng', 'Quyền lực'],
      meaningUpright: 'Có ảnh hưởng và được tôn trọng trong xã hội. Lãnh đạo tự nhiên.',
      meaningReversed: 'Có thể lạm dụng quyền lực hoặc tạo áp lực cho người khác.',
      advice: 'Sử dụng ảnh hưởng và quyền lực một cách khôn ngoan và có trách nhiệm.'
    }
  ];
}; 