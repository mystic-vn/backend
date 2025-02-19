import { CardContextData, RelatedIds } from './types';

export const generatePentaclesContexts = (relatedIds: RelatedIds): CardContextData[] => {
  const { cardIds, contextIds } = relatedIds;

  return [
    // Ace of Pentacles
    {
      cardId: cardIds.aceOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Cơ hội', 'Ổn định', 'Vững chắc', 'Thực tế'],
      meaningUpright: 'Một cơ hội mới để xây dựng mối quan hệ bền vững. Tình yêu phát triển trên nền tảng thực tế và ổn định.',
      meaningReversed: 'Có thể đang quá chú trọng vào yếu tố vật chất hoặc thiếu sự ổn định trong tình yêu.',
      advice: 'Xây dựng mối quan hệ trên nền tảng vững chắc và thực tế.'
    },
    {
      cardId: cardIds.aceOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Ổn định', 'Thịnh vượng', 'Cơ hội', 'Phát triển'],
      meaningUpright: 'Cơ hội mới để xây dựng nền tảng gia đình vững chắc. Thời điểm tốt để đầu tư cho tổ ấm.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc tạo dựng sự ổn định cho gia đình.',
      advice: 'Tập trung xây dựng nền tảng vững chắc cho gia đình.'
    },
    {
      cardId: cardIds.aceOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Cơ hội', 'Thăng tiến', 'Ổn định', 'Thành công'],
      meaningUpright: 'Cơ hội mới trong sự nghiệp với triển vọng thăng tiến và ổn định lâu dài.',
      meaningReversed: 'Có thể đang bỏ lỡ cơ hội hoặc chưa sẵn sàng nắm bắt cơ hội.',
      advice: 'Nắm bắt cơ hội và xây dựng nền tảng vững chắc cho sự nghiệp.'
    },
    {
      cardId: cardIds.aceOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Cơ hội', 'Đầu tư', 'Thịnh vượng', 'Ổn định'],
      meaningUpright: 'Cơ hội tài chính mới với tiềm năng phát triển lâu dài. Thời điểm tốt để đầu tư.',
      meaningReversed: 'Có thể đang bỏ lỡ cơ hội đầu tư hoặc quá thận trọng với tiền bạc.',
      advice: 'Đầu tư thông minh và xây dựng nền tảng tài chính vững chắc.'
    },
    {
      cardId: cardIds.aceOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Kết nối', 'Cơ hội', 'Thực tế', 'Hợp tác'],
      meaningUpright: 'Cơ hội tạo dựng các mối quan hệ có lợi và bền vững. Thời điểm tốt để mở rộng mạng lưới.',
      meaningReversed: 'Có thể đang bỏ lỡ cơ hội kết nối hoặc quá chú trọng vào lợi ích vật chất.',
      advice: 'Xây dựng các mối quan hệ dựa trên sự tin tưởng và lợi ích chung.'
    },
    {
      cardId: cardIds.aceOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Ổn định', 'Thịnh vượng', 'Cơ hội', 'Phát triển'],
      meaningUpright: 'Cơ hội mới để xây dựng nền tảng gia đình vững chắc. Thời điểm tốt để đầu tư cho tương lai gia đình.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc tạo dựng sự ổn định cho gia đình.',
      advice: 'Tập trung xây dựng nền tảng vững chắc cho gia đình.'
    },

    // Two of Pentacles
    {
      cardId: cardIds.twoOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Cân bằng', 'Linh hoạt', 'Thích nghi', 'Ưu tiên'],
      meaningUpright: 'Cần cân bằng giữa tình yêu và các khía cạnh khác của cuộc sống. Khả năng thích nghi tốt với thay đổi.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc cân bằng các mối quan hệ hoặc quá tải.',
      advice: 'Học cách sắp xếp ưu tiên và duy trì sự cân bằng trong các mối quan hệ.'
    },
    {
      cardId: cardIds.twoOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Cân bằng', 'Quản lý', 'Thích nghi', 'Linh hoạt'],
      meaningUpright: 'Cần cân bằng giữa trách nhiệm gia đình và công việc. Khả năng thích nghi với thay đổi.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc quản lý thời gian và trách nhiệm gia đình.',
      advice: 'Sắp xếp thời gian hợp lý và linh hoạt trong việc xử lý công việc gia đình.'
    },
    {
      cardId: cardIds.twoOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Đa nhiệm', 'Cân bằng', 'Thích nghi', 'Quản lý'],
      meaningUpright: 'Khả năng xử lý nhiều công việc cùng lúc. Cần cân bằng giữa các dự án và trách nhiệm.',
      meaningReversed: 'Có thể đang cảm thấy quá tải hoặc khó khăn trong việc quản lý công việc.',
      advice: 'Phát triển kỹ năng quản lý thời gian và ưu tiên công việc hiệu quả.'
    },
    {
      cardId: cardIds.twoOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Cân bằng', 'Quản lý', 'Linh hoạt', 'Thích nghi'],
      meaningUpright: 'Cần cân bằng giữa thu chi và các khoản đầu tư. Khả năng thích nghi với biến động tài chính.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc quản lý tài chính hoặc chi tiêu thiếu kiểm soát.',
      advice: 'Lập kế hoạch tài chính linh hoạt và quản lý chi tiêu hiệu quả.'
    },
    {
      cardId: cardIds.twoOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Cân bằng', 'Thích nghi', 'Linh hoạt', 'Quản lý'],
      meaningUpright: 'Khả năng duy trì nhiều mối quan hệ xã hội. Cần cân bằng giữa các cam kết và trách nhiệm.',
      meaningReversed: 'Có thể đang cảm thấy quá tải với các mối quan hệ hoặc khó duy trì cam kết.',
      advice: 'Sắp xếp thời gian hợp lý cho các mối quan hệ và biết từ chối khi cần thiết.'
    },
    {
      cardId: cardIds.twoOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Cân bằng', 'Quản lý', 'Thích nghi', 'Linh hoạt'],
      meaningUpright: 'Cần cân bằng giữa các trách nhiệm trong gia đình. Khả năng thích nghi với thay đổi trong môi trường gia đình.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc quản lý thời gian và trách nhiệm với gia đình.',
      advice: 'Sắp xếp thời gian hợp lý và linh hoạt trong việc chăm sóc gia đình.'
    },

    // Three of Pentacles
    {
      cardId: cardIds.threeOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Hợp tác', 'Xây dựng', 'Phát triển', 'Kỹ năng'],
      meaningUpright: 'Cùng nhau xây dựng mối quan hệ vững chắc. Sự hợp tác và nỗ lực từ cả hai phía.',
      meaningReversed: 'Có thể thiếu sự hợp tác hoặc không đồng bộ trong việc xây dựng mối quan hệ.',
      advice: 'Phát triển mối quan hệ thông qua sự hợp tác và nỗ lực chung.'
    },
    {
      cardId: cardIds.threeOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Hợp tác', 'Xây dựng', 'Kỹ năng', 'Phát triển'],
      meaningUpright: 'Các thành viên cùng nhau xây dựng gia đình. Mọi người đều đóng góp và phát huy thế mạnh.',
      meaningReversed: 'Có thể thiếu sự phối hợp hoặc không nhận được sự hỗ trợ từ các thành viên.',
      advice: 'Khuyến khích sự đóng góp và hợp tác từ mọi thành viên trong gia đình.'
    },
    {
      cardId: cardIds.threeOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Chuyên môn', 'Hợp tác', 'Công nhận', 'Phát triển'],
      meaningUpright: 'Được công nhận về chuyên môn và kỹ năng. Làm việc hiệu quả trong team.',
      meaningReversed: 'Có thể thiếu sự hợp tác hoặc không được đánh giá đúng năng lực.',
      advice: 'Phát triển kỹ năng chuyên môn và tăng cường hợp tác với đồng nghiệp.'
    },
    {
      cardId: cardIds.threeOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Kỹ năng', 'Hợp tác', 'Phát triển', 'Đầu tư'],
      meaningUpright: 'Cơ hội hợp tác đầu tư hoặc phát triển kỹ năng tài chính. Được sự hỗ trợ từ chuyên gia.',
      meaningReversed: 'Có thể thiếu sự hợp tác hoặc chưa đủ kỹ năng trong quản lý tài chính.',
      advice: 'Học hỏi từ chuyên gia và tìm kiếm cơ hội hợp tác đầu tư.'
    },
    {
      cardId: cardIds.threeOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Hợp tác', 'Kỹ năng', 'Công nhận', 'Phát triển'],
      meaningUpright: 'Được công nhận trong các hoạt động nhóm. Có khả năng làm việc hiệu quả với người khác.',
      meaningReversed: 'Có thể gặp khó khăn trong làm việc nhóm hoặc thiếu sự công nhận.',
      advice: 'Phát huy thế mạnh cá nhân trong hoạt động nhóm và xây dựng tinh thần đồng đội.'
    },
    {
      cardId: cardIds.threeOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Hợp tác', 'Xây dựng', 'Kỹ năng', 'Phát triển'],
      meaningUpright: 'Các thành viên cùng nhau xây dựng tổ ấm. Mọi người đều đóng góp và phát huy thế mạnh của mình.',
      meaningReversed: 'Có thể thiếu sự phối hợp hoặc không nhận được sự hỗ trợ từ các thành viên trong gia đình.',
      advice: 'Khuyến khích sự đóng góp và hợp tác từ mọi thành viên trong gia đình.'
    },

    // Four of Pentacles
    {
      cardId: cardIds.fourOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Bảo vệ', 'An toàn', 'Kiểm soát', 'Giữ gìn'],
      meaningUpright: 'Có xu hướng bảo vệ và kiểm soát trong tình yêu. Cần sự an toàn và ổn định trong mối quan hệ.',
      meaningReversed: 'Có thể quá kiểm soát hoặc sợ hãi sự thay đổi trong mối quan hệ.',
      advice: 'Tìm sự cân bằng giữa bảo vệ và cho phép mối quan hệ phát triển tự nhiên.'
    },
    {
      cardId: cardIds.fourOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Bảo vệ', 'An toàn', 'Tiết kiệm', 'Ổn định'],
      meaningUpright: 'Tập trung vào việc bảo vệ và duy trì sự ổn định gia đình. Thận trọng trong chi tiêu.',
      meaningReversed: 'Có thể quá keo kiệt hoặc thiếu linh hoạt trong quản lý gia đình.',
      advice: 'Cân bằng giữa bảo vệ và cho phép sự phát triển trong gia đình.'
    },
    {
      cardId: cardIds.fourOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['An toàn', 'Bảo thủ', 'Kiểm soát', 'Ổn định'],
      meaningUpright: 'Tìm kiếm sự an toàn và ổn định trong công việc. Thận trọng với thay đổi.',
      meaningReversed: 'Có thể quá bảo thủ hoặc sợ hãi thay đổi trong công việc.',
      advice: 'Duy trì sự ổn định nhưng đừng để nỗi sợ cản trở sự phát triển.'
    },
    {
      cardId: cardIds.fourOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Tiết kiệm', 'Bảo thủ', 'An toàn', 'Tích lũy'],
      meaningUpright: 'Tập trung vào việc tiết kiệm và tích lũy. Thận trọng trong chi tiêu và đầu tư.',
      meaningReversed: 'Có thể quá keo kiệt hoặc lo lắng thái quá về tiền bạc.',
      advice: 'Cân bằng giữa tiết kiệm và đầu tư cho phát triển.'
    },
    {
      cardId: cardIds.fourOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Bảo vệ', 'Giới hạn', 'An toàn', 'Kiểm soát'],
      meaningUpright: 'Thận trọng trong việc xây dựng các mối quan hệ mới. Duy trì ranh giới cá nhân.',
      meaningReversed: 'Có thể quá khép kín hoặc sợ hãi trong việc mở rộng các mối quan hệ.',
      advice: 'Tìm sự cân bằng giữa bảo vệ bản thân và mở lòng với người khác.'
    },
    {
      cardId: cardIds.fourOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Bảo vệ', 'An toàn', 'Tiết kiệm', 'Ổn định'],
      meaningUpright: 'Tập trung vào việc bảo vệ và duy trì sự ổn định của gia đình. Thận trọng trong việc quản lý tài sản gia đình.',
      meaningReversed: 'Có thể quá keo kiệt hoặc thiếu linh hoạt trong việc quản lý gia đình.',
      advice: 'Cân bằng giữa việc bảo vệ và cho phép sự phát triển trong gia đình.'
    },

    // Five of Pentacles
    {
      cardId: cardIds.fiveOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Khó khăn', 'Mất mát', 'Thiếu thốn', 'Hy vọng'],
      meaningUpright: 'Đang trải qua giai đoạn khó khăn trong tình yêu. Cảm giác thiếu thốn về mặt tình cảm.',
      meaningReversed: 'Bắt đầu vượt qua khó khăn hoặc nhận ra giá trị thực sự của mối quan hệ.',
      advice: 'Đừng từ chối sự giúp đỡ và tin tưởng vào khả năng vượt qua khó khăn.'
    },
    {
      cardId: cardIds.fiveOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Khó khăn', 'Thiếu thốn', 'Hỗ trợ', 'Vượt qua'],
      meaningUpright: 'Gia đình đang trải qua giai đoạn khó khăn về vật chất hoặc tinh thần.',
      meaningReversed: 'Bắt đầu nhìn thấy ánh sáng cuối đường hầm hoặc nhận được sự giúp đỡ.',
      advice: 'Đoàn kết và hỗ trợ nhau vượt qua giai đoạn khó khăn.'
    },
    {
      cardId: cardIds.fiveOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Khó khăn', 'Thất nghiệp', 'Bất ổn', 'Cơ hội'],
      meaningUpright: 'Đang gặp khó khăn trong công việc hoặc tài chính. Cảm giác bất an về nghề nghiệp.',
      meaningReversed: 'Bắt đầu tìm thấy cơ hội mới hoặc nhận được sự hỗ trợ trong công việc.',
      advice: 'Tìm kiếm sự giúp đỡ và duy trì niềm tin vào khả năng phục hồi.'
    },
    {
      cardId: cardIds.fiveOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Khó khăn', 'Mất mát', 'Phục hồi', 'Hỗ trợ'],
      meaningUpright: 'Đang trải qua giai đoạn khó khăn về tài chính. Cảm giác thiếu thốn và bất an.',
      meaningReversed: 'Bắt đầu phục hồi tài chính hoặc nhận được sự giúp đỡ về vật chất.',
      advice: 'Tìm kiếm tư vấn tài chính và xây dựng kế hoạch phục hồi.'
    },
    {
      cardId: cardIds.fiveOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Cô lập', 'Khó khăn', 'Hỗ trợ', 'Vượt qua'],
      meaningUpright: 'Cảm thấy bị cô lập hoặc loại trừ khỏi nhóm. Thiếu sự kết nối xã hội.',
      meaningReversed: 'Bắt đầu tái kết nối với người khác hoặc nhận được sự hỗ trợ từ cộng đồng.',
      advice: 'Đừng tự cô lập bản thân và hãy tìm kiếm sự hỗ trợ từ người khác.'
    },
    {
      cardId: cardIds.fiveOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Khó khăn', 'Thiếu thốn', 'Hỗ trợ', 'Vượt qua'],
      meaningUpright: 'Gia đình đang trải qua giai đoạn khó khăn về vật chất hoặc tinh thần. Cần sự đoàn kết.',
      meaningReversed: 'Bắt đầu nhìn thấy hy vọng và nhận được sự giúp đỡ từ người thân.',
      advice: 'Đoàn kết và hỗ trợ nhau vượt qua giai đoạn khó khăn.'
    },

    // Six of Pentacles
    {
      cardId: cardIds.sixOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Cho đi', 'Nhận lại', 'Hào phóng', 'Cân bằng'],
      meaningUpright: 'Sự cho đi và nhận lại trong tình yêu. Mối quan hệ cân bằng và hài hòa.',
      meaningReversed: 'Có thể đang cho đi quá nhiều hoặc nhận lại quá ít. Mối quan hệ thiếu cân bằng.',
      advice: 'Duy trì sự cân bằng giữa cho và nhận trong mối quan hệ.'
    },
    {
      cardId: cardIds.sixOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Chia sẻ', 'Hỗ trợ', 'Trách nhiệm', 'Cân bằng'],
      meaningUpright: 'Sự chia sẻ và hỗ trợ lẫn nhau trong gia đạo. Mọi người đều có trách nhiệm.',
      meaningReversed: 'Có thể có sự phân chia không công bằng trong trách nhiệm gia đình.',
      advice: 'Tạo sự công bằng trong việc phân chia trách nhiệm và nguồn lực.'
    },
    {
      cardId: cardIds.sixOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Hỗ trợ', 'Chia sẻ', 'Công bằng', 'Trách nhiệm'],
      meaningUpright: 'Sự chia sẻ và hỗ trợ lẫn nhau trong gia đình. Mọi người đều được quan tâm.',
      meaningReversed: 'Có thể có sự thiếu công bằng trong việc phân phối nguồn lực gia đình.',
      advice: 'Đảm bảo sự công bằng và quan tâm đến nhu cầu của mọi thành viên.'
    },
    {
      cardId: cardIds.sixOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Công bằng', 'Đãi ngộ', 'Hỗ trợ', 'Chia sẻ'],
      meaningUpright: 'Được đãi ngộ xứng đáng trong công việc. Có cơ hội giúp đỡ người khác.',
      meaningReversed: 'Có thể cảm thấy không được đối xử công bằng hoặc thiếu sự hỗ trợ.',
      advice: 'Tạo môi trường làm việc công bằng và hỗ trợ lẫn nhau.'
    },
    {
      cardId: cardIds.sixOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Cho đi', 'Nhận lại', 'Từ thiện', 'Đầu tư'],
      meaningUpright: 'Có khả năng chia sẻ tài chính. Đầu tư vào các hoạt động từ thiện.',
      meaningReversed: 'Có thể đang cho đi quá nhiều hoặc bị lợi dụng về mặt tài chính.',
      advice: 'Cân nhắc kỹ việc cho đi và đầu tư, đảm bảo sự cân bằng.'
    },
    {
      cardId: cardIds.sixOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Hào phóng', 'Chia sẻ', 'Hỗ trợ', 'Công bằng'],
      meaningUpright: 'Có khả năng giúp đỡ người khác. Xây dựng mối quan hệ dựa trên sự chia sẻ.',
      meaningReversed: 'Có thể đang bị lợi dụng hoặc không nhận được sự đánh giá đúng.',
      advice: 'Duy trì sự cân bằng trong việc cho và nhận trong các mối quan hệ.'
    },

    // Seven of Pentacles
    {
      cardId: cardIds.sevenOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Kiên nhẫn', 'Đánh giá', 'Phát triển', 'Chờ đợi'],
      meaningUpright: 'Thời điểm đánh giá lại mối quan hệ. Kiên nhẫn chờ đợi kết quả.',
      meaningReversed: 'Có thể thiếu kiên nhẫn hoặc thất vọng với tiến triển của mối quan hệ.',
      advice: 'Kiên nhẫn và tin tưởng vào quá trình phát triển của mối quan hệ.'
    },
    {
      cardId: cardIds.sevenOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Đánh giá', 'Kết quả', 'Kiên nhẫn', 'Phát triển'],
      meaningUpright: 'Thời điểm nhìn nhận lại những nỗ lực trong gia đạo. Thấy được kết quả của công sức.',
      meaningReversed: 'Có thể cảm thấy không hài lòng với kết quả đạt được trong gia đình.',
      advice: 'Đánh giá và điều chỉnh kế hoạch phát triển gia đình.'
    },
    {
      cardId: cardIds.sevenOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Kiên nhẫn', 'Kết quả', 'Đánh giá', 'Phát triển'],
      meaningUpright: 'Thời điểm đánh giá sự phát triển của gia đình. Nhìn thấy kết quả của những nỗ lực.',
      meaningReversed: 'Có thể cảm thấy không hài lòng với tiến độ phát triển của gia đình.',
      advice: 'Kiên nhẫn và tiếp tục đầu tư cho sự phát triển của gia đình.'
    },
    {
      cardId: cardIds.sevenOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Đánh giá', 'Kết quả', 'Kiên nhẫn', 'Phát triển'],
      meaningUpright: 'Thời điểm đánh giá lại công việc và thành quả. Chờ đợi kết quả từ những nỗ lực.',
      meaningReversed: 'Có thể thiếu kiên nhẫn hoặc thất vọng với tiến độ công việc.',
      advice: 'Đánh giá kỹ lưỡng và điều chỉnh kế hoạch phát triển nghề nghiệp.'
    },
    {
      cardId: cardIds.sevenOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Đầu tư', 'Kiên nhẫn', 'Kết quả', 'Đánh giá'],
      meaningUpright: 'Thời điểm đánh giá các khoản đầu tư. Kiên nhẫn chờ đợi lợi nhuận.',
      meaningReversed: 'Có thể thiếu kiên nhẫn hoặc thất vọng với kết quả đầu tư.',
      advice: 'Đánh giá lại danh mục đầu tư và điều chỉnh chiến lược tài chính.'
    },
    {
      cardId: cardIds.sevenOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Đánh giá', 'Phát triển', 'Kiên nhẫn', 'Kết quả'],
      meaningUpright: 'Thời điểm đánh giá lại các mối quan hệ xã hội. Nhìn thấy kết quả của việc xây dựng mạng lưới.',
      meaningReversed: 'Có thể cảm thấy không hài lòng với chất lượng các mối quan hệ.',
      advice: 'Kiên nhẫn trong việc xây dựng và duy trì các mối quan hệ có giá trị.'
    },

    // Eight of Pentacles
    {
      cardId: cardIds.eightOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Nỗ lực', 'Cải thiện', 'Phát triển', 'Chuyên tâm'],
      meaningUpright: 'Nỗ lực cải thiện và phát triển mối quan hệ. Chuyên tâm vào việc xây dựng tình yêu.',
      meaningReversed: 'Có thể quá tập trung vào chi tiết mà bỏ qua tổng thể của mối quan hệ.',
      advice: 'Tập trung vào việc cải thiện và phát triển chất lượng mối quan hệ.'
    },
    {
      cardId: cardIds.eightOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Cải thiện', 'Nỗ lực', 'Kỹ năng', 'Phát triển'],
      meaningUpright: 'Nỗ lực cải thiện môi trường gia đạo. Phát triển kỹ năng quản lý gia đình.',
      meaningReversed: 'Có thể đang bỏ qua những khía cạnh quan trọng trong gia đình.',
      advice: 'Tập trung vào việc cải thiện và nâng cao chất lượng cuộc sống gia đình.'
    },
    {
      cardId: cardIds.eightOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Nỗ lực', 'Cải thiện', 'Học hỏi', 'Phát triển'],
      meaningUpright: 'Nỗ lực học hỏi và cải thiện kỹ năng làm cha mẹ. Tập trung vào phát triển gia đình.',
      meaningReversed: 'Có thể quá tập trung vào một khía cạnh mà bỏ qua các nhu cầu khác của gia đình.',
      advice: 'Kiên trì học hỏi và cải thiện kỹ năng quản lý gia đình.'
    },
    {
      cardId: cardIds.eightOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Chuyên môn', 'Nỗ lực', 'Hoàn thiện', 'Phát triển'],
      meaningUpright: 'Tập trung phát triển kỹ năng chuyên môn. Nỗ lực hoàn thiện bản thân trong công việc.',
      meaningReversed: 'Có thể quá cầu toàn hoặc thiếu cân bằng trong công việc.',
      advice: 'Tiếp tục phát triển kỹ năng và nâng cao chuyên môn.'
    },
    {
      cardId: cardIds.eightOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Kỹ năng', 'Đầu tư', 'Học hỏi', 'Phát triển'],
      meaningUpright: 'Tập trung học hỏi về quản lý tài chính. Đầu tư vào việc phát triển kỹ năng.',
      meaningReversed: 'Có thể quá tập trung vào việc kiếm tiền mà bỏ qua các khía cạnh khác.',
      advice: 'Đầu tư thời gian và công sức để phát triển kỹ năng quản lý tài chính.'
    },
    {
      cardId: cardIds.eightOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Kỹ năng', 'Phát triển', 'Học hỏi', 'Hoàn thiện'],
      meaningUpright: 'Tập trung phát triển kỹ năng giao tiếp và xây dựng mối quan hệ.',
      meaningReversed: 'Có thể quá tập trung vào việc hoàn thiện mà thiếu tự nhiên trong giao tiếp.',
      advice: 'Kiên trì học hỏi và phát triển kỹ năng xã hội.'
    },

    // Nine of Pentacles
    {
      cardId: cardIds.nineOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Độc lập', 'Tự chủ', 'Thành công', 'Sung túc'],
      meaningUpright: 'Có khả năng duy trì sự độc lập trong tình yêu. Tự tin và biết giá trị bản thân.',
      meaningReversed: 'Có thể quá độc lập hoặc khó khăn trong việc chia sẻ cuộc sống với người khác.',
      advice: 'Duy trì sự độc lập nhưng vẫn mở lòng cho tình yêu và sự gắn kết.'
    },
    {
      cardId: cardIds.nineOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Thành tựu', 'Sung túc', 'Tự chủ', 'An nhàn'],
      meaningUpright: 'Đạt được sự ổn định và sung túc trong gia đạo. Tận hưởng thành quả của những nỗ lực.',
      meaningReversed: 'Có thể đang quá chú trọng vào vật chất mà bỏ qua giá trị tinh thần.',
      advice: 'Tận hưởng thành quả nhưng đừng quên vun đắp các mối quan hệ gia đình.'
    },
    {
      cardId: cardIds.nineOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Thịnh vượng', 'An nhàn', 'Tự chủ', 'Hài lòng'],
      meaningUpright: 'Gia đình đạt được sự thịnh vượng và ổn định. Tận hưởng cuộc sống gia đình hạnh phúc.',
      meaningReversed: 'Có thể đang thiếu sự cân bằng giữa công việc và gia đình.',
      advice: 'Duy trì sự cân bằng giữa phát triển cá nhân và trách nhiệm gia đình.'
    },
    {
      cardId: cardIds.nineOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Bền vững', 'Di sản', 'Ổn định'],
      meaningUpright: 'Đạt được thành công lâu dài trong sự nghiệp. Tạo dựng được sự nghiệp vững chắc.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc duy trì thành công hoặc chuyển giao công việc.',
      advice: 'Xây dựng sự nghiệp với tầm nhìn dài hạn và tính kế thừa.'
    },
    {
      cardId: cardIds.nineOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Thịnh vượng', 'Độc lập', 'An toàn', 'Sung túc'],
      meaningUpright: 'Đạt được sự độc lập và an toàn về tài chính. Tận hưởng thành quả của sự đầu tư.',
      meaningReversed: 'Có thể đang quá phụ thuộc vào vật chất hoặc thiếu kế hoạch dài hạn.',
      advice: 'Duy trì và phát triển sự độc lập tài chính một cách bền vững.'
    },
    {
      cardId: cardIds.nineOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Tự tin', 'Độc lập', 'Thành đạt', 'Uy tín'],
      meaningUpright: 'Được tôn trọng trong các mối quan hệ xã hội. Có vị thế và ảnh hưởng tích cực.',
      meaningReversed: 'Có thể đang tự cô lập hoặc tạo khoảng cách với người khác.',
      advice: 'Sử dụng vị thế và ảnh hưởng để tạo tác động tích cực trong cộng đồng.'
    },

    // Ten of Pentacles
    {
      cardId: cardIds.tenOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Bền vững', 'Ổn định', 'Di sản', 'Cam kết'],
      meaningUpright: 'Mối quan hệ bền vững, có tiềm năng phát triển lâu dài. Tình yêu được gia đình ủng hộ.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc dung hòa tình yêu và trách nhiệm gia đình.',
      advice: 'Xây dựng mối quan hệ với tầm nhìn lâu dài và sự ủng hộ từ gia đình.'
    },
    {
      cardId: cardIds.tenOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Thịnh vượng', 'Di sản', 'Truyền thống', 'Ổn định'],
      meaningUpright: 'Gia đạo thịnh vượng, ổn định. Xây dựng được di sản cho thế hệ sau.',
      meaningReversed: 'Có thể đang có xung đột về tài sản hoặc truyền thống gia đình.',
      advice: 'Duy trì và phát triển di sản gia đình một cách bền vững.'
    },
    {
      cardId: cardIds.tenOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Di sản', 'Thịnh vượng', 'Truyền thống', 'Bền vững'],
      meaningUpright: 'Gia đình đạt được sự thịnh vượng và ổn định lâu dài. Tạo dựng di sản cho con cháu.',
      meaningReversed: 'Có thể đang có mâu thuẫn về việc quản lý tài sản hoặc duy trì truyền thống.',
      advice: 'Xây dựng nền tảng vững chắc cho thế hệ tương lai.'
    },
    {
      cardId: cardIds.tenOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Bền vững', 'Di sản', 'Ổn định'],
      meaningUpright: 'Đạt được thành công lâu dài trong sự nghiệp. Tạo dựng được sự nghiệp vững chắc.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc duy trì thành công hoặc chuyển giao công việc.',
      advice: 'Xây dựng sự nghiệp với tầm nhìn dài hạn và tính kế thừa.'
    },
    {
      cardId: cardIds.tenOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Thịnh vượng', 'Di sản', 'Đầu tư', 'Bền vững'],
      meaningUpright: 'Đạt được sự thịnh vượng và an toàn tài chính lâu dài. Tạo dựng được tài sản bền vững.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc quản lý tài sản hoặc kế hoạch kế thừa.',
      advice: 'Lập kế hoạch tài chính dài hạn và chuẩn bị cho thế hệ sau.'
    },
    {
      cardId: cardIds.tenOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Uy tín', 'Địa vị', 'Di sản', 'Bền vững'],
      meaningUpright: 'Xây dựng được mạng lưới quan hệ bền vững. Có uy tín và địa vị trong cộng đồng.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc duy trì các mối quan hệ lâu dài.',
      advice: 'Xây dựng và duy trì các mối quan hệ có giá trị lâu dài.'
    },

    // Page of Pentacles
    {
      cardId: cardIds.pageOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Học hỏi', 'Khám phá', 'Thực tế', 'Mới mẻ'],
      meaningUpright: 'Khám phá và học hỏi về tình yêu. Tiếp cận mối quan hệ với thái độ nghiêm túc và thực tế.',
      meaningReversed: 'Có thể thiếu kinh nghiệm hoặc quá ngây thơ trong tình yêu.',
      advice: 'Mở lòng học hỏi và trải nghiệm, nhưng vẫn giữ thái độ thực tế.'
    },
    {
      cardId: cardIds.pageOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Học hỏi', 'Trách nhiệm', 'Phát triển', 'Mới mẻ'],
      meaningUpright: 'Sẵn sàng học hỏi về trách nhiệm gia đình. Tiếp cận vai trò mới với sự nghiêm túc.',
      meaningReversed: 'Có thể chưa sẵn sàng cho trách nhiệm hoặc thiếu kinh nghiệm.',
      advice: 'Kiên nhẫn học hỏi và phát triển kỹ năng quản lý gia đình.'
    },
    {
      cardId: cardIds.pageOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Học hỏi', 'Trách nhiệm', 'Khám phá', 'Phát triển'],
      meaningUpright: 'Sẵn sàng học hỏi về vai trò mới trong gia đình. Tiếp cận trách nhiệm với sự nghiêm túc.',
      meaningReversed: 'Có thể cảm thấy chưa đủ kinh nghiệm hoặc thiếu tự tin trong vai trò gia đình.',
      advice: 'Tích cực học hỏi và phát triển kỹ năng làm cha mẹ hoặc vai trò gia đình.'
    },
    {
      cardId: cardIds.pageOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Học hỏi', 'Cơ hội', 'Phát triển', 'Mới mẻ'],
      meaningUpright: 'Cơ hội học hỏi và phát triển trong công việc. Tiếp cận nhiệm vụ mới với sự nhiệt tình.',
      meaningReversed: 'Có thể thiếu kinh nghiệm hoặc chưa sẵn sàng cho thách thức mới.',
      advice: 'Tận dụng cơ hội học hỏi và phát triển kỹ năng chuyên môn.'
    },
    {
      cardId: cardIds.pageOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Học hỏi', 'Kế hoạch', 'Thận trọng', 'Phát triển'],
      meaningUpright: 'Học hỏi về quản lý tài chính. Tiếp cận đầu tư với thái độ thận trọng và nghiêm túc.',
      meaningReversed: 'Có thể thiếu kinh nghiệm hoặc quá thận trọng trong quyết định tài chính.',
      advice: 'Học hỏi về đầu tư và quản lý tài chính một cách có hệ thống.'
    },
    {
      cardId: cardIds.pageOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Học hỏi', 'Kết nối', 'Phát triển', 'Mới mẻ'],
      meaningUpright: 'Sẵn sàng học hỏi và phát triển kỹ năng xã hội. Tiếp cận các mối quan hệ mới.',
      meaningReversed: 'Có thể thiếu kinh nghiệm hoặc ngại ngùng trong giao tiếp xã hội.',
      advice: 'Tích cực học hỏi và phát triển kỹ năng giao tiếp xã hội.'
    },

    // Knight of Pentacles
    {
      cardId: cardIds.knightOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Kiên định', 'Đáng tin cậy', 'Chậm rãi', 'Cam kết'],
      meaningUpright: 'Mối quan hệ phát triển chậm nhưng chắc chắn. Đối tác đáng tin cậy và nghiêm túc.',
      meaningReversed: 'Có thể quá chậm chạp hoặc thiếu sự lãng mạn trong tình yêu.',
      advice: 'Xây dựng mối quan hệ trên nền tảng tin cậy và cam kết lâu dài.'
    },
    {
      cardId: cardIds.knightOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Trách nhiệm', 'Đáng tin cậy', 'Ổn định', 'Kiên định'],
      meaningUpright: 'Thực hiện trách nhiệm gia đình một cách đáng tin cậy. Tạo dựng sự ổn định.',
      meaningReversed: 'Có thể quá cứng nhắc hoặc thiếu linh hoạt trong việc quản lý gia đình.',
      advice: 'Duy trì sự ổn định nhưng cũng cần linh hoạt khi cần thiết.'
    },
    {
      cardId: cardIds.knightOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Trách nhiệm', 'Kiên định', 'Bảo vệ', 'Ổn định'],
      meaningUpright: 'Là người bảo vệ và chăm sóc gia đình đáng tin cậy. Tạo dựng môi trường ổn định.',
      meaningReversed: 'Có thể quá nghiêm khắc hoặc thiếu sự linh hoạt trong vai trò gia đình.',
      advice: 'Cân bằng giữa việc duy trì ổn định và tạo không gian cho sự phát triển.'
    },
    {
      cardId: cardIds.knightOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Chăm chỉ', 'Đáng tin cậy', 'Kiên trì', 'Ổn định'],
      meaningUpright: 'Làm việc chăm chỉ và đáng tin cậy. Tiến bộ chậm nhưng chắc chắn trong sự nghiệp.',
      meaningReversed: 'Có thể quá cầu toàn hoặc thiếu sáng tạo trong công việc.',
      advice: 'Duy trì sự chăm chỉ nhưng cũng cần mở rộng tầm nhìn và sáng tạo.'
    },
    {
      cardId: cardIds.knightOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Thận trọng', 'Ổn định', 'Kế hoạch', 'Kiên định'],
      meaningUpright: 'Quản lý tài chính thận trọng và có kế hoạch. Đầu tư ổn định và dài hạn.',
      meaningReversed: 'Có thể quá bảo thủ hoặc bỏ lỡ cơ hội đầu tư.',
      advice: 'Duy trì chiến lược đầu tư ổn định nhưng vẫn cởi mở với cơ hội mới.'
    },
    {
      cardId: cardIds.knightOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Đáng tin cậy', 'Kiên định', 'Trách nhiệm', 'Ổn định'],
      meaningUpright: 'Là người bạn đáng tin cậy và có trách nhiệm. Xây dựng các mối quan hệ bền vững.',
      meaningReversed: 'Có thể quá nghiêm túc hoặc thiếu linh hoạt trong giao tiếp xã hội.',
      advice: 'Duy trì sự đáng tin cậy nhưng cũng cần thêm sự thoải mái trong giao tiếp.'
    },

    // Queen of Pentacles
    {
      cardId: cardIds.queenOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Nuôi dưỡng', 'Thực tế', 'Chu đáo', 'Ổn định'],
      meaningUpright: 'Mang đến sự ấm áp và ổn định trong tình yêu. Chăm sóc và nuôi dưỡng mối quan hệ.',
      meaningReversed: 'Có thể quá bận rộn với công việc hoặc thiếu thời gian cho tình yêu.',
      advice: 'Cân bằng giữa việc chăm sóc người khác và chăm sóc bản thân.'
    },
    {
      cardId: cardIds.queenOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Chăm sóc', 'Quản lý', 'Thịnh vượng', 'Ổn định'],
      meaningUpright: 'Quản lý gia đình khéo léo và hiệu quả. Tạo dựng môi trường ấm áp và thịnh vượng.',
      meaningReversed: 'Có thể quá tập trung vào vật chất hoặc kiệt sức vì chăm sóc người khác.',
      advice: 'Duy trì sự cân bằng giữa chăm sóc gia đình và chăm sóc bản thân.'
    },
    {
      cardId: cardIds.queenOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Nuôi dưỡng', 'Bảo vệ', 'Thịnh vượng', 'Chu đáo'],
      meaningUpright: 'Là người chăm sóc gia đình tận tụy. Tạo dựng môi trường gia đình ấm áp và thịnh vượng.',
      meaningReversed: 'Có thể đang kiệt sức vì quá tập trung chăm sóc người khác.',
      advice: 'Cân bằng giữa việc chăm sóc gia đình và dành thời gian cho bản thân.'
    },
    {
      cardId: cardIds.queenOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Thực tế', 'Hiệu quả', 'Quản lý', 'Thành công'],
      meaningUpright: 'Quản lý công việc hiệu quả và thực tế. Tạo môi trường làm việc tích cực.',
      meaningReversed: 'Có thể quá tập trung vào công việc mà bỏ qua các khía cạnh khác của cuộc sống.',
      advice: 'Duy trì hiệu quả công việc nhưng không quên cân bằng cuộc sống.'
    },
    {
      cardId: cardIds.queenOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Quản lý', 'Thịnh vượng', 'Thực tế', 'Đầu tư'],
      meaningUpright: 'Quản lý tài chính khéo léo và hiệu quả. Tạo dựng sự thịnh vượng bền vững.',
      meaningReversed: 'Có thể quá lo lắng về tiền bạc hoặc thiếu kế hoạch dài hạn.',
      advice: 'Tiếp tục quản lý tài chính hiệu quả và đầu tư cho tương lai.'
    },
    {
      cardId: cardIds.queenOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Hào phóng', 'Chu đáo', 'Thực tế', 'Đáng tin cậy'],
      meaningUpright: 'Là người bạn đáng tin cậy và chu đáo. Tạo dựng các mối quan hệ có giá trị.',
      meaningReversed: 'Có thể quá bận rộn để duy trì các mối quan hệ xã hội.',
      advice: 'Duy trì sự quan tâm và hỗ trợ người khác một cách cân bằng.'
    },

    // King of Pentacles
    {
      cardId: cardIds.kingOfPentacles,
      contextId: contextIds.tinhYeu,
      keywords: ['Ổn định', 'Đáng tin cậy', 'Bảo vệ', 'Thành đạt'],
      meaningUpright: 'Mang đến sự ổn định và an toàn trong tình yêu. Là người bạn đời đáng tin cậy.',
      meaningReversed: 'Có thể quá chú trọng vào vật chất hoặc kiểm soát trong mối quan hệ.',
      advice: 'Cân bằng giữa việc cung cấp sự ổn định và tôn trọng sự độc lập của đối phương.'
    },
    {
      cardId: cardIds.kingOfPentacles,
      contextId: contextIds.giaDao,
      keywords: ['Lãnh đạo', 'Thịnh vượng', 'Bảo vệ', 'Ổn định'],
      meaningUpright: 'Là người đứng đầu gia đình đáng tin cậy. Tạo dựng sự thịnh vượng và ổn định.',
      meaningReversed: 'Có thể quá độc đoán hoặc áp đặt trong việc quản lý gia đình.',
      advice: 'Duy trì vai trò lãnh đạo nhưng cần lắng nghe ý kiến của các thành viên.'
    },
    {
      cardId: cardIds.kingOfPentacles,
      contextId: contextIds.giaDinh,
      keywords: ['Bảo vệ', 'Thịnh vượng', 'Lãnh đạo', 'Ổn định'],
      meaningUpright: 'Là trụ cột vững chắc của gia đình. Tạo dựng môi trường an toàn và thịnh vượng.',
      meaningReversed: 'Có thể quá cứng nhắc hoặc thiếu sự linh hoạt trong vai trò gia đình.',
      advice: 'Duy trì sự ổn định nhưng cũng cần thích ứng với nhu cầu thay đổi của gia đình.'
    },
    {
      cardId: cardIds.kingOfPentacles,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Lãnh đạo', 'Thực tế', 'Uy tín'],
      meaningUpright: 'Là người lãnh đạo tài ba và đáng tin cậy. Đạt được thành công và uy tín trong công việc.',
      meaningReversed: 'Có thể quá bảo thủ hoặc thiếu sự đổi mới trong quản lý.',
      advice: 'Duy trì phong cách lãnh đạo ổn định nhưng cởi mở với ý tưởng mới.'
    },
    {
      cardId: cardIds.kingOfPentacles,
      contextId: contextIds.taiChinh,
      keywords: ['Thịnh vượng', 'Quản lý', 'Đầu tư', 'Ổn định'],
      meaningUpright: 'Quản lý tài chính xuất sắc. Đạt được sự thịnh vượng và ổn định lâu dài.',
      meaningReversed: 'Có thể quá tham vọng hoặc thiếu sự cân nhắc trong đầu tư.',
      advice: 'Tiếp tục quản lý tài chính thận trọng và đầu tư dài hạn.'
    },
    {
      cardId: cardIds.kingOfPentacles,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Uy tín', 'Đáng tin cậy', 'Hỗ trợ', 'Thành đạt'],
      meaningUpright: 'Là người có uy tín và ảnh hưởng trong xã hội. Sẵn sàng hỗ trợ người khác.',
      meaningReversed: 'Có thể quá chú trọng vào địa vị hoặc quyền lực trong các mối quan hệ.',
      advice: 'Sử dụng ảnh hưởng và nguồn lực để tạo tác động tích cực trong cộng đồng.'
    }
  ];
}; 