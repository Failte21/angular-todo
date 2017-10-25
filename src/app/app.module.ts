import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoListComponent} from './todo-list.component';
import {TodoComponent} from './todo.component';
import {TodoService} from './todo-service';
import {TodoAddformComponent} from './todo-addform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    TodoAddformComponent,
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
