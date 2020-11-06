import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public tokenKey = 'token';

  constructor(private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem(this.tokenKey);
  }

  get isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  public logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public registerUser(registerData: any): void {
    this.http.post<any>(`${environment.path}/auth/register`, registerData).subscribe(res => {
      this.saveToken(res.token);
    });
  }

  public loginUser(loginData: any): void {
    this.http.post<any>(`${environment.path}/auth/login`, loginData).subscribe(res => {
      this.saveToken(res.token);
    });
  }

  public saveToken(token): void {
    localStorage.setItem(this.tokenKey, token);
  }
}
