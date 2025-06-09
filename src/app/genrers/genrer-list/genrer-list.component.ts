import { Component, OnInit } from '@angular/core';
import { Genrer } from '../../models/genrer.model';
import { GenrerService } from '../../services/genrer.service';

@Component({
  selector: 'app-genrer-list',
  templateUrl: './genrer-list.component.html'
})
export class GenrerListComponent implements OnInit {
  genrers: Genrer[] = [];
  displayedColumns: string[] = ['name', 'actions'];
  constructor(private genrerService: GenrerService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.genrerService.getAll().subscribe(data => this.genrers = data);
  }

  delete(id: number) {
    if (confirm('Delete?')) {
      this.genrerService.delete(id).subscribe(() => this.load());
    }
  }
}
