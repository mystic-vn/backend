import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { SpreadType } from '../../spread-types/schemas/spread-type.schema';

@Schema({ timestamps: true })
export class Question extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  context: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'SpreadType', required: true })
  spreadType: SpreadType;

  @Prop({
    type: [
      {
        index: { type: Number, required: true },
        aspect: { type: String, required: true },
        interpretation: { type: String, required: true },
      },
    ],
    required: true
  })
  positions: {
    index: number;
    aspect: string;
    interpretation: string;
  }[];

  @Prop({ type: [String], default: [] })
  keywords: string[];

  @Prop({
    type: {
      cardCombinations: { type: [String], default: [] },
      interpretationTemplates: { type: [String], default: [] },
    },
    default: { cardCombinations: [], interpretationTemplates: [] },
  })
  preAnalyzedPatterns: {
    cardCombinations: string[];
    interpretationTemplates: string[];
  };

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const QuestionSchema = SchemaFactory.createForClass(Question); 