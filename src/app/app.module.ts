import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app-component/app.component';
import {TodoListComponent} from './todo-list-component/todo-list.component';
import {TodoService} from './todo-service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {CountsComponent} from './couts-component/counts.component';
import {CountComponent} from './count-component/count.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CountsComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
