import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { GenrerService } from '../../services/genrer.service';
import { Author } from '../../models/author.model';
import { Genrer } from '../../models/genrer.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html'
})
export class BookAddComponent implements OnInit {
  book = {
    title: '',
    authorId: 0,
    genrerId: 0
  };

  authors: Author[] = [];
  genrers: Genrer[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private genrerService: GenrerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authorService.getAll().subscribe(data => this.authors = data);
    this.genrerService.getAll().subscribe(data => this.genrers = data);
  }

  onSubmit(): void {
    this.bookService.create(this.book).subscribe(() => this.router.navigate(['/books']));
  }
}
