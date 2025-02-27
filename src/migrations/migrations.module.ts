import { Module } from '@nestjs/common';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Context, ContextSchema } from '../tarot/contexts/schemas/context.schema';
import { CardContext, CardContextSchema } from '../tarot/card-contexts/schemas/card-context.schema';
import { Card, CardSchema } from '../tarot/cards/schemas/card.schema';
import { ArcanaType, ArcanaTypeSchema } from '../tarot/arcana-types/schemas/arcana-type.schema';
import { Suit, SuitSchema } from '../tarot/suits/schemas/suit.schema';
import { Deck, DeckSchema } from '../tarot/decks/schemas/deck.schema';
import { User, UserSchema } from '../users/schemas/user.schema';
import { SpreadType, SpreadTypeSchema } from '../tarot-reading/spread-types/schemas/spread-type.schema';
import { Question, QuestionSchema } from '../tarot-reading/questions/schemas/question.schema';
import { Connection } from 'mongoose';

import { ContextsSeeder } from './seed-contexts';
import { SeedCardContexts } from './seed-card-contexts';
import { DatabaseSeeder } from './database.seeder';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: ArcanaType.name, schema: ArcanaTypeSchema },
      { name: Suit.name, schema: SuitSchema },
      { name: Card.name, schema: CardSchema },
      { name: Deck.name, schema: DeckSchema },
      { name: Context.name, schema: ContextSchema },
      { name: CardContext.name, schema: CardContextSchema },
      { name: SpreadType.name, schema: SpreadTypeSchema },
      { name: Question.name, schema: QuestionSchema }
    ])
  ],
  providers: [
    {
      provide: Connection,
      useFactory: (connection: Connection) => connection,
      inject: [getConnectionToken()]
    },
    DatabaseSeeder,
    ContextsSeeder,
    SeedCardContexts
  ],
  exports: [DatabaseSeeder]
})
export class MigrationsModule {} 