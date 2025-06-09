import { Book } from './book.model';

export interface BookPagedResponse {
  items: Book[];
  totalItems: number;
  page: number;
  pageSize: number;
}