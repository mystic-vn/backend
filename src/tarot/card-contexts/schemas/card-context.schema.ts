import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CardContextDocument = CardContext & Document;

@Schema({ timestamps: true })
export class CardContext {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Card', required: true })
  cardId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Context', required: true })
  contextId: string;

  @Prop([String])
  keywords: string[];

  @Prop({ required: true })
  meaningUpright: string;

  @Prop({ required: true })
  meaningReversed: string;

  @Prop({ required: true })
  advice: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const CardContextSchema = SchemaFactory.createForClass(CardContext); 