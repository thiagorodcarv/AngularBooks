import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author.model';

@Injectable({ providedIn: 'root' })
export class AuthorService {
  private apiUrl = 'http://localhost:5032/Authors';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Author[]> { return this.http.get<Author[]>(this.apiUrl); }
  get(id: number): Observable<Author> { return this.http.get<Author>(`${this.apiUrl}/${id}`); }
  add(author: Author): Observable<Author> { return this.http.post<Author>(this.apiUrl, author); }
  update(id: number, author: Author): Observable<Author> { return this.http.put<Author>(`${this.apiUrl}/${id}`, author); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}
