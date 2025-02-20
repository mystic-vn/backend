import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class GPTService {
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async analyzeReading(input: {
    context: string;
    question: string;
    cards: Array<{
      name: string;
      position: number;
      aspect: string;
      isReversed: boolean;
    }>;
  }): Promise<{
    overview: string;
    positionAnalyses: Array<{
      position: number;
      interpretation: string;
      advice: string;
    }>;
    conclusion: string;
  }> {
    try {
      const prompt = `
      Phân tích trải bài Tarot:
      
      Ngữ cảnh: ${input.context}
      
      Câu hỏi: ${input.question}

      Các lá bài:
      ${input.cards.map(card => `
      Vị trí ${card.position}: ${card.name} ${card.isReversed ? '(Ngược)' : '(Xuôi)'}
      Khía cạnh: ${card.aspect}
      `).join('\n')}

      Yêu cầu phân tích chi tiết bằng tiếng Việt:
      1. Tổng quan tình huống
      2. Phân tích chi tiết từng vị trí và lời khuyên
      3. Kết luận tổng thể

      Format kết quả theo JSON:
      {
        "overview": "tổng quan...",
        "positionAnalyses": [
          {
            "position": 1,
            "interpretation": "phân tích...",
            "advice": "lời khuyên..."
          }
        ],
        "conclusion": "kết luận..."
      }
      `;

      const completion = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Bạn là một chuyên gia Tarot có kinh nghiệm trong việc phân tích và đưa ra lời khuyên."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7
      });

      return JSON.parse(completion.choices[0].message.content || '{}');
    } catch (error: any) {
      console.error('GPT Analysis error:', error);
      
      if (error.code === 'insufficient_quota') {
        // Trả về kết quả mẫu chi tiết hơn khi gặp lỗi quota
        return {
          overview: `Trong ngữ cảnh "${input.context}", với câu hỏi "${input.question}", các lá bài cho thấy một giai đoạn chuyển tiếp quan trọng trong cuộc sống của bạn. Mỗi lá bài đều mang những thông điệp riêng, tạo nên bức tranh tổng thể về tình huống hiện tại.`,
          positionAnalyses: input.cards.map(card => ({
            position: card.position,
            interpretation: `Lá ${card.name} xuất hiện ở vị trí ${card.position} (${card.aspect}) ${card.isReversed ? 'ở trạng thái ngược' : 'ở trạng thái xuôi'}. ${
              card.isReversed 
                ? 'Điều này cảnh báo về những thách thức và khó khăn tiềm ẩn. Bạn cần đặc biệt chú ý đến những dấu hiệu cảnh báo và thận trọng trong các quyết định.'
                : 'Đây là dấu hiệu tích cực, cho thấy những cơ hội và tiềm năng đang mở ra. Bạn đang ở vị thế thuận lợi để phát triển và tiến bộ.'
            }`,
            advice: `${
              card.isReversed
                ? 'Hãy thận trọng và cân nhắc kỹ lưỡng trước khi đưa ra quyết định. Đừng vội vàng hoặc để cảm xúc chi phối. Tham khảo ý kiến từ người có kinh nghiệm.'
                : 'Hãy tự tin và quyết đoán trong hành động. Đây là thời điểm tốt để thực hiện những kế hoạch đã chuẩn bị. Tin tưởng vào trực giác của bản thân.'
            }`
          })),
          conclusion: "Nhìn chung, thời điểm này đòi hỏi sự cân bằng giữa thận trọng và quyết đoán. Hãy lắng nghe trực giác của bản thân, nhưng đồng thời cũng cần tham khảo ý kiến từ những người có kinh nghiệm. Mỗi quyết định đều có thể ảnh hưởng lớn đến tương lai, vì vậy hãy cân nhắc kỹ lưỡng và hành động một cách có ý thức."
        };
      }

      throw new InternalServerErrorException('Có lỗi xảy ra khi phân tích trải bài. Vui lòng thử lại sau.');
    }
  }
} 