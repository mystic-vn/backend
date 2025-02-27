import { Connection } from 'mongoose';
import { Question } from '../tarot-reading/questions/schemas/question.schema';
import { SpreadType } from '../tarot-reading/spread-types/schemas/spread-type.schema';
import { Context } from '../tarot/contexts/schemas/context.schema';

interface Position {
  index: number;
  aspect: string;
  interpretation: string;
}

export const seedQuestions = async (connection: Connection) => {
  try {
    console.log('Đang lấy models...');
    const QuestionModel = connection.model<Question>('Question');
    const SpreadTypeModel = connection.model<SpreadType>('SpreadType');
    const ContextModel = connection.model<Context>('Context');

    // Kiểm tra xem đã có questions chưa
    console.log('Kiểm tra questions...');
    const existingQuestions = await QuestionModel.find().exec();
    if (existingQuestions.length > 0) {
      console.log('Questions already seeded');
      return;
    }

    // Lấy tất cả contexts
    console.log('Lấy danh sách contexts...');
    const contexts = await ContextModel.find().exec();
    console.log(`Tìm thấy ${contexts.length} contexts:`, contexts.map(c => ({ name: c.name, slug: c.slug, type: c.type })));
    
    // Lấy tất cả spread types
    console.log('Lấy danh sách spread types...');
    const spreadTypes = await SpreadTypeModel.find().exec();
    console.log(`Tìm thấy ${spreadTypes.length} spread types:`, spreadTypes.map(s => ({ name: s.name, positions: s.positions.length })));

    // Tạo questions cho mỗi spread type
    for (const spreadType of spreadTypes) {
      console.log(`\nĐang xử lý spread type: ${spreadType.name}`);
      
      // Lấy context ID từ supportedContexts
      const contextId = spreadType.supportedContexts[0];
      console.log('Context ID:', contextId);
      const context = contexts.find(c => c._id.toString() === contextId.toString());
      
      if (!context) {
        console.log(`Không tìm thấy context cho spread type ${spreadType.name}`);
        continue;
      }
      console.log(`Tìm thấy context: ${context.name} (${context.slug})`);

      try {
        // Tạo câu hỏi cho one-card spread
        if (spreadType.positions.length === 1) {
          console.log('Tạo câu hỏi cho one-card spread');
          const oneCardQuestion = {
            title: `Góc nhìn tổng quan về ${context.name.toLowerCase()}`,
            content: `Bạn muốn biết góc nhìn tổng quan về ${context.name.toLowerCase()} của mình trong thời điểm hiện tại?`,
            context: context.slug,
            spreadType: spreadType._id,
            positions: [
              {
                index: 0,
                aspect: spreadType.positions[0].aspect,
                interpretation: `Lá bài này sẽ cho bạn thấy góc nhìn tổng quan về ${context.name.toLowerCase()} của bạn trong thời điểm hiện tại.`
              }
            ],
            keywords: [context.name.toLowerCase(), 'tổng quan', 'hiện tại'],
            preAnalyzedPatterns: {
              cardCombinations: [],
              interpretationTemplates: [
                `Trong ${context.name.toLowerCase()} của bạn, {card} cho thấy {meaning}.`,
                `{card} xuất hiện ngụ ý rằng trong ${context.name.toLowerCase()}, {meaning}.`
              ]
            },
            isActive: true
          };

          console.log('Dữ liệu câu hỏi one-card:', JSON.stringify(oneCardQuestion, null, 2));
          const createdOneCard = await QuestionModel.create(oneCardQuestion);
          console.log('Đã tạo câu hỏi one-card spread thành công:', createdOneCard._id);
        }

        // Tạo câu hỏi cho three-card spread
        if (spreadType.positions.length === 3) {
          console.log('Tạo câu hỏi cho three-card spread');
          let title = '';
          let content = '';
          let positions: Position[] = [];

          switch(context.type) {
            case 'relationship':
              title = 'Phân tích mối quan hệ';
              content = 'Bạn muốn hiểu rõ hơn về một mối quan hệ quan trọng trong cuộc sống của mình?';
              positions = [
                {
                  index: 0,
                  aspect: 'Góc nhìn của bạn',
                  interpretation: 'Lá bài này thể hiện cách bạn nhìn nhận mối quan hệ này.'
                },
                {
                  index: 1,
                  aspect: 'Góc nhìn của đối phương',
                  interpretation: 'Lá bài này thể hiện cách đối phương nhìn nhận mối quan hệ này.'
                },
                {
                  index: 2,
                  aspect: 'Tiềm năng phát triển',
                  interpretation: 'Lá bài này cho thấy tiềm năng phát triển của mối quan hệ trong tương lai.'
                }
              ];
              break;

            case 'career':
              title = 'Phân tích sự nghiệp';
              content = 'Bạn muốn hiểu rõ hơn về con đường sự nghiệp của mình?';
              positions = [
                {
                  index: 0,
                  aspect: 'Hiện trạng',
                  interpretation: 'Lá bài này thể hiện tình hình sự nghiệp hiện tại của bạn.'
                },
                {
                  index: 1,
                  aspect: 'Thách thức',
                  interpretation: 'Lá bài này chỉ ra những thách thức bạn đang hoặc sẽ phải đối mặt.'
                },
                {
                  index: 2,
                  aspect: 'Cơ hội',
                  interpretation: 'Lá bài này cho thấy những cơ hội có thể nắm bắt để phát triển sự nghiệp.'
                }
              ];
              break;

            case 'finance':
              title = 'Phân tích tài chính';
              content = 'Bạn muốn hiểu rõ hơn về tình hình tài chính của mình?';
              positions = [
                {
                  index: 0,
                  aspect: 'Thu nhập',
                  interpretation: 'Lá bài này thể hiện tình hình thu nhập hiện tại của bạn.'
                },
                {
                  index: 1,
                  aspect: 'Chi tiêu',
                  interpretation: 'Lá bài này chỉ ra cách bạn quản lý và sử dụng tiền bạc.'
                },
                {
                  index: 2,
                  aspect: 'Tiết kiệm và đầu tư',
                  interpretation: 'Lá bài này cho thấy tiềm năng tiết kiệm và đầu tư của bạn.'
                }
              ];
              break;

            case 'social':
              title = 'Phân tích các mối quan hệ xã hội';
              content = 'Bạn muốn hiểu rõ hơn về các mối quan hệ xã hội của mình?';
              positions = [
                {
                  index: 0,
                  aspect: 'Bản thân trong xã hội',
                  interpretation: 'Lá bài này thể hiện vị trí và vai trò của bạn trong các mối quan hệ xã hội.'
                },
                {
                  index: 1,
                  aspect: 'Môi trường xung quanh',
                  interpretation: 'Lá bài này chỉ ra ảnh hưởng của môi trường và người xung quanh đến bạn.'
                },
                {
                  index: 2,
                  aspect: 'Phát triển mối quan hệ',
                  interpretation: 'Lá bài này cho thấy cách thức để phát triển và cải thiện các mối quan hệ xã hội.'
                }
              ];
              break;

            case 'health':
              title = 'Phân tích sức khỏe';
              content = 'Bạn muốn hiểu rõ hơn về tình trạng sức khỏe của mình?';
              positions = [
                {
                  index: 0,
                  aspect: 'Sức khỏe thể chất',
                  interpretation: 'Lá bài này thể hiện tình trạng sức khỏe thể chất hiện tại của bạn.'
                },
                {
                  index: 1,
                  aspect: 'Sức khỏe tinh thần',
                  interpretation: 'Lá bài này chỉ ra tình trạng sức khỏe tinh thần và cảm xúc của bạn.'
                },
                {
                  index: 2,
                  aspect: 'Lời khuyên',
                  interpretation: 'Lá bài này đưa ra lời khuyên để cải thiện và duy trì sức khỏe tốt.'
                }
              ];
              break;

            case 'spiritual':
              title = 'Phân tích tâm linh';
              content = 'Bạn muốn hiểu rõ hơn về con đường tâm linh của mình?';
              positions = [
                {
                  index: 0,
                  aspect: 'Trạng thái hiện tại',
                  interpretation: 'Lá bài này thể hiện trạng thái tâm linh hiện tại của bạn.'
                },
                {
                  index: 1,
                  aspect: 'Thách thức và bài học',
                  interpretation: 'Lá bài này chỉ ra những thách thức và bài học tâm linh bạn cần vượt qua.'
                },
                {
                  index: 2,
                  aspect: 'Con đường phát triển',
                  interpretation: 'Lá bài này cho thấy hướng phát triển tâm linh phù hợp với bạn.'
                }
              ];
              break;
          }

          if (title && content && positions.length > 0) {
            console.log(`Tạo câu hỏi three-card spread cho context ${context.name}`);
            const threeCardQuestion = {
              title,
              content,
              context: context.slug,
              spreadType: spreadType._id,
              positions,
              keywords: [context.name.toLowerCase(), 'phân tích', 'chi tiết'],
              preAnalyzedPatterns: {
                cardCombinations: [],
                interpretationTemplates: [
                  `Ở vị trí {position}, {card} cho thấy {meaning}.`,
                  `{card} xuất hiện ở vị trí {position} ngụ ý rằng {meaning}.`
                ]
              },
              isActive: true
            };

            console.log('Dữ liệu câu hỏi three-card:', JSON.stringify(threeCardQuestion, null, 2));
            const createdThreeCard = await QuestionModel.create(threeCardQuestion);
            console.log('Đã tạo câu hỏi three-card spread thành công:', createdThreeCard._id);
          }
        }
      } catch (error) {
        console.error(`Lỗi khi tạo câu hỏi cho spread type ${spreadType.name}:`, error);
      }
    }

    const totalQuestions = await QuestionModel.countDocuments();
    console.log(`\nĐã tạo thành công ${totalQuestions} câu hỏi`);
  } catch (error) {
    console.error('Error seeding questions:', error);
    throw error;
  }
}; 