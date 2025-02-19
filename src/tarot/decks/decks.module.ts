import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';
import { Deck, DeckSchema } from './schemas/deck.schema';
import { UploadsModule } from '../../uploads/uploads.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Deck.name, schema: DeckSchema }]),
    UploadsModule
  ],
  controllers: [DecksController],
  providers: [DecksService],
  exports: [DecksService]
})
export class DecksModule {} 