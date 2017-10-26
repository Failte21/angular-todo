import {Injectable} from '@angular/core';
import {COUNTS} from './mock-counts';
import {Count} from './count';

@Injectable()

export class CountService {
  counts: Count[] = COUNTS;
  getAll(): Count[] {
    return this.counts;
  }
  get(title: String): Count {
    return this.counts.find(e => e.title === title);
  }
  create(newCount: Count): Count[] {
    this.counts.push(newCount);
    return this.counts;
  }
}
