import {Component, Input, Output, EventEmitter} from "@angular/core";
import { Book } from './book';

import { MissionService } from './mission.service';

@Component({
  selector: 'book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.less'],
})

export class BookView {

  btnText: String = '展开';
  showD: boolean = false;

  constructor(private missionService: MissionService) {}

  @Input() book: Book;
  @Output() clickBook = new EventEmitter<any>();
  showDetail() {
    if(this.showD) {
      this.btnText = '展开';
    }else {
      this.btnText = '收起';
    }
    this.showD = !this.showD;

    this.clickBook.emit(this.book.title);
  }
  getMission() {
    console.log(this.missionService.getMission());
  }
}
