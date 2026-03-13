import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { BookDto } from '../../models/book.model';

@Component({
    selector: 'app-book-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './book-form.component.html',
    styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit {
    isEditMode = false;
    bookId: number | null = null;
    errorMessage = '';
    successMessage = '';

    book: BookDto = {
        title: '',
        author: '',
        isbn: '',
        publicationDate: ''
    };

    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode = true;
            this.bookId = +id;
            this.bookService.getById(this.bookId).subscribe({
                next: (data) => {
                    this.book = {
                        title: data.title,
                        author: data.author,
                        isbn: data.isbn,
                        publicationDate: data.publicationDate
                            ? data.publicationDate.toString().substring(0, 10)
                            : ''
                    };
                },
                error: () => this.errorMessage = 'Failed to load book.'
            });
        }
    }

    onSubmit(): void {
        if (this.isEditMode && this.bookId !== null) {
            this.bookService.update(this.bookId, this.book).subscribe({
                next: () => {
                    this.successMessage = 'Book updated successfully!';
                    setTimeout(() => this.router.navigate(['/books']), 1500);
                },
                error: () => this.errorMessage = 'Failed to update book.'
            });
        } else {
            this.bookService.add(this.book).subscribe({
                next: () => {
                    this.successMessage = 'Book added successfully!';
                    setTimeout(() => this.router.navigate(['/books']), 1500);
                },
                error: () => this.errorMessage = 'Failed to add book.'
            });
        }
    }

    onCancel(): void {
        this.router.navigate(['/books']);
    }
}