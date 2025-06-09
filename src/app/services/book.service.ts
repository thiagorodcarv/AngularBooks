import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { BookPagedResponse } from '../models/book-paged-response.model';
import { BookEntity } from '../models/book.dto';

@Injectable({ providedIn: 'root' })
export class BookService {
  
  private apiUrl = 'http://localhost:5032/Books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: number): Observable<BookEntity> {
    return this.http.get<BookEntity>(`${this.apiUrl}/${id}`);
  }

  create(book: { title: string; authorId: number; genrerId: number }) {
    return this.http.post(`${this.apiUrl}`, book);
  }


  update(id: number, book: { id: number; title: string; authorId: number; genrerId: number }) {
    return this.http.put(`${this.apiUrl}/${id}`, book);
  }


  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getPagedBooks(
    page: number = 1,
    pageSize: number = 20,
    ordedBy: string = '',
    direction: string = ''
  ): Observable<BookPagedResponse> {
    let params = new HttpParams()
      .set('page', page)
      .set('pageSize', pageSize);

    if (ordedBy) params = params.set('ordedBy', ordedBy);
    if (direction) params = params.set('direction', direction);

    return this.http.get<BookPagedResponse>(`${this.apiUrl}/list`, { params });
  }
}
