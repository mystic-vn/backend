import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CardType } from '../../cards/schemas/card.schema';

export type ArcanaTypeDocument = ArcanaType & Document;

@Schema({ timestamps: true })
export class ArcanaType {
  @Prop({ type: String, enum: CardType, required: true, unique: true })
  type: CardType;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  significance: string;

  @Prop([String])
  keywords: string[];

  @Prop({ required: true })
  readingFocus: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const ArcanaTypeSchema = SchemaFactory.createForClass(ArcanaType); 