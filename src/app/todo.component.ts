import {Component, Input} from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html'
})

export class TodoComponent {
  @Input() todo: Todo;
}
