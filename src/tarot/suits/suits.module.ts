import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuitsService } from './suits.service';
import { SuitsController } from './suits.controller';
import { Suit, SuitSchema } from './schemas/suit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Suit.name, schema: SuitSchema }
    ])
  ],
  controllers: [SuitsController],
  providers: [SuitsService],
  exports: [SuitsService]
})
export class SuitsModule {} 