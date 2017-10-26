import {Component, OnInit} from '@angular/core';
import { Count } from '../count';
import { COUNTS } from '../mock-counts';

@Component({
  selector: 'app-counts',
  template: `
    <h1>Liste des comptes</h1>
    <ul *ngFor="let count of counts">
      <button (click)="select(count)">{{count.title}}</button>
    </ul>
    <app-count [count]="selected"></app-count>
  `
})

export class CountsComponent implements OnInit{
  counts: Count[];
  selected: Count;
  ngOnInit() {
    this.counts = COUNTS;
  }
  select(count: Count): void {
    this.selected = count;
  }
}
