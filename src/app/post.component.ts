import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'post',
    template: `
        <mat-card>
  <mat-card-header>
    <mat-card-title>New Post</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <form novalidate autocomplete="off" class="example-form">
      <div style="padding: 15px">
        <mat-form-field class="example-full-width">
          <mat-label>Description</mat-label>
          <textarea
            [(ngModel)]="postMsg.msg"
            name="description"
            matInput
            placeholder="post Message"
            type="text"
          ></textarea>
        </mat-form-field><br>
        <button (click)="post()" mat-raised-button color="primary">
          Post
        </button>
      </div>
    </form>
  </mat-card-content>
</mat-card>
`
})
export class PostComponent implements OnInit {

    public postMsg: any = {};

    constructor(public apiService: ApiService) { }

    ngOnInit(): void {
    }

    public post(): void {
        this.apiService.postMessage(this.postMsg);
    }
}
