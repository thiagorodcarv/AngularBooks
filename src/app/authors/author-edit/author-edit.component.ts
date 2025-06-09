import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html'
})
export class AuthorEditComponent implements OnInit {
  author: Author = { id: 0, name: '' };

  constructor(private route: ActivatedRoute, private service: AuthorService, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.get(id).subscribe(data => this.author = data);
  }

  onSubmit() {
    this.service.update(this.author.id, this.author).subscribe(() => this.router.navigate(['/authors']));
  }
}
