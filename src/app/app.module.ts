import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';


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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,

    // Books
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
    BookDetailsComponent,

    // Authors
    AuthorListComponent,
    AuthorAddComponent,
    AuthorEditComponent,

    // Genrers
    GenrerListComponent,
    GenrerAddComponent,
    GenrerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule, // ✅ aqui é o lugar correto
    BrowserAnimationsModule,

    // Material Design
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
