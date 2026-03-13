export interface Book {
    id: number;
    title: string;
    author: string;
    isbn: string;
    publicationDate: string;
}

export interface BookDto {
    title: string;
    author: string;
    isbn: string;
    publicationDate: string;
}