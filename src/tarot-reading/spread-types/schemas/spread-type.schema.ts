import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class SpreadPosition {
  @Prop({ required: true })
  index: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  aspect: string;

  @Prop({ required: true })
  description: string;
}

@Schema({ timestamps: true })
export class SpreadType extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({
    type: [
      {
        index: { type: Number, required: true },
        name: { type: String, required: true },
        aspect: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    required: true,
    validate: [(val: SpreadPosition[]) => val.length > 0, 'Spread must have at least one position'],
  })
  positions: SpreadPosition[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Context' }], required: true })
  supportedContexts: string[];

  @Prop({ default: false })
  isDeleted: boolean;

  @Prop({ default: true })
  isActive: boolean;
}

export const SpreadTypeSchema = SchemaFactory.createForClass(SpreadType); 