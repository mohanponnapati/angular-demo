import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>Login</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form novalidate autocomplete="off" class="example-form">
                <div style="padding: 15px">
                    <mat-form-field class="example-full-width">
                        <mat-label>Email</mat-label>
                        <input [(ngModel)]="loginData.email" name="email" matInput placeholder="Email" type="email">
                    </mat-form-field>

                    <mat-form-field class="example-full-width">
                        <mat-label>Password</mat-label>
                        <input [(ngModel)]="loginData.pwd" name="email" matInput placeholder="Password" type="password">
                    </mat-form-field>
                    <button (click)="post()" mat-raised-button color="primary">Login</button>
                </div>
            </form>
        </mat-card-content>
    </mat-card>
  `,
    styleUrls: ['./register.component.scss']
})
export class LoginComponent implements OnInit {

    public loginData: any = {};

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
    }

    post(): void {
        this.authService.loginUser(this.loginData);
    }


}
