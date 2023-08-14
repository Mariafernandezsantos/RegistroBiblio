import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Book>(url, book);
  }

  deleteBook(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}


