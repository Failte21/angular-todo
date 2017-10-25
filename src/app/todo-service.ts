import {Injectable} from '@angular/core';
import {TODOS} from './mock-todos';
import {Todo} from './todo';

@Injectable()

export class TodoService {
  private todos: Todo[] = TODOS;
  getTodos(): Todo[] {
    return this.todos;
  }
  add(name: string): void {
    this.todos.push({id: 1, name});
  }
  delete(id: number): void {
    console.log('DELETE: ', id);
  }
}
