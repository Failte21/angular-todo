import {Component, OnInit} from '@angular/core';
import { Count } from '../count';
import { COUNTS } from '../mock-counts';

@Component({
  selector: 'app-counts',
  template: `
    <form (ngSubmit)="submit()">
      <input type="text" [(ngModel)]="newCount" name="newCount" required>
      New: {{newCount}}
    </form>
    <h1>Liste des comptes</h1>
    <ul *ngFor="let count of counts">
      <button (click)="select(count)">{{count.title}}</button>
    </ul>
    <app-count [count]="selected"></app-count>
  `
})

export class CountsComponent implements OnInit {
  counts: Count[];
  newCount: String = '';
  selected: Count;
  ngOnInit() {
    this.counts = COUNTS;
  }
  select(count: Count): void {
    this.selected = count;
  }
  submit(): void {
    this.newCount = '';
  }
}
