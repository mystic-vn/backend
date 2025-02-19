import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TarotDeckDocument = TarotDeck & Document;

@Schema({
  timestamps: true,
  collection: 'decks'
})
export class TarotDeck {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  coverImage?: string;

  @Prop()
  backImage?: string;
}

export const TarotDeckSchema = SchemaFactory.createForClass(TarotDeck); 