import { Component } from "@angular/core";
import { Book } from "./book";

@Component({
  selector: 'book-list',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})

export class BookList {
  bookList: Array<Book> = [];

  constructor() {
    for(let i=0;i<10;i++) {
      let book = new Book();
      book.title = `书本${i}`;
      book.desc = `详情内容详情内容详情内容详情内容详情内容${i}`;
      this.bookList.push(book);
    }
  }
}
