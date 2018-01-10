import {NgModule ,Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  num:number = 0;
  list:Array<any> = [];
  text:String = '';
  show:Boolean = false;
  @Input() size:number;
  @Output() sizeChange:EventEmitter<any> = new EventEmitter();
  @Output('aliasClick') clickBtn:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  add(btnGroup, $event) {
    this.num++;
    this.clickBtn.emit(this.num);
    this.sizeChange.emit(this.size + this.num);
    this.list.push(this.text);
    if(this.num % 2 === 0) {
      this.show = false;
    }else {
      this.show = true;
    }
  }
}
