import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo-service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent implements OnInit {
  todos: Todo[];
  todo: string = '';
  constructor(
    private todoService: TodoService
  ) {}
  ngOnInit(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }
  onSubmit(): void {
    this.todoService.add(this.todo).then(todo => this.todos.push(todo));
    this.todo = '';
  }

  delete(todo: Todo): void {
    this.todoService.delete(todo._id)
      .then(todo => {
        this.todos = this.todos.filter(e => e._id !== todo._id)
      });
  }
  complete(todo: Todo): void {
    this.todoService.update(todo._id, 'completed', !todo.completed)
      .then(elem => {
        const toUpdate: Todo = this.todos.find(e => e._id === elem._id);
        const updated: Todo = {...toUpdate, completed: !toUpdate.completed};
        const stripped: Todo[] = this.todos.filter(e => e._id !== elem._id);
        this.todos = [...stripped, updated];
      });
  }
}
