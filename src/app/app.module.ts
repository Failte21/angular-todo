import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app-component/app.component';
import {TodoListComponent} from './todo-list-component/todo-list.component';
import {TodoService} from './todo-service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {CountsComponent} from './counts-component/counts.component';
import {CountComponent} from './count-component/count.component';
import {CountService} from './count.service';
import {CreateCountComponent} from './create-count-component/create-count.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CountsComponent,
    CountComponent,
    CreateCountComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CountsComponent },
      { path: 'createCount', component: CreateCountComponent }
    ])
  ],
  providers: [
    TodoService,
    CountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
