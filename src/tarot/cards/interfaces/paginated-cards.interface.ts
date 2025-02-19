import { Card } from '../schemas/card.schema';

export interface PaginatedCards {
  items: Card[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
} 