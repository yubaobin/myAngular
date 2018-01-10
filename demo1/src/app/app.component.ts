import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'ybb';
  changedSize = 12;
  test = { a: true, b: false}
  handleBtn(num) {
    console.log(`触发num:${num}`)
  }
}
