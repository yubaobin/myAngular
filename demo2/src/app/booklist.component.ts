import {Component, EventEmitter, Input, Output, SimpleChange, ViewChild} from '@angular/core';
import { Book } from './book';
import { TimerComponent } from './timer.component';
import { MissionService } from './mission.service';
@Component({
  selector: 'book-list',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.less'],
  providers: [MissionService]
})

export class BookList {
  bookList: Array<Book> = [];
  @Input() title: String;
  @Output() titleChange = new EventEmitter<any>();
  @ViewChild(TimerComponent)
  private timer: TimerComponent;
  constructor(private missionService: MissionService) {
    for (let i = 0; i < 10; i++) {
      const book = new Book();
      book.title = `书本${i}`;
      book.desc = `详情内容详情内容详情内容详情内容详情内容${i}`;
      this.bookList.push(book);
    }
  }
  clickBook(bookTitle) {
    this.titleChange.emit(bookTitle);
  }
  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }

  setMission() {
    this.missionService.setMission('任务booklist');
  }
  start() {
    this.timer.start();
  }
  stop() {
    this.timer.stop();
  }
  reset() {
    this.timer.reset();
  }
}
