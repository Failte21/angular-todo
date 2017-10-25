import {Injectable} from '@angular/core';
import {TODOS} from './mock-todos';
import {Todo} from './todo';
import {Http} from '@angular/http';

@Injectable()

export class TodoService {
  constructor(private http: Http) {}

  getTodos(): Promise<Todo[]> {
    return this.http
      .get('/api/todos')
      .toPromise()
      .then(res => res.json() as Todo[] )
      .catch(this.handleError);
  }
  add(text: string): Promise<Todo> {
    return this.http
      .post('/api/todos', {text})
      .toPromise()
      .then(res => res.json().body as Todo)
      .catch(err => console.log(err));
  }

  delete(id: number): void {
    console.log('DELETE: ', id);
  }
  handleError(err) {
    console.error(err || err.message);
    return Promise.reject(err);
  }
}
