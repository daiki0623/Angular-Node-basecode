import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from '../model/response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  id: string = '';
  msg: string =
    'ボタンを押下するとサービスと通信してサービスからのメッセージを表示します';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  callRequest(): void {
    this.id = '';
    this.msg = 'Hello World';
    this.http
      .post(`${environment.backendUrl}/postRequest`, { msg: this.msg })
      .subscribe((response: response) => {
        this.msg = JSON.stringify(response);
        this.id = response.id;
      });
  }
  callResult(): void {
    this.msg = '';
    this.http
      .get(`${environment.backendUrl}/getResults?id=${this.id}`)
      .subscribe((response: response) => {
        this.msg = JSON.stringify(response);
        this.id = response.id;
      });
  }
}
