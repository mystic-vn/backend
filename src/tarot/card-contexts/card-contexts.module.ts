import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { CardContextsService } from './card-contexts.service';
import { CardContextsController } from './card-contexts.controller';
import { CardContext, CardContextSchema } from './schemas/card-context.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CardContext.name, schema: CardContextSchema }
    ]),
    CacheModule.register({
      ttl: 60 * 1000, // 1 minute
      max: 100,
    }),
  ],
  controllers: [CardContextsController],
  providers: [CardContextsService],
  exports: [CardContextsService],
})
export class CardContextsModule {} 