import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
    selector: 'profile',
    template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>Profile</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <mat-list>
                <mat-list-item>
                    Name: {{profile?.name}}
                </mat-list-item>
                <mat-list-item>
                    Email: {{profile?.email}}
                </mat-list-item>
                <mat-list-item>
                    Description: {{profile?.description}}
                </mat-list-item>
            </mat-list>
        </mat-card-content>
    </mat-card>
    <mat-card>
        <mat-card-header>
            <mat-card-title>Posts</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <messages></messages>
        </mat-card-content>
    </mat-card>
  `,
    styleUrls: ['./register.component.scss']
})
export class ProfileComponent implements OnInit {

    public profile: any;

    constructor(private apiService: ApiService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.apiService.getProfile(id).subscribe(data => this.profile = data);
    }

}
