import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public registerData: any = {};

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
    }

    post(): void {
        this.authService.registerUser(this.registerData);
    }


}
