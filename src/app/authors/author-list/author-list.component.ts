import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author.model';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html'
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];
  displayedColumns: string[] = ['name', 'actions'];
  
  constructor(private authorService: AuthorService) {}

  ngOnInit(): void { this.load(); }

  load() {
    this.authorService.getAll().subscribe(data => this.authors = data);
  }

  delete(id: number) {
    if (confirm('Delete?')) {
      this.authorService.delete(id).subscribe(() => this.load());
    }
  }
}
