import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenrerService } from '../../services/genrer.service';
import { Genrer } from '../../models/genrer.model';

@Component({
  selector: 'app-genrer-add',
  templateUrl: './genrer-add.component.html'
})
export class GenrerAddComponent {
  genrer: Genrer = { id: 0, name: '' };

  constructor(private service: GenrerService, private router: Router) {}

  onSubmit() {
    this.service.add(this.genrer).subscribe(() => this.router.navigate(['/genrers']));
  }
}
