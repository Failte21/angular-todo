import {Injectable} from '@angular/core';
import {Count} from './count';
import {Http} from '@angular/http';

@Injectable()

export class CountService {
  constructor( private http: Http ) {}
  getAll(): Promise<Count[]> {
    return this.http
      .get('/api/counts')
      .toPromise()
      .then(res => res.json().body as Count[])
      .catch(err => this.handleError);
  }
  get(id: Number): Promise<Count> {
    return this.http
      .get(`api/counts/${id}`)
      .toPromise()
      .then(res => res.json().body as Count)
      .catch(this.handleError);
  }
  create(newCount: any): Promise<Count> {
    return this.http
      .post('api/counts', newCount)
      .toPromise()
      .then(res => res.json().body as Count)
      .catch(this.handleError);
  }
  handleError(error) {
    console.log(error);
    return Promise.reject(error || error.message);
  }
}
