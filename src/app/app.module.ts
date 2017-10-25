import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoListComponent} from './todo-list.component';
import {TodoComponent} from './todo.component';
import {TodoService} from './todo-service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
