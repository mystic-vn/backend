import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TarotCard } from '../../cards/entities/card.entity';

@Entity('tarot_decks')
export class TarotDeck {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  coverImage: string;

  @Column({ nullable: true })
  backImage: string;

  @OneToMany(() => TarotCard, (card) => card.deck)
  cards: TarotCard[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 