import {Injectable} from '@angular/core';
import {TODOS} from './mock-todos';
import {Todo} from './todo';

@Injectable()

export class TodoService {
  getTodos(): Todo[] {
    return TODOS;
  }
}
