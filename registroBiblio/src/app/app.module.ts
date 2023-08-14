import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CanDeactivateGuard } from './can-deactivate.guard';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    EditBookComponent,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}



