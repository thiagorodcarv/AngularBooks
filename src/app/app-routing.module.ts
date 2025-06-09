import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Books
import { BookListComponent } from './books/book-list/book-list.component';
import { BookAddComponent } from './books/book-add/book-add.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

// Authors
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorAddComponent } from './authors/author-add/author-add.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';

// Genrers
import { GenrerListComponent } from './genrers/genrer-list/genrer-list.component';
import { GenrerAddComponent } from './genrers/genrer-add/genrer-add.component';
import { GenrerEditComponent } from './genrers/genrer-edit/genrer-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },

  // Books
  { path: 'books', component: BookListComponent },
  { path: 'books/new', component: BookAddComponent },
  { path: 'books/:id/edit', component: BookEditComponent },
  { path: 'books/:id', component: BookDetailsComponent },

  // Authors
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/new', component: AuthorAddComponent },
  { path: 'authors/:id/edit', component: AuthorEditComponent },

  // Genrers
  { path: 'genrers', component: GenrerListComponent },
  { path: 'genrers/new', component: GenrerAddComponent },
  { path: 'genrers/:id/edit', component: GenrerEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
