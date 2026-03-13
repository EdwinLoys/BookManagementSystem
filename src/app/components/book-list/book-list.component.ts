import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
    selector: 'app-book-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './book-list.component.html',
    styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
    books: Book[] = [];
    errorMessage = '';

    constructor(private bookService: BookService, private router: Router) { }

    ngOnInit(): void {
        this.loadBooks();
    }

    loadBooks(): void {
        this.bookService.getAll().subscribe({
            next: (data) => this.books = data,
            error: () => this.errorMessage = 'Failed to load books.'
        });
    }

    editBook(id: number): void {
        this.router.navigate(['/books/edit', id]);
    }

    deleteBook(id: number): void {
        if (confirm('Are you sure you want to delete this book?')) {
            this.bookService.delete(id).subscribe({
                next: () => this.loadBooks(),
                error: () => this.errorMessage = 'Failed to delete book.'
            });
        }
    }
}