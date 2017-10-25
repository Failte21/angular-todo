import {Component} from '@angular/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'app-todo-addform',
  templateUrl: './todo-addbar.component.html'
})

export class TodoAddformComponent {
  constructor( private todoService: TodoService) {}
  add(name: string): void {
    this.todoService.add(name)
  }
}
