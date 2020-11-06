import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of apiService.messages">
            <mat-card>{{message.msg}}</mat-card>
        </div>
    `
})
export class MessagesComponent implements OnInit {

    constructor(public apiService: ApiService, private router: ActivatedRoute) { }

    ngOnInit(): void {
        const userId = this.router.snapshot.params.id;
        this.apiService.getMessages(userId);
    }
}
