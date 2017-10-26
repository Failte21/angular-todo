import {Component, Input} from '@angular/core';
import {Count} from '../count';

@Component({
  selector: 'app-count',
  template: `
    <div *ngIf="count">
      <h2>{{count.title}}</h2>
      <span>Participants: {{count.users}}</span>
    </div>
  `
})

export class CountComponent {
  @Input() count: Count;
}
