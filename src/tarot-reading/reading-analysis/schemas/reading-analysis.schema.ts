import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class ReadingAnalysis extends Document {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'SpreadType', required: true })
  spreadType: string;

  @Prop({ required: true })
  context: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Question', required: false })
  question?: string;

  @Prop({
    type: [{
      cardId: { type: MongooseSchema.Types.ObjectId, ref: 'Card', required: true },
      position: { type: Number, required: true },
      aspect: { type: String, required: true },
      isReversed: { type: Boolean, default: false }
    }],
    required: true
  })
  cards: {
    cardId: string;
    position: number;
    aspect: string;
    isReversed: boolean;
  }[];

  @Prop({
    type: {
      overview: { type: String, required: true },
      positionAnalyses: [{
        position: { type: Number, required: true },
        cardId: { type: MongooseSchema.Types.ObjectId, ref: 'Card', required: true },
        interpretation: { type: String, required: true },
        advice: { type: String, required: true }
      }],
      conclusion: { type: String, required: true }
    },
    required: true
  })
  analysis: {
    overview: string;
    positionAnalyses: {
      position: number;
      cardId: string;
      interpretation: string;
      advice: string;
    }[];
    conclusion: string;
  };

  @Prop({
    type: {
      cardCombinations: [String],
      contextKeywords: [String],
      interpretationTemplates: [String]
    }
  })
  extractedPatterns?: {
    cardCombinations: string[];
    contextKeywords: string[];
    interpretationTemplates: string[];
  };

  @Prop({ default: false })
  isDeleted: boolean;
}

export const ReadingAnalysisSchema = SchemaFactory.createForClass(ReadingAnalysis); 