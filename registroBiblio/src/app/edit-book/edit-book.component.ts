import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../books.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (books: Book[]) => {
        this.book = books;
      },
      (error: any) => {
        console.error('Error getting books:', error);
      }
    );
  }


  saveChanges() {
    const updatedBook: Book = {
      id: this.book.id,
      image: 'nueva-url-imagen',
      name: 'Nuevo nombre',
      editorial: 'Nueva editorial',
      gender: 'Nuevo género',
      author: 'Nuevo autor'
    };

    this.bookService.updateBook(updatedBook.id, updatedBook).subscribe(
      () => {
        this.router.navigate(['../book-list']);
      },
      (error: any) => {
        console.error('Error update books::', error);
      }
    );
  }
}
