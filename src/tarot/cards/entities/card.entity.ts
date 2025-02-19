import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TarotDeck } from '../../decks/entities/deck.entity';

@Entity('tarot_cards')
export class TarotCard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  deckId: string;

  @Column()
  number: number;

  @Column('simple-array')
  generalKeywords: string[];

  @Column({ type: 'text' })
  generalMeaningUpright: string;

  @Column({ type: 'text' })
  generalMeaningReversed: string;

  @ManyToOne(() => TarotDeck, (deck) => deck.cards)
  deck: TarotDeck;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 