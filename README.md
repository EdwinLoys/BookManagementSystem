# 📚 Book Management System

A full-stack web application for managing a list of books, built with Angular (frontend) and ASP.NET Core (backend).

---

## 🗂️ Project Structure
```
BookManagement/
├── BookManagement.API/         # ASP.NET Core Web API (.NET 10)
└── BookManagement.Client/      # Angular Frontend (Angular 19)
```

---

## 🛠️ Technologies Used

### Frontend
- Angular 19
- TypeScript
- HTML5 & CSS3
- Angular HttpClient
- Angular Reactive Forms

### Backend
- ASP.NET Core (.NET 10 LTS)
- C#
- RESTful Web API
- Swagger / OpenAPI
- In-Memory Data Storage

---

## ✨ Features

- View all books in a table
- Add a new book
- Edit an existing book
- Delete a book
- Form validation (required fields, ISBN format)
- Swagger UI for API testing
- CORS configured for Angular frontend

---

## 📋 Book Model

| Field           | Type      | Description              |
|----------------|-----------|--------------------------|
| Id             | int       | Auto-generated unique ID |
| Title          | string    | Title of the book        |
| Author         | string    | Author of the book       |
| Isbn           | string    | ISBN (XXX-XXXXXXXXXX)    |
| PublicationDate| DateTime? | Date of publication      |

---

## 🚀 Getting Started

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [Node.js (LTS)](https://nodejs.org)
- [Angular CLI](https://angular.io/cli)
```bash
npm install -g @angular/cli
```

---

### ▶️ Run the Backend
```bash
cd BookManagement.API
dotnet run
```

API will start at:
```
http://localhost:5103
```
Swagger UI available at:
```
http://localhost:5103/swagger
```
---

### ▶️ Run the Frontend
```bash
cd BookManagement.Client
ng serve
```
App will start at:
```
http://localhost:4200
```

---

## 🔗 API Endpoints

| Method | Endpoint           | Description        |
|--------|--------------------|--------------------|
| GET    | /api/books         | Get all books      |
| GET    | /api/books/{id}    | Get book by ID     |
| POST   | /api/books         | Add a new book     |
| PUT    | /api/books/{id}    | Update a book      |
| DELETE | /api/books/{id}    | Delete a book      |

---

## 📁 Frontend Structure
```
src/app/
├── models/
│   └── book.model.ts
├── services/
│   └── book.service.ts
├── components/
│   ├── book-list/
│   └── book-form/
├── app.routes.ts
├── app.config.ts
└── app.component.ts
```

---

## 📁 Backend Structure
```
BookManagement.API/
├── Controllers/
│   └── BooksController.cs
├── Models/
│   ├── Book.cs
│   └── DTOs/
│       └── BookDto.cs
├── Services/
│   ├── IBookService.cs
│   └── BookService.cs
└── Program.cs
```

---

## 👤 Author

**Clington Loys / Edwin Kulanathan**  
Junior Software Engineer  
DesignSoft Technologies, Colombo

---

## 📄 License

This project is for assessment purposes.
