import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuitDocument = Suit & Document;

export enum CardSuit {
  CUPS = 'cups',
  WANDS = 'wands',
  PENTACLES = 'pentacles',
  SWORDS = 'swords'
}

@Schema({ timestamps: true })
export class Suit {
  @Prop({ type: String, enum: CardSuit, required: true, unique: true })
  name: CardSuit;

  @Prop({ required: true })
  meaning: string;

  @Prop({ required: true })
  element: string;

  @Prop([String])
  keywords: string[];

  @Prop({ required: true })
  description: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const SuitSchema = SchemaFactory.createForClass(Suit); 