import {Component, OnInit} from '@angular/core';
import { Count } from '../count';
import { COUNTS } from '../mock-counts';
import {CountService} from '../count.service';
import {EXPENSES} from '../mock-expenses';

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
  constructor( private countService: CountService ) {};
  ngOnInit() {
    this.counts = this.countService.getAll();
  }
  select(count: Count): void {
    this.selected = this.countService.get(count.title);
  }
  submit(): void {
    this.counts = this.countService.create(COUNTS[0]);
    this.newCount = '';
  }
}
