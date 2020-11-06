import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public messages: any = [];
  public users: any = [];

  constructor(private http: HttpClient) { }

  public getMessages(userId: any): void {
    this.http.get(`${environment.path}/posts/${userId}`).subscribe(res => this.messages = res);
  }

  public postMessage(message): void {
    this.http.post<any>(`${environment.path}/post`, message).subscribe(res => {});
  }

  public getUsers(): void {
    this.http.get(`${environment.path}/users`).subscribe(res => this.users = res);
  }

  public getProfile(id: any): Observable<any> {
    return this.http.get(`${environment.path}/profile/${id}`);
  }
}
