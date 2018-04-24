import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, retry, catchError } from 'rxjs/operators';
import { trigger, state, style, animate, transition,group } from '@angular/animations';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animType', [
      state('fly', style({ transform: 'translateX(0)', fontSize: '18px', color: '#0f0' })),
      state('flying', style({ transform: 'translateX(0)',fontSize: '30px', color: '#00f' })),

      transition('flying <=> fly', animate('100ms ease-out')),
      transition('void => *', [style({ fontSize: '100px',transform: 'translateX(100%)', opacity: 0}), animate(600)]),
      transition('flying => void', [
        group([
          animate("600ms 300ms ease-in", style({transform: 'translateX(230px)'})),
          animate("600ms ease-in", style({fontSize: '150px'})),
        ])
      ])
      // transition('fly => flying', [
      //   style({backgroundColor: '#000'}),
      //   animate(
      //     '6000ms ease-in',
      //     style({backgroundColor: '#0f0'})
      //   )
      // ]),
      // transition('flying => fly', animate('6000ms ease-out')),

    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'app';
  color = '';
  condition = true;
  p1 = 0;
  p2 = 0;
  pls = [{name: 'a'}, { name: 'b'}];
  ps = [];
  canFly = true;

  message$: Observable<string>;
  animType = 'fly';
  isShow = false;
  constructor( private http: HttpClient ) { this.resend(); }
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];
  gethttp() {
    this.http.get('/assets/data.json', { observe: 'response' }).subscribe((data) => {console.log(data)});
  }
  geterror() {
    this.http.get('/assets/data1.json').pipe(retry(3),catchError((err) => Observable.throw(new Error('pipe错误'))))
      .subscribe(
      (data) => {console.log(data)},
      (err) => {console.log(err)}
      );
  }
  gettext() {
    const options = {
      headers: new HttpHeaders({'responseType': 'text'}),
      params: new HttpParams().set('id', "1"),
      responseType: 'text' as 'json'
    }
    this.http.get<string>('/assets/data.json', options).subscribe((result) => console.log(result))
  }
  addP(name) {
    const list = [...this.ps];
    list.push({name: name, canFly: this.canFly});
    // this.ps = [...list];
    this.ps.push({name: name, canFly: this.canFly});
  }
  ngOnInit() {
    this.ps = [...this.pls];
  }

  resend() {
    this.message$ = Observable.interval(500).pipe(
      map(i => `中文${i}`),
      take(this.messages.length)
    );
  }

  toggleAnimType() {
    this.animType = this.animType == 'flying' ? 'fly' : 'flying';
  }

  changeShow() {
    this.isShow = !this.isShow;
  }

  animDone(params) {
    console.log(params);
  }
}
