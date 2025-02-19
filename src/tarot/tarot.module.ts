import { Module } from '@nestjs/common';
import { DecksModule } from './decks/decks.module';
import { CardsModule } from './cards/cards.module';
import { CardContextsModule } from './card-contexts/card-contexts.module';
import { ContextsModule } from './contexts/contexts.module';
import { SuitsModule } from './suits/suits.module';
import { ArcanaTypesModule } from './arcana-types/arcana-types.module';

@Module({
  imports: [
    DecksModule, 
    CardsModule, 
    CardContextsModule, 
    ContextsModule, 
    SuitsModule,
    ArcanaTypesModule
  ],
  exports: [
    DecksModule, 
    CardsModule, 
    CardContextsModule, 
    ContextsModule, 
    SuitsModule,
    ArcanaTypesModule
  ],
})
export class TarotModule {} 