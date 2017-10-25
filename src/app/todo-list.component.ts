import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo-service';
import { Todo } from './todo';
import {TODOS} from './mock-todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(
    private todoService: TodoService
  ) {}
  ngOnInit() {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }
  add(name: string): void {
    this.todoService.add(name).then(todo => this.todos.push(todo));
  }
}
