import { CardContextData, RelatedIds } from './types';

export const generateCupsContexts = (relatedIds: RelatedIds): CardContextData[] => {
  const { cardIds, contextIds } = relatedIds;

  return [
    // Ace of Cups
    {
      cardId: cardIds.aceOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Tình yêu mới', 'Cảm xúc sâu sắc', 'Hạnh phúc', 'Khởi đầu'],
      meaningUpright: 'Bắt đầu một mối quan hệ tình cảm mới đầy hứa hẹn. Tình yêu thuần khiết.',
      meaningReversed: 'Có thể đang kìm nén cảm xúc hoặc sợ hãi tình yêu mới.',
      advice: 'Mở lòng đón nhận tình yêu mới và thể hiện cảm xúc chân thành.'
    },
    {
      cardId: cardIds.aceOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Hạnh phúc', 'Hòa thuận', 'Cảm xúc tích cực', 'Mới mẻ'],
      meaningUpright: 'Không khí gia đình tràn đầy tình yêu thương và sự hòa thuận.',
      meaningReversed: 'Có thể đang thiếu kết nối cảm xúc trong gia đình.',
      advice: 'Tạo không gian cho tình cảm và sự gắn kết trong gia đình.'
    },
    {
      cardId: cardIds.aceOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Tin vui', 'Hạnh phúc', 'Khởi đầu', 'Tình thương'],
      meaningUpright: 'Tin vui trong gia đình, có thể là thành viên mới hoặc sự kiện vui.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc thể hiện tình cảm với người thân.',
      advice: 'Chia sẻ tình cảm và tạo những khoảnh khắc đáng nhớ cùng gia đình.'
    },
    {
      cardId: cardIds.aceOfCups,
      contextId: contextIds.congViec,
      keywords: ['Sáng tạo', 'Cảm hứng', 'Cơ hội', 'Đam mê'],
      meaningUpright: 'Khởi đầu mới đầy cảm hứng trong công việc. Tìm thấy niềm đam mê.',
      meaningReversed: 'Có thể đang thiếu động lực hoặc cảm hứng trong công việc.',
      advice: 'Tìm kiếm và nuôi dưỡng đam mê trong công việc.'
    },
    {
      cardId: cardIds.aceOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Cơ hội', 'May mắn', 'Trực giác', 'Thịnh vượng'],
      meaningUpright: 'Cơ hội tài chính mới đầy hứa hẹn. Trực giác tốt về đầu tư.',
      meaningReversed: 'Có thể bỏ lỡ cơ hội do thiếu tin tưởng vào trực giác.',
      advice: 'Lắng nghe trực giác và nắm bắt cơ hội tài chính khi có thể.'
    },
    {
      cardId: cardIds.aceOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Kết nối mới', 'Tình bạn', 'Cởi mở', 'Chân thành'],
      meaningUpright: 'Tạo lập những mối quan hệ mới đầy ý nghĩa và tình cảm.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc mở lòng với người khác.',
      advice: 'Mở lòng đón nhận tình bạn mới và thể hiện sự chân thành.'
    },

    // Two of Cups
    {
      cardId: cardIds.twoOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Hợp nhất', 'Kết nối', 'Cam kết', 'Hòa hợp'],
      meaningUpright: 'Mối quan hệ tình cảm sâu sắc và hòa hợp. Tình yêu đôi lứa.',
      meaningReversed: 'Có thể đang gặp vấn đề về giao tiếp hoặc thiếu kết nối.',
      advice: 'Nuôi dưỡng sự kết nối và thấu hiểu trong mối quan hệ.'
    },
    {
      cardId: cardIds.twoOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Hòa hợp', 'Thấu hiểu', 'Gắn kết', 'Chia sẻ'],
      meaningUpright: 'Mối quan hệ gia đình hòa thuận và gắn bó. Sự thấu hiểu lẫn nhau.',
      meaningReversed: 'Có thể đang có sự bất đồng hoặc thiếu sự thấu hiểu.',
      advice: 'Tăng cường đối thoại và chia sẻ để xây dựng sự gắn kết.'
    },
    {
      cardId: cardIds.twoOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Hòa thuận', 'Thấu hiểu', 'Tương trợ', 'Gần gũi'],
      meaningUpright: 'Mối quan hệ gia đình được cải thiện. Sự hòa thuận và gần gũi.',
      meaningReversed: 'Có thể đang có khoảng cách hoặc thiếu sự thấu hiểu.',
      advice: 'Dành thời gian để hiểu và chia sẻ với các thành viên trong gia đình.'
    },
    {
      cardId: cardIds.twoOfCups,
      contextId: contextIds.congViec,
      keywords: ['Hợp tác', 'Đồng đội', 'Thấu hiểu', 'Hài hòa'],
      meaningUpright: 'Mối quan hệ công việc tốt đẹp. Hợp tác hiệu quả với đồng nghiệp.',
      meaningReversed: 'Có thể đang gặp khó khăn trong hợp tác hoặc giao tiếp.',
      advice: 'Xây dựng mối quan hệ tốt với đồng nghiệp và đối tác.'
    },
    {
      cardId: cardIds.twoOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Hợp tác', 'Thỏa thuận', 'Cân bằng', 'Tin tưởng'],
      meaningUpright: 'Cơ hội hợp tác tài chính tốt đẹp. Thỏa thuận hai bên cùng có lợi.',
      meaningReversed: 'Có thể gặp khó khăn trong việc đạt được thỏa thuận.',
      advice: 'Tìm kiếm cơ hội hợp tác và xây dựng lòng tin trong kinh doanh.'
    },
    {
      cardId: cardIds.twoOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Kết nối', 'Tình bạn', 'Hòa hợp', 'Thấu hiểu'],
      meaningUpright: 'Tạo lập được mối quan hệ xã hội tốt đẹp và có ý nghĩa.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc duy trì các mối quan hệ.',
      advice: 'Nuôi dưỡng tình bạn và xây dựng mối quan hệ dựa trên sự thấu hiểu.'
    },

    // Three of Cups
    {
      cardId: cardIds.threeOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Vui vẻ', 'Kỷ niệm', 'Chia sẻ', 'Hạnh phúc'],
      meaningUpright: 'Thời điểm vui vẻ và hạnh phúc trong tình yêu. Chia sẻ niềm vui.',
      meaningReversed: 'Có thể đang thiếu sự vui vẻ hoặc quá chú trọng vào các mối quan hệ khác.',
      advice: 'Tận hưởng những khoảnh khắc vui vẻ và hạnh phúc bên nhau.'
    },
    {
      cardId: cardIds.threeOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Kỷ niệm', 'Hội họp', 'Niềm vui', 'Đoàn tụ'],
      meaningUpright: 'Thời điểm đoàn tụ và kỷ niệm trong gia đình. Không khí vui vẻ.',
      meaningReversed: 'Có thể đang thiếu sự gắn kết hoặc cơ hội sum họp.',
      advice: 'Tạo cơ hội để gia đình sum họp và chia sẻ niềm vui.'
    },
    {
      cardId: cardIds.threeOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Sum họp', 'Kỷ niệm', 'Hạnh phúc', 'Chia sẻ'],
      meaningUpright: 'Thời điểm sum họp gia đình đầy ý nghĩa. Niềm vui được chia sẻ.',
      meaningReversed: 'Có thể đang thiếu sự gắn kết hoặc khó khăn trong việc tổ chức sum họp.',
      advice: 'Tận dụng cơ hội để tổ chức các buổi sum họp gia đình.'
    },
    {
      cardId: cardIds.threeOfCups,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Kỷ niệm', 'Hợp tác', 'Vui vẻ'],
      meaningUpright: 'Thời điểm kỷ niệm thành công trong công việc. Hợp tác hiệu quả.',
      meaningReversed: 'Có thể đang quá chú trọng vào việc vui chơi hơn công việc.',
      advice: 'Tận hưởng thành công nhưng vẫn duy trì sự chuyên nghiệp.'
    },
    {
      cardId: cardIds.threeOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Thành công', 'Chia sẻ', 'Thịnh vượng', 'Hợp tác'],
      meaningUpright: 'Thời điểm thành công về tài chính. Chia sẻ thành quả với người khác.',
      meaningReversed: 'Có thể đang chi tiêu quá mức hoặc thiếu kế hoạch tài chính.',
      advice: 'Tận hưởng thành công tài chính nhưng vẫn duy trì sự thận trọng.'
    },
    {
      cardId: cardIds.threeOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Kỷ niệm', 'Tình bạn', 'Vui vẻ', 'Chia sẻ'],
      meaningUpright: 'Thời điểm vui vẻ với bạn bè. Các mối quan hệ xã hội phát triển tốt.',
      meaningReversed: 'Có thể đang quá chú trọng vào việc vui chơi hơn các trách nhiệm khác.',
      advice: 'Tận hưởng thời gian bên bạn bè nhưng vẫn giữ sự cân bằng.'
    },

    // Four of Cups
    {
      cardId: cardIds.fourOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Thờ ơ', 'Chán nản', 'Bỏ lỡ', 'Tự thu mình'],
      meaningUpright: 'Cảm thấy không hài lòng hoặc thờ ơ với tình yêu hiện tại.',
      meaningReversed: 'Bắt đầu nhận ra giá trị của mối quan hệ và mở lòng hơn.',
      advice: 'Đánh giá lại cảm xúc và tìm cách làm mới tình yêu.'
    },
    {
      cardId: cardIds.fourOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Không hài lòng', 'Thờ ơ', 'Thiếu kết nối', 'Tự thu mình'],
      meaningUpright: 'Cảm thấy không hài lòng với môi trường gia đình hiện tại.',
      meaningReversed: 'Bắt đầu nhận ra giá trị của gia đình và muốn kết nối lại.',
      advice: 'Tìm cách tái kết nối và đánh giá lại các mối quan hệ gia đình.'
    },
    {
      cardId: cardIds.fourOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Xa cách', 'Thờ ơ', 'Thiếu quan tâm', 'Tự thu mình'],
      meaningUpright: 'Cảm thấy xa cách với các thành viên trong gia đình.',
      meaningReversed: 'Bắt đầu nhận ra tầm quan trọng của tình thân và muốn thay đổi.',
      advice: 'Dành thời gian để tái kết nối với gia đình và thể hiện sự quan tâm.'
    },
    {
      cardId: cardIds.fourOfCups,
      contextId: contextIds.congViec,
      keywords: ['Chán nản', 'Thiếu động lực', 'Bỏ lỡ', 'Không hài lòng'],
      meaningUpright: 'Cảm thấy chán nản và thiếu động lực trong công việc.',
      meaningReversed: 'Bắt đầu nhận ra các cơ hội và có động lực trở lại.',
      advice: 'Tìm kiếm nguồn cảm hứng mới và đánh giá lại mục tiêu nghề nghiệp.'
    },
    {
      cardId: cardIds.fourOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Thờ ơ', 'Bỏ lỡ', 'Thiếu quan tâm', 'Không hài lòng'],
      meaningUpright: 'Thờ ơ với các cơ hội tài chính hoặc không hài lòng với tình hình hiện tại.',
      meaningReversed: 'Bắt đầu nhận ra và nắm bắt các cơ hội tài chính.',
      advice: 'Mở rộng tầm nhìn và đánh giá kỹ các cơ hội đang có.'
    },
    {
      cardId: cardIds.fourOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Thu mình', 'Xa lánh', 'Thờ ơ', 'Không hứng thú'],
      meaningUpright: 'Cảm thấy không hứng thú với các mối quan hệ xã hội.',
      meaningReversed: 'Bắt đầu mở lòng và muốn tái kết nối với mọi người.',
      advice: 'Cân nhắc việc tham gia các hoạt động xã hội và mở rộng mối quan hệ.'
    },

    // Five of Cups
    {
      cardId: cardIds.fiveOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Mất mát', 'Tiếc nuối', 'Đau buồn', 'Thất vọng'],
      meaningUpright: 'Cảm thấy đau buồn và tiếc nuối về một mối quan hệ đã mất.',
      meaningReversed: 'Bắt đầu chấp nhận và vượt qua nỗi đau, sẵn sàng cho khởi đầu mới.',
      advice: 'Cho phép bản thân đau buồn nhưng đừng quên những điều tốt đẹp còn lại.'
    },
    {
      cardId: cardIds.fiveOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Mất mát', 'Buồn bã', 'Thất vọng', 'Hối tiếc'],
      meaningUpright: 'Đối mặt với mất mát hoặc thất vọng trong gia đình.',
      meaningReversed: 'Bắt đầu hàn gắn và vượt qua những tổn thương gia đình.',
      advice: 'Tập trung vào việc hàn gắn và xây dựng lại mối quan hệ gia đình.'
    },
    {
      cardId: cardIds.fiveOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Đau buồn', 'Mất mát', 'Chia ly', 'Hối tiếc'],
      meaningUpright: 'Trải qua giai đoạn buồn bã do mất mát trong gia đình.',
      meaningReversed: 'Dần vượt qua nỗi buồn và tìm thấy hy vọng mới.',
      advice: 'Chia sẻ nỗi buồn với người thân và cùng nhau vượt qua.'
    },
    {
      cardId: cardIds.fiveOfCups,
      contextId: contextIds.congViec,
      keywords: ['Thất bại', 'Thất vọng', 'Mất mát', 'Tiếc nuối'],
      meaningUpright: 'Đối mặt với thất bại hoặc mất mát trong công việc.',
      meaningReversed: 'Bắt đầu nhìn thấy cơ hội mới từ những thất bại.',
      advice: 'Rút kinh nghiệm từ thất bại và tập trung vào các cơ hội mới.'
    },
    {
      cardId: cardIds.fiveOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Tổn thất', 'Mất mát', 'Thất vọng', 'Hối tiếc'],
      meaningUpright: 'Trải qua tổn thất tài chính hoặc đầu tư thất bại.',
      meaningReversed: 'Bắt đầu phục hồi và học hỏi từ những sai lầm tài chính.',
      advice: 'Đánh giá lại chiến lược tài chính và tìm cách khắc phục tổn thất.'
    },
    {
      cardId: cardIds.fiveOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Mất mát', 'Thất vọng', 'Cô lập', 'Buồn bã'],
      meaningUpright: 'Cảm thấy thất vọng về các mối quan hệ xã hội.',
      meaningReversed: 'Dần vượt qua nỗi buồn và sẵn sàng kết nối lại.',
      advice: 'Tập trung vào những mối quan hệ tích cực và mở lòng với tình bạn mới.'
    },

    // Six of Cups
    {
      cardId: cardIds.sixOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Hoài niệm', 'Ngây thơ', 'Kỷ niệm', 'Tình cảm thuần khiết'],
      meaningUpright: 'Nhớ về kỷ niệm đẹp trong tình yêu hoặc gặp lại tình cũ.',
      meaningReversed: 'Cần thoát khỏi quá khứ để tiến tới tương lai.',
      advice: 'Giữ lấy những kỷ niệm đẹp nhưng đừng để chúng cản trở hiện tại.'
    },
    {
      cardId: cardIds.sixOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Hoài niệm', 'Kỷ niệm', 'Hạnh phúc', 'Gia đình'],
      meaningUpright: 'Nhớ về những kỷ niệm đẹp trong gia đình, thời thơ ấu.',
      meaningReversed: 'Có thể đang quá bám víu vào quá khứ.',
      advice: 'Tạo thêm những kỷ niệm mới đẹp đẽ cho gia đình.'
    },
    {
      cardId: cardIds.sixOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Kỷ niệm', 'Tuổi thơ', 'Tình thương', 'Hạnh phúc'],
      meaningUpright: 'Thời điểm hạnh phúc, ấm áp trong gia đình.',
      meaningReversed: 'Có thể đang sống trong hoài niệm quá nhiều.',
      advice: 'Kết hợp giữa truyền thống và hiện đại trong cuộc sống gia đình.'
    },
    {
      cardId: cardIds.sixOfCups,
      contextId: contextIds.congViec,
      keywords: ['Sáng tạo', 'Vui vẻ', 'Hoài niệm', 'Học hỏi'],
      meaningUpright: 'Tìm lại niềm vui và sự sáng tạo trong công việc.',
      meaningReversed: 'Cần đổi mới và không nên bám víu vào cách làm cũ.',
      advice: 'Kết hợp kinh nghiệm quá khứ với ý tưởng mới trong công việc.'
    },
    {
      cardId: cardIds.sixOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Quà tặng', 'Hỗ trợ', 'Thừa kế', 'Chia sẻ'],
      meaningUpright: 'Nhận được sự hỗ trợ tài chính hoặc quà tặng từ quá khứ.',
      meaningReversed: 'Cần độc lập hơn về tài chính, không nên phụ thuộc.',
      advice: 'Biết ơn sự hỗ trợ nhưng cần xây dựng nền tảng tài chính riêng.'
    },
    {
      cardId: cardIds.sixOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Tình bạn cũ', 'Kỷ niệm', 'Gặp lại', 'Hoài niệm'],
      meaningUpright: 'Gặp lại bạn cũ hoặc ôn lại kỷ niệm xưa.',
      meaningReversed: 'Cần mở lòng với những mối quan hệ mới.',
      advice: 'Duy trì tình bạn cũ nhưng đừng quên tạo thêm kết nối mới.'
    },

    // Seven of Cups
    {
      cardId: cardIds.sevenOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Ảo tưởng', 'Lựa chọn', 'Mơ mộng', 'Không thực tế'],
      meaningUpright: 'Có nhiều lựa chọn trong tình yêu nhưng dễ bị ảo tưởng.',
      meaningReversed: 'Bắt đầu nhìn nhận thực tế và đưa ra quyết định rõ ràng.',
      advice: 'Cần phân biệt giữa tình yêu thực tế và ảo tưởng.'
    },
    {
      cardId: cardIds.sevenOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Mơ mộng', 'Không thực tế', 'Nhiều lựa chọn', 'Phân vân'],
      meaningUpright: 'Có nhiều kế hoạch cho gia đình nhưng chưa thực tế.',
      meaningReversed: 'Bắt đầu tập trung vào những mục tiêu thực tế cho gia đình.',
      advice: 'Cần đặt ra những mục tiêu rõ ràng và khả thi cho gia đình.'
    },
    {
      cardId: cardIds.sevenOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Lựa chọn', 'Mơ ước', 'Không tập trung', 'Phân vân'],
      meaningUpright: 'Có nhiều ý tưởng cho gia đình nhưng khó quyết định.',
      meaningReversed: 'Bắt đầu tập trung vào những điều quan trọng nhất.',
      advice: 'Thảo luận với gia đình để đưa ra quyết định phù hợp nhất.'
    },
    {
      cardId: cardIds.sevenOfCups,
      contextId: contextIds.congViec,
      keywords: ['Nhiều lựa chọn', 'Mơ mộng', 'Thiếu tập trung', 'Ảo tưởng'],
      meaningUpright: 'Có nhiều cơ hội nghề nghiệp nhưng thiếu tập trung.',
      meaningReversed: 'Bắt đầu nhìn nhận thực tế và lựa chọn hướng đi phù hợp.',
      advice: 'Cần đánh giá kỹ các lựa chọn và tập trung vào mục tiêu chính.'
    },
    {
      cardId: cardIds.sevenOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Đầu tư', 'Rủi ro', 'Ảo tưởng', 'Nhiều lựa chọn'],
      meaningUpright: 'Có nhiều cơ hội đầu tư nhưng tiềm ẩn rủi ro.',
      meaningReversed: 'Bắt đầu thực tế hơn trong các quyết định tài chính.',
      advice: 'Cần thận trọng và đánh giá kỹ trước khi đầu tư.'
    },
    {
      cardId: cardIds.sevenOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Nhiều mối quan hệ', 'Phân tâm', 'Không tập trung', 'Ảo tưởng'],
      meaningUpright: 'Có nhiều mối quan hệ xã hội nhưng thiếu chiều sâu.',
      meaningReversed: 'Bắt đầu tập trung vào những mối quan hệ có ý nghĩa.',
      advice: 'Nên chọn lọc và đầu tư vào những mối quan hệ thực sự quan trọng.'
    },

    // Eight of Cups
    {
      cardId: cardIds.eightOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Rời bỏ', 'Từ bỏ', 'Tìm kiếm', 'Thay đổi'],
      meaningUpright: 'Quyết định rời bỏ một mối quan hệ để tìm kiếm điều mới.',
      meaningReversed: 'Lưỡng lự trong việc rời bỏ hoặc quay lại mối quan hệ cũ.',
      advice: 'Lắng nghe trái tim và can đảm theo đuổi hạnh phúc thực sự.'
    },
    {
      cardId: cardIds.eightOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Thay đổi', 'Rời xa', 'Tìm kiếm', 'Hành trình mới'],
      meaningUpright: 'Quyết định thay đổi môi trường sống hoặc rời xa gia đình.',
      meaningReversed: 'Phân vân giữa việc ở lại hay thay đổi.',
      advice: 'Cân nhắc kỹ trước khi đưa ra quyết định thay đổi lớn.'
    },
    {
      cardId: cardIds.eightOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Rời xa', 'Độc lập', 'Thay đổi', 'Trưởng thành'],
      meaningUpright: 'Thời điểm tách ra để sống độc lập hoặc tự lập.',
      meaningReversed: 'Lưỡng lự trong việc rời xa tổ ấm.',
      advice: 'Giữ kết nối với gia đình ngay cả khi cần không gian riêng.'
    },
    {
      cardId: cardIds.eightOfCups,
      contextId: contextIds.congViec,
      keywords: ['Nghỉ việc', 'Thay đổi', 'Tìm kiếm', 'Phát triển'],
      meaningUpright: 'Quyết định rời bỏ công việc hiện tại để tìm cơ hội mới.',
      meaningReversed: 'Phân vân về việc thay đổi công việc.',
      advice: 'Đảm bảo có kế hoạch rõ ràng trước khi thay đổi công việc.'
    },
    {
      cardId: cardIds.eightOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Từ bỏ', 'Đầu tư mới', 'Thay đổi', 'Tìm kiếm'],
      meaningUpright: 'Rời bỏ các khoản đầu tư cũ để tìm cơ hội mới.',
      meaningReversed: 'Lưỡng lự trong việc thay đổi chiến lược tài chính.',
      advice: 'Đánh giá kỹ rủi ro trước khi thay đổi hướng đầu tư.'
    },
    {
      cardId: cardIds.eightOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Rời bỏ', 'Thay đổi', 'Tìm kiếm', 'Độc lập'],
      meaningUpright: 'Rời xa môi trường xã hội cũ để tìm kiếm những kết nối mới.',
      meaningReversed: 'Lưỡng lự trong việc thay đổi môi trường xã hội.',
      advice: 'Cho phép bản thân khám phá những môi trường và mối quan hệ mới.'
    },

    // Nine of Cups
    {
      cardId: cardIds.nineOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Mãn nguyện', 'Hạnh phúc', 'Thỏa mãn', 'Ước nguyện'],
      meaningUpright: 'Cảm thấy hạnh phúc và mãn nguyện trong tình yêu.',
      meaningReversed: 'Có thể đang tự mãn hoặc thiếu sâu sắc trong tình yêu.',
      advice: 'Trân trọng hạnh phúc hiện tại nhưng vẫn tiếp tục vun đắp tình yêu.'
    },
    {
      cardId: cardIds.nineOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Hạnh phúc', 'Mãn nguyện', 'An lạc', 'Thành tựu'],
      meaningUpright: 'Gia đình hạnh phúc, mọi điều như ý nguyện.',
      meaningReversed: 'Có thể đang bỏ qua những vấn đề tiềm ẩn trong gia đình.',
      advice: 'Duy trì và vun đắp hạnh phúc gia đình.'
    },
    {
      cardId: cardIds.nineOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Viên mãn', 'Hài lòng', 'Ấm áp', 'Thành tựu'],
      meaningUpright: 'Gia đình đạt được những mong ước, cuộc sống viên mãn.',
      meaningReversed: 'Có thể đang bỏ qua nhu cầu của một số thành viên.',
      advice: 'Chia sẻ niềm vui và quan tâm đến từng thành viên trong gia đình.'
    },
    {
      cardId: cardIds.nineOfCups,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Mãn nguyện', 'Thành tựu', 'Hài lòng'],
      meaningUpright: 'Đạt được mục tiêu nghề nghiệp, cảm thấy mãn nguyện.',
      meaningReversed: 'Có thể đang tự mãn và thiếu động lực phát triển.',
      advice: 'Tận hưởng thành công nhưng vẫn đặt ra mục tiêu mới.'
    },
    {
      cardId: cardIds.nineOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Thịnh vượng', 'Mãn nguyện', 'Sung túc', 'Như ý'],
      meaningUpright: 'Đạt được mục tiêu tài chính, cuộc sống sung túc.',
      meaningReversed: 'Có thể đang thỏa mãn quá mức với tình hình tài chính.',
      advice: 'Tận hưởng thành quả nhưng vẫn duy trì thói quen tài chính tốt.'
    },
    {
      cardId: cardIds.nineOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Hài lòng', 'Được yêu mến', 'Thành công', 'Danh tiếng'],
      meaningUpright: 'Được mọi người yêu mến, các mối quan hệ tốt đẹp.',
      meaningReversed: 'Có thể đang tự mãn hoặc thiếu sâu sắc trong quan hệ.',
      advice: 'Trân trọng và tiếp tục vun đắp các mối quan hệ xã hội.'
    },

    // Ten of Cups
    {
      cardId: cardIds.tenOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Viên mãn', 'Hạnh phúc', 'Hòa hợp', 'Trọn vẹn'],
      meaningUpright: 'Tình yêu viên mãn, hạnh phúc trọn vẹn trong mối quan hệ.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc duy trì hạnh phúc.',
      advice: 'Trân trọng và gìn giữ hạnh phúc hiện tại.'
    },
    {
      cardId: cardIds.tenOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Hạnh phúc', 'Viên mãn', 'Hòa thuận', 'Trọn vẹn'],
      meaningUpright: 'Gia đình hạnh phúc, hòa thuận và viên mãn.',
      meaningReversed: 'Có thể đang có những bất đồng nhỏ trong gia đình.',
      advice: 'Duy trì sự hòa thuận và gắn kết trong gia đình.'
    },
    {
      cardId: cardIds.tenOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Hòa thuận', 'Yêu thương', 'Gắn bó', 'Viên mãn'],
      meaningUpright: 'Gia đình sum vầy, mọi người yêu thương và gắn bó.',
      meaningReversed: 'Có thể đang thiếu vắng thời gian bên nhau.',
      advice: 'Tạo thêm những khoảnh khắc đoàn tụ gia đình.'
    },
    {
      cardId: cardIds.tenOfCups,
      contextId: contextIds.congViec,
      keywords: ['Thành công', 'Hài lòng', 'Cân bằng', 'Viên mãn'],
      meaningUpright: 'Đạt được sự cân bằng và hài lòng trong công việc.',
      meaningReversed: 'Có thể đang thiếu cân bằng giữa công việc và cuộc sống.',
      advice: 'Duy trì sự cân bằng giữa công việc và đời sống cá nhân.'
    },
    {
      cardId: cardIds.tenOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Thịnh vượng', 'An tâm', 'Ổn định', 'Viên mãn'],
      meaningUpright: 'Tài chính ổn định, cuộc sống sung túc và an tâm.',
      meaningReversed: 'Có thể đang lo lắng về sự ổn định tài chính.',
      advice: 'Tiếp tục duy trì và phát triển sự ổn định tài chính.'
    },
    {
      cardId: cardIds.tenOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Hòa hợp', 'Vui vẻ', 'Gắn kết', 'Viên mãn'],
      meaningUpright: 'Các mối quan hệ xã hội hòa hợp và tốt đẹp.',
      meaningReversed: 'Có thể đang thiếu sự gắn kết trong một số mối quan hệ.',
      advice: 'Duy trì và phát triển các mối quan hệ tốt đẹp.'
    },

    // Page of Cups
    {
      cardId: cardIds.pageOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Lãng mạn', 'Ngây thơ', 'Mới mẻ', 'Tình cảm'],
      meaningUpright: 'Bắt đầu một tình yêu mới với trái tim trong sáng.',
      meaningReversed: 'Có thể quá ngây thơ hoặc thiếu trưởng thành trong tình yêu.',
      advice: 'Giữ sự trong sáng nhưng cần thực tế trong tình yêu.'
    },
    {
      cardId: cardIds.pageOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Tin vui', 'Sáng tạo', 'Mới mẻ', 'Hứng khởi'],
      meaningUpright: 'Có tin vui hoặc sự kiện mới trong gia đình.',
      meaningReversed: 'Có thể thiếu sự chuẩn bị cho những thay đổi.',
      advice: 'Đón nhận những điều mới mẻ với sự chuẩn bị kỹ lưỡng.'
    },
    {
      cardId: cardIds.pageOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Thông điệp', 'Sáng tạo', 'Tươi mới', 'Cảm xúc'],
      meaningUpright: 'Nhận được thông điệp tốt đẹp hoặc ý tưởng mới.',
      meaningReversed: 'Có thể gặp khó khăn trong việc thể hiện cảm xúc.',
      advice: 'Thể hiện tình cảm một cách chân thành và sáng tạo.'
    },
    {
      cardId: cardIds.pageOfCups,
      contextId: contextIds.congViec,
      keywords: ['Học hỏi', 'Sáng tạo', 'Cơ hội', 'Khám phá'],
      meaningUpright: 'Có cơ hội học hỏi mới hoặc dự án sáng tạo.',
      meaningReversed: 'Có thể thiếu tự tin hoặc kinh nghiệm.',
      advice: 'Tận dụng cơ hội học hỏi và phát triển kỹ năng.'
    },
    {
      cardId: cardIds.pageOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Cơ hội', 'Học hỏi', 'Mới mẻ', 'Khám phá'],
      meaningUpright: 'Có cơ hội tài chính mới cần học hỏi.',
      meaningReversed: 'Có thể thiếu kinh nghiệm trong quản lý tài chính.',
      advice: 'Học hỏi về tài chính và đầu tư một cách thận trọng.'
    },
    {
      cardId: cardIds.pageOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Kết bạn', 'Hồn nhiên', 'Mới mẻ', 'Cởi mở'],
      meaningUpright: 'Tạo lập những mối quan hệ mới đầy hứng khởi.',
      meaningReversed: 'Có thể quá ngây thơ trong các mối quan hệ.',
      advice: 'Giữ sự cởi mở nhưng cần thận trọng trong quan hệ mới.'
    },

    // Knight of Cups
    {
      cardId: cardIds.knightOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Lãng mạn', 'Đam mê', 'Theo đuổi', 'Tình cảm'],
      meaningUpright: 'Đang theo đuổi tình yêu với sự lãng mạn và đam mê.',
      meaningReversed: 'Có thể quá mơ mộng hoặc thiếu thực tế trong tình yêu.',
      advice: 'Giữ sự lãng mạn nhưng cần thực tế trong mối quan hệ.'
    },
    {
      cardId: cardIds.knightOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Tình cảm', 'Chân thành', 'Lãng mạn', 'Quan tâm'],
      meaningUpright: 'Thể hiện tình cảm và sự quan tâm đến gia đình.',
      meaningReversed: 'Có thể thiếu ổn định hoặc trách nhiệm.',
      advice: 'Cân bằng giữa tình cảm và trách nhiệm gia đình.'
    },
    {
      cardId: cardIds.knightOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Bảo vệ', 'Chăm sóc', 'Tình cảm', 'Trách nhiệm'],
      meaningUpright: 'Thể hiện vai trò bảo vệ và chăm sóc gia đình.',
      meaningReversed: 'Có thể thiếu quyết đoán hoặc trách nhiệm.',
      advice: 'Phát huy vai trò bảo vệ và chăm sóc gia đình.'
    },
    {
      cardId: cardIds.knightOfCups,
      contextId: contextIds.congViec,
      keywords: ['Sáng tạo', 'Đam mê', 'Cảm hứng', 'Theo đuổi'],
      meaningUpright: 'Theo đuổi công việc với đam mê và sáng tạo.',
      meaningReversed: 'Có thể thiếu thực tế hoặc kế hoạch cụ thể.',
      advice: 'Kết hợp đam mê với kế hoạch thực tế trong công việc.'
    },
    {
      cardId: cardIds.knightOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Đầu tư', 'Cơ hội', 'Trực giác', 'Mạo hiểm'],
      meaningUpright: 'Theo đuổi cơ hội tài chính với trực giác tốt.',
      meaningReversed: 'Có thể quá cảm tính trong quyết định tài chính.',
      advice: 'Cân bằng giữa trực giác và phân tích trong đầu tư.'
    },
    {
      cardId: cardIds.knightOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Quyến rũ', 'Thu hút', 'Lãng mạn', 'Giao tiếp'],
      meaningUpright: 'Thu hút mọi người bằng sự quyến rũ và chân thành.',
      meaningReversed: 'Có thể tạo ấn tượng hời hợt hoặc thiếu chân thành.',
      advice: 'Duy trì sự chân thành trong giao tiếp xã hội.'
    },

    // Queen of Cups
    {
      cardId: cardIds.queenOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Trực giác', 'Thấu hiểu', 'Yêu thương', 'Chăm sóc'],
      meaningUpright: 'Thể hiện tình yêu sâu sắc và sự thấu hiểu.',
      meaningReversed: 'Có thể quá nhạy cảm hoặc thiếu ranh giới.',
      advice: 'Cân bằng giữa tình cảm và lý trí trong tình yêu.'
    },
    {
      cardId: cardIds.queenOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Yêu thương', 'Chăm sóc', 'Thấu hiểu', 'Hỗ trợ'],
      meaningUpright: 'Tạo không khí ấm áp và yêu thương trong gia đình.',
      meaningReversed: 'Có thể quá bao bọc hoặc thiếu ranh giới.',
      advice: 'Thể hiện tình yêu thương nhưng tôn trọng không gian cá nhân.'
    },
    {
      cardId: cardIds.queenOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Chăm sóc', 'Thấu hiểu', 'Hỗ trợ', 'Tình thương'],
      meaningUpright: 'Là nguồn yêu thương và hỗ trợ tinh thần cho gia đình.',
      meaningReversed: 'Có thể đang cảm thấy kiệt sức về mặt cảm xúc.',
      advice: 'Cân bằng giữa việc chăm sóc người khác và bản thân.'
    },
    {
      cardId: cardIds.queenOfCups,
      contextId: contextIds.congViec,
      keywords: ['Trực giác', 'Sáng tạo', 'Thấu cảm', 'Hỗ trợ'],
      meaningUpright: 'Sử dụng trực giác và sự thấu cảm trong công việc.',
      meaningReversed: 'Có thể quá nhạy cảm với môi trường làm việc.',
      advice: 'Phát huy khả năng thấu cảm nhưng giữ vững chuyên nghiệp.'
    },
    {
      cardId: cardIds.queenOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Trực giác', 'Cân bằng', 'Thấu hiểu', 'Quản lý'],
      meaningUpright: 'Sử dụng trực giác tốt trong quản lý tài chính.',
      meaningReversed: 'Có thể quá cảm tính trong quyết định tài chính.',
      advice: 'Kết hợp trực giác với phân tích thực tế.'
    },
    {
      cardId: cardIds.queenOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Thấu cảm', 'Hỗ trợ', 'Lắng nghe', 'Tư vấn'],
      meaningUpright: 'Là người bạn đáng tin cậy và biết lắng nghe.',
      meaningReversed: 'Có thể quá can thiệp vào vấn đề của người khác.',
      advice: 'Duy trì khả năng lắng nghe và hỗ trợ với ranh giới phù hợp.'
    },

    // King of Cups
    {
      cardId: cardIds.kingOfCups,
      contextId: contextIds.tinhYeu,
      keywords: ['Trưởng thành', 'Cân bằng', 'Kiểm soát', 'Thấu hiểu'],
      meaningUpright: 'Thể hiện tình yêu trưởng thành và sự cân bằng cảm xúc.',
      meaningReversed: 'Có thể đang kìm nén cảm xúc hoặc thiếu kết nối.',
      advice: 'Thể hiện tình cảm một cách chín chắn và cân bằng.'
    },
    {
      cardId: cardIds.kingOfCups,
      contextId: contextIds.giaDao,
      keywords: ['Lãnh đạo', 'Bảo vệ', 'Cân bằng', 'Ổn định'],
      meaningUpright: 'Là trụ cột tinh thần vững vàng cho gia đình.',
      meaningReversed: 'Có thể đang gặp khó khăn trong việc thể hiện cảm xúc.',
      advice: 'Duy trì sự ổn định nhưng không quên thể hiện tình cảm.'
    },
    {
      cardId: cardIds.kingOfCups,
      contextId: contextIds.giaDinh,
      keywords: ['Hỗ trợ', 'Bảo vệ', 'Thấu hiểu', 'Trưởng thành'],
      meaningUpright: 'Là nguồn hỗ trợ tinh thần đáng tin cậy cho gia đình.',
      meaningReversed: 'Có thể đang thiếu kết nối cảm xúc với người thân.',
      advice: 'Cân bằng giữa vai trò lãnh đạo và sự gần gũi trong gia đình.'
    },
    {
      cardId: cardIds.kingOfCups,
      contextId: contextIds.congViec,
      keywords: ['Lãnh đạo', 'Cân bằng', 'Thấu hiểu', 'Chuyên nghiệp'],
      meaningUpright: 'Lãnh đạo với sự thấu hiểu và kiểm soát cảm xúc tốt.',
      meaningReversed: 'Có thể đang thiếu kết nối với đồng nghiệp.',
      advice: 'Duy trì sự chuyên nghiệp nhưng không quên yếu tố con người.'
    },
    {
      cardId: cardIds.kingOfCups,
      contextId: contextIds.taiChinh,
      keywords: ['Quản lý', 'Cân bằng', 'Kiểm soát', 'Ổn định'],
      meaningUpright: 'Quản lý tài chính với sự cân bằng và kiểm soát tốt.',
      meaningReversed: 'Có thể đang quá thận trọng trong quyết định tài chính.',
      advice: 'Duy trì sự ổn định nhưng không quên nắm bắt cơ hội.'
    },
    {
      cardId: cardIds.kingOfCups,
      contextId: contextIds.quanHeXaHoi,
      keywords: ['Tư vấn', 'Hỗ trợ', 'Đáng tin cậy', 'Thấu hiểu'],
      meaningUpright: 'Là người cố vấn đáng tin cậy trong các mối quan hệ.',
      meaningReversed: 'Có thể đang giữ khoảng cách quá mức với người khác.',
      advice: 'Duy trì vai trò hỗ trợ nhưng vẫn giữ ranh giới phù hợp.'
    }
  ];
}; 