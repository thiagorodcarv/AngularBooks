import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  page = 1;
  pageSize = 10;
  totalItems = 0;

  columnsToDisplay = ['title', 'author', 'genrer', 'actions'];


  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getPagedBooks(this.page, this.pageSize).subscribe(response => {
      this.books = response.items;
      this.totalItems = response.totalItems;
    });
  }

  deleteBook(id: number) {
  if (confirm('Are you sure you want to delete this book?')) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks();
    });
  }
}


  nextPage() {
    if ((this.page * this.pageSize) < this.totalItems) {
      this.page++;
      this.loadBooks();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadBooks();
    }
  }
}
