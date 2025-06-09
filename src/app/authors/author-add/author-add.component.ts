import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html'
})
export class AuthorAddComponent {
  author: Author = { id: 0, name: '' };

  constructor(private service: AuthorService, private router: Router) {}

  onSubmit() {
    this.service.add(this.author).subscribe(() => this.router.navigate(['/authors']));
  }
}
