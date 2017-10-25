import {Component, Input} from '@angular/core';
import { Todo } from './todo';
import {TodoService} from './todo-service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})

export class TodoComponent {
  @Input() todo: Todo;
  constructor(private todoService: TodoService) {}
  delete() {
    this.todoService.delete(this.todo.id);
  }
}
