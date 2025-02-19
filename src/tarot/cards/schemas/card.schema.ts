import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { CardSuit } from '../../suits/schemas/suit.schema';
import { ArcanaType } from '../../arcana-types/schemas/arcana-type.schema';

export type CardDocument = Card & Document;

export enum CardType {
  MAJOR = 'major',
  MINOR = 'minor'
}

@Schema({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
export class Card {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  imageUrl?: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Deck', required: true })
  deckId: string;

  @Prop({ required: true })
  number: number;

  @Prop({ type: String, enum: CardType, required: true })
  type: CardType;

  @Prop({ 
    type: MongooseSchema.Types.ObjectId, 
    ref: 'Suit',
    required: function(this: Card) {
      return this.type === CardType.MINOR;
    },
    validate: {
      validator: function(this: Card, value: any) {
        if (this.type === CardType.MAJOR && value) {
          return false;
        }
        return true;
      },
      message: 'Major Arcana cards cannot have a suit'
    }
  })
  suitId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'ArcanaType', required: true })
  arcanaTypeId: string;

  @Prop([String])
  generalKeywords: string[];

  @Prop({ required: true })
  generalMeaningUpright: string;

  @Prop({ required: true })
  generalMeaningReversed: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const CardSchema = SchemaFactory.createForClass(Card);

// Add virtual populate
CardSchema.virtual('arcanaType', {
  ref: 'ArcanaType',
  localField: 'arcanaTypeId',
  foreignField: '_id',
  justOne: true
});

CardSchema.virtual('suit', {
  ref: 'Suit',
  localField: 'suitId',
  foreignField: '_id',
  justOne: true
}); 