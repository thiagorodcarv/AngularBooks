import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { GenrerService } from '../../services/genrer.service';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

interface BookEntity {
  id: number;
  title: string;
  authorId: number;
  genrerId: number;
}

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    genrer: ''
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
    private genrerService: GenrerService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.bookService.getBook(id).subscribe(bookEntity => {
      this.book.id = bookEntity.id;
      this.book.title = bookEntity.title;

      this.authorService.get(bookEntity.authorId).subscribe(author =>
        this.book.author = author.name
      );

      this.genrerService.get(bookEntity.genrerId).subscribe(genrer =>
        this.book.genrer = genrer.name
      );
    });
  }
}
