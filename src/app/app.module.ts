import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KanbanModule ,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
