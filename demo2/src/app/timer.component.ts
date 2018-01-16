import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent implements OnInit {

  num:number = 0;
  timerId = 0;
  width:string = '100px';
  constructor() { }

  ngOnInit() {
  }

  start() {
    this.count();
  }
  stop() {
    this.clearTimer();
  }
  reset() {
    this.clearTimer();
    this.num = 0;
  }
  count() {
    this.timerId = window.setInterval( () => {
      this.num+=100;
    }, 10)
  }
  clearTimer() {
    window.clearInterval(this.timerId);
  }
}
