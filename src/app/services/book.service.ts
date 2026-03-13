import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, BookDto } from '../models/book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private apiUrl = 'http://localhost:5103/api/books';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiUrl);
    }

    getById(id: number): Observable<Book> {
        return this.http.get<Book>(`${this.apiUrl}/${id}`);
    }

    add(dto: BookDto): Observable<Book> {
        return this.http.post<Book>(this.apiUrl, dto);
    }

    update(id: number, dto: BookDto): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${id}`, dto);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}