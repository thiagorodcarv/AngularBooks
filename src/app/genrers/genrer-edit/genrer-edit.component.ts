import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenrerService } from '../../services/genrer.service';
import { Genrer } from '../../models/genrer.model';

@Component({
  selector: 'app-genrer-edit',
  templateUrl: './genrer-edit.component.html'
})
export class GenrerEditComponent implements OnInit {
  genrer: Genrer = { id: 0, name: '' };

  constructor(private route: ActivatedRoute, private service: GenrerService, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.get(id).subscribe(data => this.genrer = data);
  }

  onSubmit() {
    this.service.update(this.genrer.id, this.genrer).subscribe(() => this.router.navigate(['/genrers']));
  }
}
