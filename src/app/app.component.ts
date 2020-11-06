import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <button mat-button routerLink="/" style="cursor: pointer">My Application</button>
      <button mat-button routerLink="/users" style="cursor: pointer">Users</button>
      <span style="flex: 1 1 auto"></span>
      <button mat-button *ngIf="!auth.isAuthenticated" routerLink="/register" style="cursor: pointer">Register</button>
      <button mat-button *ngIf="!auth.isAuthenticated" routerLink="/login" style="cursor: pointer">Login</button>
      <button mat-button *ngIf="auth.isAuthenticated" (click)="auth.logout()" style="cursor: pointer">Logout</button>
    </mat-toolbar>
    <br>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
}
