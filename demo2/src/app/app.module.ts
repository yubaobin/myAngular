import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookList } from './booklist.component';
import { BookView } from './book-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BookList,
    BookView
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
