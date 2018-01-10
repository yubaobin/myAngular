import { Component, Input } from "@angular/core";
import { Book } from './book';

@Component({
  selector: 'book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})

export class BookView {
  @Input() book: Book;
  btnText: String = '展开';
  showD: boolean = false;
  showDetail() {
    if(this.showD) {
      this.btnText = '展开';
    }else {
      this.btnText = '收起';
    }
    this.showD = !this.showD;
  }
}
