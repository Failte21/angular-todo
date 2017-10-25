import {Injectable} from '@angular/core';
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

  delete(id: number): Promise<Todo> {
    return this.http
      .delete(`/api/todos/${id}`)
      .toPromise()
      .then(res => res.json().body as Todo)
      .catch(this.handleError);
  }

  update(id: number, field: string, value: any): Promise<Todo> {
    console.log(field, value);
    return this.http
      .put(`/api/todos/${id}`, {field, value})
      .toPromise()
      .then(res => {
        console.log(res.json());
        return res.json().body as Todo;
      })
      .catch(this.handleError);
  }

  handleError(err) {
    console.error(err || err.message);
    return Promise.reject(err);
  }
}
