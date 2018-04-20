import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directive/highlight.directive';
import { UnlessDirective } from './directive/unless.directive';
import { ExponentialStrengthPipe } from './pipe/exponential-strength.pipe';
import { PeoplePipe } from './pipe/people.pipe';
import { MformComponent } from './mform/mform.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    ExponentialStrengthPipe,
    PeoplePipe,
    MformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
