import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { seedArcanaTypes } from '../migrations/seed-arcana-types';
import { seedSuits } from '../migrations/seed-suits';
import { seedDecks } from '../migrations/seed-decks';
import { seedCards } from '../migrations/seed-cards';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule implements OnModuleInit {
  constructor(@InjectConnection() private connection: Connection) {}

  async onModuleInit() {
    console.log('DatabaseModule initialized');
    try {
      console.log('Starting to seed arcana types...');
      await seedArcanaTypes(this.connection);

      console.log('Starting to seed suits...');
      await seedSuits(this.connection);

      console.log('Starting to seed decks...');
      await seedDecks(this.connection);

      console.log('Starting to seed cards...');
      await seedCards(this.connection);
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  }
} 