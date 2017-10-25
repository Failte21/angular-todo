import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoListComponent} from './todo-list.component';
import {TodoComponent} from './todo.component';
import {TodoService} from './todo-service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
