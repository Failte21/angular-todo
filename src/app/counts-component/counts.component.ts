import {Component, OnInit} from '@angular/core';
import { Count } from '../count';
import {CountService} from '../count.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-counts',
  template: `
    <a routerLink="/createCount">New count</a>
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
  constructor(
    private countService: CountService,
    private router: Router
  ) {}
  ngOnInit() {
    this.countService.getAll()
      .then(counts => this.counts = counts);
  }
  select(selected: Count): void {
    this.countService.get(selected._id)
      .then(count => this.selected = count);
  }
  submit(): void {
    // this.counts = this.countService.create(COUNTS[0]);
    this.router.navigate(['countForm', this.newCount]);
  }
}
