import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../books.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.formBuilder.group({
      image: '',
      name: '',
      editorial: '',
      gender: '',
      author: ''
    });
  }

  onSubmit(): void {
    const newBook = this.bookForm.value;
    this.bookService.createBook(newBook).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}




