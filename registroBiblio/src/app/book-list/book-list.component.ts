import { Component, OnInit } from '@angular/core';
import { BookService } from '../books.service';
import { Book } from '../models/book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (books: Book[]) => {
        this.books = books;
      },
      (error: any) => {
        console.error('Error getting books:', error);
      }
    );
  }
}




