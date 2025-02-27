import { Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { seedArcanaTypes } from './seed-arcana-types';
import { seedSuits } from './seed-suits';
import { seedCards } from './seed-cards';
import { seedDecks } from './seed-decks';
import { seedUsers } from './seed-users';
import { seedSpreadTypes } from './seed-spread-types';
import { ContextsSeeder } from './seed-contexts';
import { SeedCardContexts } from './seed-card-contexts';
import { seedQuestions } from './seed-questions';

@Injectable()
export class DatabaseSeeder {
  constructor(
    @InjectConnection() private connection: Connection,
    private contextsSeeder: ContextsSeeder,
    private cardContextsSeeder: SeedCardContexts,
  ) {}

  async seed() {
    try {
      console.log('🌱 Bắt đầu seeding database...');
      
      // 1. Seed Users
      console.log('Seeding Users...');
      await seedUsers(this.connection);
      
      // 2. Seed Arcana Types
      console.log('Seeding Arcana Types...');
      await seedArcanaTypes(this.connection);
      
      // 3. Seed Suits
      console.log('Seeding Suits...');
      await seedSuits(this.connection);
      
      // 4. Seed Decks
      console.log('Seeding Decks...');
      await seedDecks(this.connection);
      
      // 5. Seed Cards
      console.log('Seeding Cards...');
      await seedCards(this.connection);
      
      // 6. Seed Contexts
      console.log('Seeding Contexts...');
      await this.contextsSeeder.seed();
      
      // 7. Seed Card Contexts
      console.log('Seeding Card Contexts...');
      await this.cardContextsSeeder.run();

      // 8. Seed Spread Types
      console.log('Seeding Spread Types...');
      await seedSpreadTypes(this.connection);
      
      // 9. Seed Questions
      console.log('Seeding Questions...');
      await seedQuestions(this.connection);
      
      console.log('✅ Database seeding hoàn tất!');
    } catch (error) {
      console.error('❌ Lỗi trong quá trình seeding:', error);
      throw error;
    }
  }
} 