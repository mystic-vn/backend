import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeckDocument = Deck & Document;

@Schema({ timestamps: true })
export class Deck {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  coverImage?: string;

  @Prop()
  backImage?: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const DeckSchema = SchemaFactory.createForClass(Deck); 