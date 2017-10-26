import {Component, OnInit} from '@angular/core';

const EXPENSES: Expense[] = [
  {user: 'Liz', date: Date.now(), amount: 2, title: 'Coffee'},
  {user: 'Leo', date: Date.now(), amount: 1.10, title: 'Baguette tradition'}
];

const COUNTS: Count[] = [
  {users: ['Liz', 'Leo'], _id: 0, title: 'life', expenses: EXPENSES}
];

export class Expense {
  user: String;
  date: any;
  amount: Number;
  title: String;
}

export class Count {
  _id: Number;
  title: string;
  users: string[];
  expenses: Expense[];
}

@Component({
  selector: 'app-counts',
  template: `
    <h1>Liste des comptes</h1>
    <ul *ngFor="let count of counts">
      <li>{{count.title}}</li>
    </ul>
  `
})

export class CountsComponent implements OnInit{
  counts: Count[];
  ngOnInit() {
    this.counts = COUNTS;
  }
}
