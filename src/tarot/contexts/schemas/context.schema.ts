import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContextDocument = Context & Document;

@Schema({ timestamps: true })
export class Context {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  order: number;

  @Prop({ required: true, enum: ['relationship', 'career', 'finance', 'social'] })
  type: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const ContextSchema = SchemaFactory.createForClass(Context); 