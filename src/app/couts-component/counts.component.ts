import {Component, OnInit} from '@angular/core';
import { Count } from '../count';
import { COUNTS } from '../mock-counts';

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
