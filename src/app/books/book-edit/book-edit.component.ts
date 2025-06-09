import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { GenrerService } from '../../services/genrer.service';
import { Author } from '../../models/author.model';
import { Genrer } from '../../models/genrer.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html'
})
export class BookEditComponent implements OnInit {
  book = {
    id: 0,
    title: '',
    authorId: 0,
    genrerId: 0
  };

  authors: Author[] = [];
  genrers: Genrer[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
    private genrerService: GenrerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Carrega dados necessários
    this.bookService.getBook(id).subscribe(data => {
      this.book.id = data.id;
      this.book.title = data.title;
      this.book.authorId = data.authorId;
      this.book.genrerId = data.genrerId;
    });

    this.authorService.getAll().subscribe(data => this.authors = data);
    this.genrerService.getAll().subscribe(data => this.genrers = data);
  }

  onSubmit(): void {
    this.bookService.update(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
