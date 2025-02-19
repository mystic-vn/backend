import { RelatedIds, CardContextData } from './types';

export const generateSwordsContexts = (relatedIds: RelatedIds): CardContextData[] => {
  const { cardIds, contextIds } = relatedIds;

  return [
    // Ace of Swords
    {
      cardId: cardIds.aceOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Sáng suốt', 'Quyết đoán', 'Chân thật', 'Rõ ràng'],
      meaningUpright: 'Nhìn nhận tình yêu một cách sáng suốt và thẳng thắn. Đưa ra quyết định dứt khoát.',
      meaningReversed: 'Có thể quá lý trí hoặc thiếu cân nhắc trong tình yêu.',
      advice: 'Sử dụng lý trí nhưng đừng bỏ qua cảm xúc trong các quyết định tình cảm.'
    },
    {
      cardId: cardIds.aceOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Minh bạch', 'Quyết đoán', 'Trung thực', 'Sáng suốt'],
      meaningUpright: 'Giải quyết vấn đề gia đạo một cách rõ ràng và dứt khoát.',
      meaningReversed: 'Có thể quá cứng nhắc hoặc thiếu cân nhắc trong quyết định.',
      advice: 'Duy trì sự minh bạch và thẳng thắn trong giao tiếp gia đình.'
    },
    {
      cardId: cardIds.aceOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Rõ ràng', 'Quyết đoán', 'Chân thật', 'Công bằng'],
      meaningUpright: 'Đối mặt với vấn đề gia đình một cách thẳng thắn và công bằng.',
      meaningReversed: 'Có thể quá khắt khe hoặc thiếu sự mềm mỏng trong gia đình.',
      advice: 'Giữ sự cân bằng giữa lý trí và tình cảm trong các vấn đề gia đình.'
    },
    {
      cardId: cardIds.aceOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Sáng tạo', 'Đột phá', 'Quyết đoán', 'Thành công'],
      meaningUpright: 'Có ý tưởng mới và tầm nhìn rõ ràng trong công việc.',
      meaningReversed: 'Có thể quá vội vàng hoặc thiếu sự cân nhắc trong quyết định.',
      advice: 'Sử dụng trí tuệ và sự sáng suốt để đạt được mục tiêu công việc.'
    },
    {
      cardId: cardIds.aceOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Sáng suốt', 'Quyết đoán', 'Chiến lược', 'Đầu tư'],
      meaningUpright: 'Có tầm nhìn rõ ràng và chiến lược tài chính thông minh.',
      meaningReversed: 'Có thể quá mạo hiểm hoặc thiếu cân nhắc trong đầu tư.',
      advice: 'Sử dụng trí tuệ và phân tích kỹ lưỡng trước khi đưa ra quyết định tài chính.'
    },
    {
      cardId: cardIds.aceOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Thẳng thắn', 'Trung thực', 'Công bằng', 'Minh bạch'],
      meaningUpright: 'Giao tiếp rõ ràng và thẳng thắn trong các mối quan hệ xã hội.',
      meaningReversed: 'Có thể quá thẳng thắn hoặc thiếu khéo léo trong giao tiếp.',
      advice: 'Duy trì sự trung thực nhưng cần có sự tinh tế trong giao tiếp.'
    },

    // Two of Swords
    {
      cardId: cardIds.twoOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Lưỡng lự', 'Cân nhắc', 'Quyết định', 'Cân bằng'],
      meaningUpright: 'Đang phải đối mặt với quyết định khó khăn trong tình yêu.',
      meaningReversed: 'Tránh né việc đưa ra quyết định hoặc không dám đối mặt với sự thật.',
      advice: 'Cần đối mặt với thực tế và đưa ra quyết định dựa trên cả lý trí và tình cảm.'
    },
    {
      cardId: cardIds.twoOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Cân nhắc', 'Lựa chọn', 'Hòa giải', 'Quyết định'],
      meaningUpright: 'Cần cân nhắc kỹ lưỡng trong các quyết định gia đạo.',
      meaningReversed: 'Khó khăn trong việc đưa ra quyết định hoặc tránh né vấn đề.',
      advice: 'Tìm kiếm sự cân bằng và hài hòa trong các quyết định gia đình.'
    },
    {
      cardId: cardIds.twoOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Đối thoại', 'Hòa giải', 'Cân bằng', 'Quyết định'],
      meaningUpright: 'Cần đối thoại và tìm giải pháp hài hòa cho vấn đề gia đình.',
      meaningReversed: 'Khó khăn trong việc đạt được thỏa thuận hoặc đồng thuận.',
      advice: 'Lắng nghe và cân nhắc ý kiến của mọi người trong gia đình.'
    },
    {
      cardId: cardIds.twoOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Cân nhắc', 'Quyết định', 'Lựa chọn', 'Đánh giá'],
      meaningUpright: 'Đang đối mặt với quyết định quan trọng trong công việc.',
      meaningReversed: 'Khó khăn trong việc đưa ra quyết định hoặc thiếu thông tin.',
      advice: 'Thu thập đầy đủ thông tin và cân nhắc kỹ lưỡng trước khi quyết định.'
    },
    {
      cardId: cardIds.twoOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Cân nhắc', 'Đánh giá', 'Quyết định', 'Thận trọng'],
      meaningUpright: 'Cần cân nhắc kỹ lưỡng các quyết định tài chính.',
      meaningReversed: 'Khó khăn trong việc đưa ra quyết định đầu tư hoặc chi tiêu.',
      advice: 'Đánh giá cẩn thận rủi ro và lợi ích trước khi đưa ra quyết định.'
    },
    {
      cardId: cardIds.twoOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Trung lập', 'Hòa giải', 'Cân bằng', 'Công bằng'],
      meaningUpright: 'Giữ vị trí trung lập trong các mối quan hệ xã hội.',
      meaningReversed: 'Khó khăn trong việc duy trì sự công bằng hoặc trung lập.',
      advice: 'Duy trì sự công bằng và khách quan trong các mối quan hệ.'
    },

    // Three of Swords
    {
      cardId: cardIds.threeOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Đau khổ', 'Chia ly', 'Tổn thương', 'Học hỏi'],
      meaningUpright: 'Trải qua đau khổ và tổn thương trong tình yêu.',
      meaningReversed: 'Đang trong quá trình chữa lành và vượt qua nỗi đau.',
      advice: 'Chấp nhận nỗi đau và học hỏi từ những trải nghiệm đau thương.'
    },
    {
      cardId: cardIds.threeOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Xung đột', 'Đau buồn', 'Chia ly', 'Thay đổi'],
      meaningUpright: 'Trải qua những xung đột và đau buồn trong gia đạo.',
      meaningReversed: 'Đang trong quá trình hàn gắn các mối quan hệ gia đình.',
      advice: 'Đối mặt với khó khăn và tìm cách hàn gắn các mối quan hệ.'
    },
    {
      cardId: cardIds.threeOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Đau buồn', 'Mất mát', 'Thay đổi', 'Học hỏi'],
      meaningUpright: 'Trải qua những tổn thương và mất mát trong gia đình.',
      meaningReversed: 'Đang trong quá trình chữa lành và phục hồi.',
      advice: 'Chấp nhận thay đổi và tìm cách hàn gắn các mối quan hệ gia đình.'
    },
    {
      cardId: cardIds.threeOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Thất bại', 'Thất vọng', 'Học hỏi', 'Thay đổi'],
      meaningUpright: 'Trải qua những thất bại hoặc thất vọng trong công việc.',
      meaningReversed: 'Đang trong quá trình vượt qua khó khăn và học hỏi.',
      advice: 'Học hỏi từ những thất bại và sử dụng chúng làm động lực phát triển.'
    },
    {
      cardId: cardIds.threeOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Mất mát', 'Thất bại', 'Học hỏi', 'Phục hồi'],
      meaningUpright: 'Trải qua những tổn thất hoặc thất bại trong tài chính.',
      meaningReversed: 'Đang trong quá trình phục hồi và học hỏi từ sai lầm.',
      advice: 'Rút kinh nghiệm từ những tổn thất và xây dựng kế hoạch phục hồi.'
    },
    {
      cardId: cardIds.threeOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Tổn thương', 'Phản bội', 'Học hỏi', 'Thay đổi'],
      meaningUpright: 'Trải qua những tổn thương trong các mối quan hệ xã hội.',
      meaningReversed: 'Đang trong quá trình chữa lành và xây dựng lại niềm tin.',
      advice: 'Học cách bảo vệ bản thân và chọn lọc các mối quan hệ.'
    },

    // Four of Swords
    {
      cardId: cardIds.fourOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Nghỉ ngơi', 'Tĩnh tâm', 'Suy ngẫm', 'Hồi phục'],
      meaningUpright: 'Cần thời gian nghỉ ngơi và suy ngẫm về mối quan hệ.',
      meaningReversed: 'Có thể quá vội vàng trở lại mối quan hệ khi chưa sẵn sàng.',
      advice: 'Dành thời gian để chữa lành và suy ngẫm trước khi tiến tới.'
    },
    {
      cardId: cardIds.fourOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Bình yên', 'Nghỉ ngơi', 'Tĩnh lặng', 'Hồi phục'],
      meaningUpright: 'Thời điểm cần sự yên bình và tĩnh lặng trong gia đạo.',
      meaningReversed: 'Khó tìm được sự bình yên hoặc không cho phép bản thân nghỉ ngơi.',
      advice: 'Tạo không gian yên tĩnh để các mối quan hệ gia đình được hồi phục.'
    },
    {
      cardId: cardIds.fourOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Hòa bình', 'Nghỉ ngơi', 'Phục hồi', 'Tĩnh lặng'],
      meaningUpright: 'Thời gian để gia đình nghỉ ngơi và phục hồi sau khó khăn.',
      meaningReversed: 'Khó tìm được sự yên bình hoặc còn nhiều xáo trộn.',
      advice: 'Tạo không gian an toàn cho mọi người trong gia đình nghỉ ngơi.'
    },
    {
      cardId: cardIds.fourOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Nghỉ ngơi', 'Cân bằng', 'Suy ngẫm', 'Chuẩn bị'],
      meaningUpright: 'Cần thời gian nghỉ ngơi và suy ngẫm về hướng đi trong công việc.',
      meaningReversed: 'Có thể đang làm việc quá sức hoặc không cho phép bản thân nghỉ ngơi.',
      advice: 'Cân bằng giữa công việc và nghỉ ngơi để duy trì hiệu suất lâu dài.'
    },
    {
      cardId: cardIds.fourOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Ổn định', 'Cân nhắc', 'Nghỉ ngơi', 'Chuẩn bị'],
      meaningUpright: 'Thời điểm để đánh giá lại và lập kế hoạch tài chính.',
      meaningReversed: 'Có thể quá lo lắng về tài chính hoặc thiếu sự cân nhắc.',
      advice: 'Dành thời gian nghiên cứu và lập kế hoạch tài chính kỹ lưỡng.'
    },
    {
      cardId: cardIds.fourOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Tĩnh lặng', 'Cân bằng', 'Nghỉ ngơi', 'Phục hồi'],
      meaningUpright: 'Cần thời gian một mình để phục hồi năng lượng xã hội.',
      meaningReversed: 'Có thể quá cô lập hoặc không cho phép bản thân nghỉ ngơi.',
      advice: 'Cân bằng giữa thời gian một mình và giao tiếp xã hội.'
    },

    // Five of Swords
    {
      cardId: cardIds.fiveOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Xung đột', 'Tổn thương', 'Chiến thắng', 'Mất mát'],
      meaningUpright: 'Xung đột và tranh cãi trong mối quan hệ tình cảm.',
      meaningReversed: 'Cố gắng hòa giải hoặc vượt qua xung đột.',
      advice: 'Đặt tự ái sang một bên và tìm cách giải quyết xung đột một cách hòa bình.'
    },
    {
      cardId: cardIds.fiveOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Tranh chấp', 'Xung đột', 'Bất đồng', 'Hòa giải'],
      meaningUpright: 'Có những xung đột và bất đồng trong gia đạo.',
      meaningReversed: 'Cố gắng hàn gắn các mối quan hệ sau xung đột.',
      advice: 'Tìm cách giải quyết bất đồng thông qua đối thoại và thấu hiểu.'
    },
    {
      cardId: cardIds.fiveOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Mâu thuẫn', 'Tranh cãi', 'Bất hòa', 'Hòa giải'],
      meaningUpright: 'Có những mâu thuẫn và tranh cãi trong gia đình.',
      meaningReversed: 'Nỗ lực hàn gắn các mối quan hệ gia đình sau xung đột.',
      advice: 'Đặt lợi ích gia đình lên trên các bất đồng cá nhân.'
    },
    {
      cardId: cardIds.fiveOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Cạnh tranh', 'Xung đột', 'Thất bại', 'Học hỏi'],
      meaningUpright: 'Đối mặt với cạnh tranh gay gắt hoặc xung đột trong công việc.',
      meaningReversed: 'Cố gắng vượt qua khó khăn và học hỏi từ thất bại.',
      advice: 'Giữ tinh thần chuyên nghiệp và tập trung vào mục tiêu dài hạn.'
    },
    {
      cardId: cardIds.fiveOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Tổn thất', 'Cạnh tranh', 'Thất bại', 'Phục hồi'],
      meaningUpright: 'Có thể gặp tổn thất hoặc thất bại trong đầu tư.',
      meaningReversed: 'Cố gắng phục hồi sau những tổn thất tài chính.',
      advice: 'Rút kinh nghiệm từ những thất bại và xây dựng chiến lược thận trọng hơn.'
    },
    {
      cardId: cardIds.fiveOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Xung đột', 'Cạnh tranh', 'Mâu thuẫn', 'Hòa giải'],
      meaningUpright: 'Đối mặt với xung đột hoặc cạnh tranh trong các mối quan hệ.',
      meaningReversed: 'Cố gắng hàn gắn các mối quan hệ sau xung đột.',
      advice: 'Tránh những cuộc tranh cãi không cần thiết và tập trung vào hòa giải.'
    },

    // Six of Swords
    {
      cardId: cardIds.sixOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Chuyển tiếp', 'Thay đổi', 'Di chuyển', 'Phục hồi'],
      meaningUpright: 'Bước qua giai đoạn khó khăn trong tình yêu, hướng tới tương lai.',
      meaningReversed: 'Khó khăn trong việc buông bỏ quá khứ hoặc chấp nhận thay đổi.',
      advice: 'Chấp nhận sự thay đổi và tin tưởng vào tương lai tốt đẹp hơn.'
    },
    {
      cardId: cardIds.sixOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Thay đổi', 'Chuyển tiếp', 'Ổn định', 'Phát triển'],
      meaningUpright: 'Gia đạo đang trong giai đoạn chuyển tiếp tích cực.',
      meaningReversed: 'Có thể gặp khó khăn trong việc thích nghi với thay đổi.',
      advice: 'Kiên nhẫn và tin tưởng vào quá trình chuyển đổi của gia đình.'
    },
    {
      cardId: cardIds.sixOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Di chuyển', 'Thay đổi', 'Ổn định', 'Phát triển'],
      meaningUpright: 'Gia đình đang trải qua giai đoạn thay đổi tích cực.',
      meaningReversed: 'Có thể gặp khó khăn trong việc thích nghi với môi trường mới.',
      advice: 'Hỗ trợ các thành viên trong gia đình thích nghi với thay đổi.'
    },
    {
      cardId: cardIds.sixOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Thay đổi', 'Phát triển', 'Di chuyển', 'Cơ hội'],
      meaningUpright: 'Đang trong giai đoạn chuyển tiếp tích cực trong công việc.',
      meaningReversed: 'Có thể gặp khó khăn trong việc thích nghi với thay đổi.',
      advice: 'Chấp nhận thay đổi và tận dụng cơ hội phát triển mới.'
    },
    {
      cardId: cardIds.sixOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Phục hồi', 'Ổn định', 'Thay đổi', 'Phát triển'],
      meaningUpright: 'Tài chính đang dần ổn định và phục hồi.',
      meaningReversed: 'Có thể còn gặp khó khăn trong việc cải thiện tình hình tài chính.',
      advice: 'Kiên nhẫn với quá trình phục hồi và tiếp tục kế hoạch đã đề ra.'
    },
    {
      cardId: cardIds.sixOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Thay đổi', 'Phát triển', 'Kết nối', 'Hòa nhập'],
      meaningUpright: 'Bước vào môi trường xã hội mới với nhiều cơ hội.',
      meaningReversed: 'Có thể gặp khó khăn trong việc hòa nhập với môi trường mới.',
      advice: 'Mở lòng với những mối quan hệ mới và cơ hội kết nối.'
    },

    // Seven of Swords
    {
      cardId: cardIds.sevenOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Lừa dối', 'Không trung thực', 'Bí mật', 'Nghi ngờ'],
      meaningUpright: 'Có sự không trung thực hoặc lừa dối trong mối quan hệ.',
      meaningReversed: 'Đối mặt với sự thật hoặc cố gắng sửa chữa lỗi lầm.',
      advice: 'Cần thẳng thắn và trung thực trong mối quan hệ tình cảm.'
    },
    {
      cardId: cardIds.sevenOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Bí mật', 'Không trung thực', 'Nghi ngờ', 'Thay đổi'],
      meaningUpright: 'Có những bí mật hoặc sự không trung thực trong gia đạo.',
      meaningReversed: 'Cố gắng sửa chữa những sai lầm và xây dựng lại niềm tin.',
      advice: 'Đối mặt với sự thật và giải quyết vấn đề một cách trung thực.'
    },
    {
      cardId: cardIds.sevenOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Không tin tưởng', 'Bí mật', 'Thay đổi', 'Sửa chữa'],
      meaningUpright: 'Có những bí mật hoặc sự thiếu tin tưởng trong gia đình.',
      meaningReversed: 'Nỗ lực khôi phục niềm tin và sự trung thực.',
      advice: 'Xây dựng lại niềm tin thông qua sự chân thành và cởi mở.'
    },
    {
      cardId: cardIds.sevenOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Chiến lược', 'Thận trọng', 'Cạnh tranh', 'Thay đổi'],
      meaningUpright: 'Cần có chiến lược thông minh trong môi trường cạnh tranh.',
      meaningReversed: 'Đối mặt với hậu quả của hành động thiếu chính trực.',
      advice: 'Duy trì đạo đức nghề nghiệp và tìm cách cạnh tranh lành mạnh.'
    },
    {
      cardId: cardIds.sevenOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Thận trọng', 'Rủi ro', 'Lừa dối', 'Cảnh giác'],
      meaningUpright: 'Cần đề phòng những rủi ro và lừa đảo trong tài chính.',
      meaningReversed: 'Nhận ra và sửa chữa những sai lầm trong quản lý tài chính.',
      advice: 'Kiểm tra kỹ thông tin và đề phòng những rủi ro tiềm ẩn.'
    },
    {
      cardId: cardIds.sevenOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Cảnh giác', 'Không tin tưởng', 'Thận trọng', 'Thay đổi'],
      meaningUpright: 'Cần thận trọng trong các mối quan hệ xã hội.',
      meaningReversed: 'Học cách tin tưởng lại sau khi bị phản bội.',
      advice: 'Cân bằng giữa sự cảnh giác và cởi mở trong các mối quan hệ.'
    },

    // Eight of Swords
    {
      cardId: cardIds.eightOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Bế tắc', 'Tự giới hạn', 'Lo lắng', 'Giải thoát'],
      meaningUpright: 'Cảm thấy bị mắc kẹt hoặc bị giới hạn trong mối quan hệ.',
      meaningReversed: 'Bắt đầu nhận ra và phá vỡ những giới hạn tự áp đặt.',
      advice: 'Nhận ra rằng bạn có quyền lựa chọn và khả năng thay đổi tình huống.'
    },
    {
      cardId: cardIds.eightOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Bế tắc', 'Giới hạn', 'Lo lắng', 'Thay đổi'],
      meaningUpright: 'Cảm thấy bị mắc kẹt trong các vấn đề gia đạo.',
      meaningReversed: 'Bắt đầu tìm thấy cách thoát khỏi tình huống khó khăn.',
      advice: 'Tìm kiếm sự hỗ trợ và góc nhìn mới để giải quyết vấn đề.'
    },
    {
      cardId: cardIds.eightOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Lo lắng', 'Giới hạn', 'Thay đổi', 'Giải thoát'],
      meaningUpright: 'Cảm thấy bị giới hạn bởi trách nhiệm và nghĩa vụ gia đình.',
      meaningReversed: 'Bắt đầu tìm thấy cách cân bằng giữa trách nhiệm và tự do.',
      advice: 'Trao đổi cởi mở về cảm xúc và tìm giải pháp cùng gia đình.'
    },
    {
      cardId: cardIds.eightOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Bế tắc', 'Giới hạn', 'Thay đổi', 'Cơ hội'],
      meaningUpright: 'Cảm thấy bị mắc kẹt hoặc thiếu lựa chọn trong công việc.',
      meaningReversed: 'Bắt đầu nhận ra các cơ hội và khả năng mới.',
      advice: 'Mở rộng tầm nhìn và tìm kiếm các giải pháp sáng tạo.'
    },
    {
      cardId: cardIds.eightOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Giới hạn', 'Lo lắng', 'Thay đổi', 'Giải pháp'],
      meaningUpright: 'Cảm thấy bị giới hạn bởi tình hình tài chính.',
      meaningReversed: 'Bắt đầu tìm thấy cách thoát khỏi khó khăn tài chính.',
      advice: 'Tìm kiếm tư vấn và đánh giá lại các lựa chọn tài chính.'
    },
    {
      cardId: cardIds.eightOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Cô lập', 'Giới hạn', 'Thay đổi', 'Kết nối'],
      meaningUpright: 'Cảm thấy bị cô lập hoặc giới hạn trong các mối quan hệ.',
      meaningReversed: 'Bắt đầu phá vỡ rào cản và mở rộng kết nối.',
      advice: 'Chủ động vượt qua nỗi sợ và tạo dựng các mối quan hệ mới.'
    },

    // Nine of Swords
    {
      cardId: cardIds.nineOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Lo âu', 'Sợ hãi', 'Ám ảnh', 'Chữa lành'],
      meaningUpright: 'Trải qua những lo âu và sợ hãi trong tình yêu.',
      meaningReversed: 'Bắt đầu vượt qua nỗi sợ và tìm thấy bình an.',
      advice: 'Đối mặt với nỗi sợ và tìm kiếm sự hỗ trợ khi cần thiết.'
    },
    {
      cardId: cardIds.nineOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Lo lắng', 'Căng thẳng', 'Ám ảnh', 'Bình an'],
      meaningUpright: 'Trải qua những lo lắng và căng thẳng về gia đạo.',
      meaningReversed: 'Bắt đầu tìm thấy cách giải tỏa những lo âu.',
      advice: 'Chia sẻ gánh nặng và tìm kiếm sự hỗ trợ từ người thân.'
    },
    {
      cardId: cardIds.nineOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Căng thẳng', 'Lo âu', 'Ám ảnh', 'Chữa lành'],
      meaningUpright: 'Trải qua những lo lắng và căng thẳng về gia đình.',
      meaningReversed: 'Bắt đầu tìm thấy cách đối phó với stress.',
      advice: 'Tạo không gian thoải mái và an toàn trong gia đình.'
    },
    {
      cardId: cardIds.nineOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Stress', 'Lo lắng', 'Áp lực', 'Giải tỏa'],
      meaningUpright: 'Đối mặt với stress và áp lực lớn trong công việc.',
      meaningReversed: 'Bắt đầu tìm cách đối phó với áp lực công việc.',
      advice: 'Học cách quản lý stress và tìm sự cân bằng trong công việc.'
    },
    {
      cardId: cardIds.nineOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Lo lắng', 'Stress', 'Áp lực', 'Giải pháp'],
      meaningUpright: 'Lo lắng và stress về tình hình tài chính.',
      meaningReversed: 'Bắt đầu tìm thấy cách đối phó với áp lực tài chính.',
      advice: 'Đối mặt với thực tế và tìm kiếm giải pháp thực tế.'
    },
    {
      cardId: cardIds.nineOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Lo âu', 'Căng thẳng', 'Cô lập', 'Hỗ trợ'],
      meaningUpright: 'Trải qua lo âu và căng thẳng trong các mối quan hệ.',
      meaningReversed: 'Bắt đầu vượt qua nỗi sợ và mở lòng với người khác.',
      advice: 'Tìm kiếm sự hỗ trợ từ những người đáng tin cậy.'
    },

    // Ten of Swords
    {
      cardId: cardIds.tenOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Kết thúc', 'Đau đớn', 'Giải thoát', 'Khởi đầu mới'],
      meaningUpright: 'Một mối quan hệ đến hồi kết thúc đau đớn nhưng cần thiết.',
      meaningReversed: 'Bắt đầu vượt qua nỗi đau và sẵn sàng cho khởi đầu mới.',
      advice: 'Chấp nhận sự kết thúc và tin vào khả năng hồi phục của bản thân.'
    },
    {
      cardId: cardIds.tenOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Kết thúc', 'Thay đổi', 'Giải thoát', 'Tái sinh'],
      meaningUpright: 'Một giai đoạn khó khăn trong gia đạo đang kết thúc.',
      meaningReversed: 'Bắt đầu thấy ánh sáng cuối đường hầm sau khó khăn.',
      advice: 'Chấp nhận những thay đổi và chuẩn bị cho giai đoạn mới.'
    },
    {
      cardId: cardIds.tenOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Biến đổi', 'Kết thúc', 'Đổi mới', 'Hy vọng'],
      meaningUpright: 'Một giai đoạn khó khăn trong gia đình sắp kết thúc.',
      meaningReversed: 'Bắt đầu quá trình hàn gắn và xây dựng lại.',
      advice: 'Giữ niềm tin vào khả năng phục hồi của gia đình.'
    },
    {
      cardId: cardIds.tenOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Kết thúc', 'Thay đổi', 'Cơ hội', 'Khởi đầu'],
      meaningUpright: 'Một giai đoạn khó khăn trong công việc đang kết thúc.',
      meaningReversed: 'Bắt đầu nhìn thấy cơ hội mới sau thất bại.',
      advice: 'Chuẩn bị cho những thay đổi và cơ hội mới trong sự nghiệp.'
    },
    {
      cardId: cardIds.tenOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Khủng hoảng', 'Kết thúc', 'Phục hồi', 'Cơ hội'],
      meaningUpright: 'Đang trải qua giai đoạn khủng hoảng tài chính.',
      meaningReversed: 'Bắt đầu thấy dấu hiệu phục hồi sau khủng hoảng.',
      advice: 'Rút kinh nghiệm và xây dựng nền tảng tài chính vững chắc hơn.'
    },
    {
      cardId: cardIds.tenOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Kết thúc', 'Thay đổi', 'Tái sinh', 'Kết nối'],
      meaningUpright: 'Một số mối quan hệ cần được kết thúc để tiến về phía trước.',
      meaningReversed: 'Bắt đầu xây dựng lại mạng lưới quan hệ lành mạnh hơn.',
      advice: 'Chọn lọc các mối quan hệ và tạo không gian cho những kết nối mới.'
    },

    // Page of Swords
    {
      cardId: cardIds.pageOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Tò mò', 'Thẳng thắn', 'Học hỏi', 'Khám phá'],
      meaningUpright: 'Khám phá và học hỏi về tình yêu với sự nhiệt thành.',
      meaningReversed: 'Có thể quá vội vàng hoặc thiếu kinh nghiệm trong tình yêu.',
      advice: 'Duy trì sự tò mò và cởi mở trong việc học hỏi về tình yêu.'
    },
    {
      cardId: cardIds.pageOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Học hỏi', 'Thẳng thắn', 'Giao tiếp', 'Phát triển'],
      meaningUpright: 'Học cách giao tiếp và xử lý các vấn đề gia đạo.',
      meaningReversed: 'Có thể thiếu kinh nghiệm trong xử lý vấn đề gia đình.',
      advice: 'Lắng nghe và học hỏi từ kinh nghiệm của các thành viên trong gia đình.'
    },
    {
      cardId: cardIds.pageOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Học hỏi', 'Giao tiếp', 'Phát triển', 'Thay đổi'],
      meaningUpright: 'Khám phá và học hỏi về vai trò mới trong gia đình.',
      meaningReversed: 'Có thể gặp khó khăn trong việc thích nghi với thay đổi.',
      advice: 'Giữ tâm thế cởi mở và sẵn sàng học hỏi từ mọi người.'
    },
    {
      cardId: cardIds.pageOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Học hỏi', 'Sáng tạo', 'Phát triển', 'Cơ hội'],
      meaningUpright: 'Khám phá và học hỏi những kỹ năng mới trong công việc.',
      meaningReversed: 'Có thể thiếu kinh nghiệm hoặc quá vội vàng trong quyết định.',
      advice: 'Tận dụng cơ hội học hỏi và phát triển bản thân.'
    },
    {
      cardId: cardIds.pageOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Học hỏi', 'Nghiên cứu', 'Thận trọng', 'Phát triển'],
      meaningUpright: 'Tìm hiểu và học hỏi về quản lý tài chính.',
      meaningReversed: 'Có thể thiếu kinh nghiệm trong quyết định tài chính.',
      advice: 'Nghiên cứu kỹ lưỡng trước khi đưa ra quyết định tài chính.'
    },
    {
      cardId: cardIds.pageOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Giao tiếp', 'Học hỏi', 'Kết nối', 'Phát triển'],
      meaningUpright: 'Khám phá và học hỏi trong các mối quan hệ xã hội.',
      meaningReversed: 'Có thể thiếu kinh nghiệm trong giao tiếp xã hội.',
      advice: 'Duy trì sự tò mò và cởi mở trong việc xây dựng quan hệ.'
    },

    // Knight of Swords
    {
      cardId: cardIds.knightOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Quyết đoán', 'Nhiệt huyết', 'Hành động', 'Thay đổi'],
      meaningUpright: 'Theo đuổi tình yêu với sự quyết đoán và nhiệt huyết.',
      meaningReversed: 'Có thể quá vội vàng hoặc thiếu cân nhắc trong tình yêu.',
      advice: 'Cân bằng giữa nhiệt huyết và sự cân nhắc trong các quyết định.'
    },
    {
      cardId: cardIds.knightOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Hành động', 'Quyết đoán', 'Thay đổi', 'Giải quyết'],
      meaningUpright: 'Giải quyết vấn đề gia đạo một cách quyết đoán.',
      meaningReversed: 'Có thể quá nóng vội trong việc giải quyết vấn đề.',
      advice: 'Cân nhắc kỹ lưỡng trước khi đưa ra quyết định quan trọng.'
    },
    {
      cardId: cardIds.knightOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Hành động', 'Thay đổi', 'Quyết đoán', 'Bảo vệ'],
      meaningUpright: 'Bảo vệ và hành động vì lợi ích gia đình.',
      meaningReversed: 'Có thể quá áp đặt hoặc thiếu cân nhắc trong quyết định.',
      advice: 'Lắng nghe ý kiến của các thành viên trong gia đình.'
    },
    {
      cardId: cardIds.knightOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Quyết đoán', 'Hành động', 'Thay đổi', 'Tiến bộ'],
      meaningUpright: 'Theo đuổi mục tiêu công việc với sự quyết đoán.',
      meaningReversed: 'Có thể quá vội vàng hoặc thiếu chiến lược.',
      advice: 'Cân bằng giữa tốc độ và chất lượng trong công việc.'
    },
    {
      cardId: cardIds.knightOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Hành động', 'Quyết đoán', 'Thay đổi', 'Rủi ro'],
      meaningUpright: 'Đưa ra quyết định tài chính nhanh chóng và quyết đoán.',
      meaningReversed: 'Có thể quá mạo hiểm hoặc thiếu cân nhắc trong đầu tư.',
      advice: 'Cân nhắc kỹ rủi ro trước khi đưa ra quyết định tài chính.'
    },
    {
      cardId: cardIds.knightOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Giao tiếp', 'Quyết đoán', 'Thay đổi', 'Hành động'],
      meaningUpright: 'Xây dựng quan hệ xã hội với sự tự tin và quyết đoán.',
      meaningReversed: 'Có thể quá gay gắt hoặc thiếu tinh tế trong giao tiếp.',
      advice: 'Phát triển kỹ năng giao tiếp tinh tế và hiệu quả.'
    },

    // Queen of Swords
    {
      cardId: cardIds.queenOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Sáng suốt', 'Độc lập', 'Thẳng thắn', 'Trí tuệ'],
      meaningUpright: 'Nhìn nhận tình yêu với sự sáng suốt và độc lập.',
      meaningReversed: 'Có thể quá lạnh lùng hoặc khắt khe trong tình yêu.',
      advice: 'Cân bằng giữa lý trí và tình cảm trong các mối quan hệ.'
    },
    {
      cardId: cardIds.queenOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Công bằng', 'Sáng suốt', 'Độc lập', 'Lãnh đạo'],
      meaningUpright: 'Xử lý vấn đề gia đạo với sự công bằng và sáng suốt.',
      meaningReversed: 'Có thể quá nghiêm khắc hoặc thiếu linh hoạt.',
      advice: 'Duy trì sự công bằng nhưng không quên yếu tố tình cảm.'
    },
    {
      cardId: cardIds.queenOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Bảo vệ', 'Sáng suốt', 'Công bằng', 'Chăm sóc'],
      meaningUpright: 'Lãnh đạo và bảo vệ gia đình với sự sáng suốt.',
      meaningReversed: 'Có thể quá cứng rắn hoặc thiếu sự ấm áp.',
      advice: 'Kết hợp sự cương quyết với tình yêu thương trong gia đình.'
    },
    {
      cardId: cardIds.queenOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Chuyên nghiệp', 'Sáng suốt', 'Lãnh đạo', 'Công bằng'],
      meaningUpright: 'Lãnh đạo và quyết định với sự sáng suốt và công bằng.',
      meaningReversed: 'Có thể quá khắt khe hoặc thiếu linh hoạt.',
      advice: 'Duy trì tính chuyên nghiệp nhưng không quên yếu tố con người.'
    },
    {
      cardId: cardIds.queenOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Sáng suốt', 'Độc lập', 'Quản lý', 'Kế hoạch'],
      meaningUpright: 'Quản lý tài chính với sự sáng suốt và độc lập.',
      meaningReversed: 'Có thể quá thận trọng hoặc thiếu linh hoạt.',
      advice: 'Cân bằng giữa thận trọng và tận dụng cơ hội.'
    },
    {
      cardId: cardIds.queenOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Thẳng thắn', 'Độc lập', 'Tôn trọng', 'Lãnh đạo'],
      meaningUpright: 'Xây dựng quan hệ xã hội dựa trên sự tôn trọng và thẳng thắn.',
      meaningReversed: 'Có thể quá cách biệt hoặc khó gần.',
      advice: 'Giữ sự chuyên nghiệp nhưng vẫn thân thiện và cởi mở.'
    },

    // King of Swords
    {
      cardId: cardIds.kingOfSwords,
      contextId: contextIds.tinhYeu,
      keywords: ['Lý trí', 'Công bằng', 'Quyết đoán', 'Trưởng thành'],
      meaningUpright: 'Xử lý các vấn đề tình cảm với sự trưởng thành và công bằng.',
      meaningReversed: 'Có thể quá lạnh lùng hoặc thiếu cảm thông.',
      advice: 'Cân bằng giữa lý trí và tình cảm trong các quyết định.'
    },
    {
      cardId: cardIds.kingOfSwords,
      contextId: contextIds.giaDao,
      keywords: ['Lãnh đạo', 'Công bằng', 'Quyết đoán', 'Bảo vệ'],
      meaningUpright: 'Lãnh đạo và bảo vệ gia đạo với sự công bằng.',
      meaningReversed: 'Có thể quá nghiêm khắc hoặc thiếu linh hoạt.',
      advice: 'Duy trì sự công bằng và quan tâm đến cảm xúc của mọi người.'
    },
    {
      cardId: cardIds.kingOfSwords,
      contextId: contextIds.giaDinh,
      keywords: ['Bảo vệ', 'Lãnh đạo', 'Công bằng', 'Trách nhiệm'],
      meaningUpright: 'Lãnh đạo gia đình với sự công bằng và trách nhiệm.',
      meaningReversed: 'Có thể quá độc đoán hoặc thiếu sự ấm áp.',
      advice: 'Kết hợp sự nghiêm túc với tình yêu thương trong gia đình.'
    },
    {
      cardId: cardIds.kingOfSwords,
      contextId: contextIds.congViec,
      keywords: ['Lãnh đạo', 'Quyết đoán', 'Công bằng', 'Chuyên nghiệp'],
      meaningUpright: 'Lãnh đạo và quyết định với sự sáng suốt và công bằng.',
      meaningReversed: 'Có thể quá cứng nhắc hoặc thiếu linh hoạt.',
      advice: 'Duy trì tính chuyên nghiệp và công bằng trong mọi quyết định.'
    },
    {
      cardId: cardIds.kingOfSwords,
      contextId: contextIds.taiChinh,
      keywords: ['Chiến lược', 'Quyết đoán', 'Công bằng', 'Quản lý'],
      meaningUpright: 'Quản lý tài chính với tầm nhìn chiến lược và công bằng.',
      meaningReversed: 'Có thể quá thận trọng hoặc thiếu linh hoạt.',
      advice: 'Đưa ra quyết định tài chính dựa trên phân tích và sự công bằng.'
    },
    {
      cardId: cardIds.kingOfSwords,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Lãnh đạo', 'Công bằng', 'Tôn trọng', 'Ảnh hưởng'],
      meaningUpright: 'Tạo ảnh hưởng xã hội thông qua sự công bằng và tôn trọng.',
      meaningReversed: 'Có thể quá cách biệt hoặc thiếu khả năng kết nối.',
      advice: 'Sử dụng ảnh hưởng của mình một cách công bằng và có trách nhiệm.'
    }
  ];
}; 