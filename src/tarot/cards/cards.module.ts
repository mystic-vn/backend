import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { Card, CardSchema } from './schemas/card.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Card.name, schema: CardSchema }
    ]),
    CacheModule.register({
      ttl: 60 * 1000, // 1 minute
      max: 100, // maximum number of items in cache
    }),
  ],
  controllers: [CardsController],
  providers: [CardsService],
  exports: [CardsService],
})
export class CardsModule {} 
