import { Module } from '@nestjs/common';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Context, ContextSchema } from '../tarot/contexts/schemas/context.schema';
import { CardContext, CardContextSchema } from '../tarot/card-contexts/schemas/card-context.schema';
import { Card, CardSchema } from '../tarot/cards/schemas/card.schema';
import { ContextsSeeder } from './seed-contexts';
import { SeedCardContexts } from './seed-card-contexts';
import { Connection } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Context.name, schema: ContextSchema },
      { name: CardContext.name, schema: CardContextSchema },
      { name: Card.name, schema: CardSchema }
    ])
  ],
  providers: [
    ContextsSeeder,
    SeedCardContexts,
    {
      provide: Connection,
      useFactory: (connection: Connection) => connection,
      inject: [getConnectionToken()]
    }
  ],
  exports: [ContextsSeeder, SeedCardContexts]
})
export class MigrationsModule {} 