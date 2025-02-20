import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Question extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'SpreadType', required: true })
  spreadType: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const QuestionSchema = SchemaFactory.createForClass(Question); 