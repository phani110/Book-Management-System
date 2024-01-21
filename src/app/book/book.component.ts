import { Component } from '@angular/core';
import { BookModelTs } from '../models/book.model.ts';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  ngOnInit(): void {
    console.log("Books");
  }
  
  bookAuthor: string = "";
  bookTitle: string = "";
  books: BookModelTs[] = [];

  addBook() { 
    let count = this.books.length;
    let newBook: BookModelTs = {
      id: ++count,
      title: this.bookTitle,
      author: this.bookAuthor
    }

    if (this.bookAuthor && this.bookTitle) { 
      this.books.push(newBook);
  
      localStorage.setItem('books', JSON.stringify(this.books));
  
      this.bookAuthor = "";
      this.bookTitle = "";
    }
  }

  removeBook(index:number) {
    this.books.splice(index, 1);
    localStorage.setItem('books',JSON.stringify(this.books))
  }
}
