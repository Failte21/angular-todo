import { Component, OnInit } from '@angular/core';
import {CountService} from '../count.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-count',
  template: `
    <label for="title">Title: </label>
    <input name="title" [(ngModel)] = "title">
    <form (ngSubmit)="addUser()">
      <label for="user">User: </label>
      <input name="user" [(ngModel)]="user" required>
      <button type="submit">Add a user</button>
    </form>
    <div>
      <h2>{{title}}</h2>
    </div>
    <ul *ngFor="let user of users">
      <li>
        {{user}}
        <button (click)="removeUser(user)"><i class="fa fa-times"></i></button>
      </li>
    </ul>
    <button *ngIf="users.length > 1 && title" (click)="createCount()">Create</button>
  `
})

export class CreateCountComponent {
  user: String = '';
  title: String = 'New count';
  users: String[] = [];
  constructor(private countService: CountService, private router: Router) {}
  addUser(): void {
    if (this.users.indexOf(this.user) < 0){
      this.users.push(this.user);
    } else {
      console.log('this user already exists');
    }
    this.user = '';
  }
  removeUser(userName: String): void {
    this.users = this.users.filter(e => e !== userName);
  }
  createCount(): void {
    this.countService.create({title: this.title, users: this.users})
      .then(count => {
        console.log(count);
        this.router.navigate(['/']);
      });
  }
}
