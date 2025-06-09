import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genrer } from '../models/genrer.model';

@Injectable({ providedIn: 'root' })
export class GenrerService {
  
  private apiUrl = 'http://localhost:5032/Genrers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Genrer[]> { return this.http.get<Genrer[]>(this.apiUrl); }
  get(id: number): Observable<Genrer> { return this.http.get<Genrer>(`${this.apiUrl}/${id}`); }
  add(genrer: Genrer): Observable<Genrer> { return this.http.post<Genrer>(this.apiUrl, genrer); }
  update(id: number, genrer: Genrer): Observable<Genrer> { return this.http.put<Genrer>(`${this.apiUrl}/${id}`, genrer); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}
