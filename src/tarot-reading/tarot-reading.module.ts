import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsController } from './questions/questions.controller';
import { QuestionsService } from './questions/questions.service';
import { Question, QuestionSchema } from './questions/schemas/question.schema';
import { SpreadTypesController } from './spread-types/spread-types.controller';
import { SpreadTypesService } from './spread-types/spread-types.service';
import { SpreadType, SpreadTypeSchema } from './spread-types/schemas/spread-type.schema';
import { Context, ContextSchema } from '../tarot/contexts/schemas/context.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Question.name, schema: QuestionSchema },
      { name: SpreadType.name, schema: SpreadTypeSchema },
      { name: Context.name, schema: ContextSchema }
    ])
  ],
  controllers: [QuestionsController, SpreadTypesController],
  providers: [QuestionsService, SpreadTypesService],
  exports: [QuestionsService, SpreadTypesService]
})
export class TarotReadingModule {}
