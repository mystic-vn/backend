import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReadingAnalysisController } from './reading-analysis.controller';
import { ReadingAnalysisService } from './reading-analysis.service';
import { ReadingAnalysis, ReadingAnalysisSchema } from './schemas/reading-analysis.schema';
import { GPTService } from './gpt.service';
import { DeepseekService } from './deepseek.service';
import { ConfigModule } from '@nestjs/config';
import { CardsModule } from '../../tarot/cards/cards.module';
import { ContextsModule } from '../../tarot/contexts/contexts.module';
import { QuestionsModule } from '../../tarot-reading/questions/questions.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReadingAnalysis.name, schema: ReadingAnalysisSchema }
    ]),
    ConfigModule,
    CardsModule,
    ContextsModule,
    QuestionsModule
  ],
  controllers: [ReadingAnalysisController],
  providers: [ReadingAnalysisService, GPTService, DeepseekService],
  exports: [ReadingAnalysisService]
})
export class ReadingAnalysisModule {} 