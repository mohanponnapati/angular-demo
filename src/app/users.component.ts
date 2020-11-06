import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'users',
    template: `
        <div *ngFor="let user of apiService.users">
            <mat-card [routerLink]="['/profile', user._id]" routerLinkActive="router-link-active" style="cursor: pointer">{{user.name}}</mat-card>
        </div>
    `
})
export class UsersComponent implements OnInit {

    constructor(public apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getUsers();
    }
}
