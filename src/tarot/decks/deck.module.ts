import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TarotDeck, TarotDeckSchema } from './deck.schema';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TarotDeck.name, schema: TarotDeckSchema },
    ]),
  ],
  controllers: [DeckController],
  providers: [DeckService],
  exports: [DeckService],
})
export class DeckModule {} 