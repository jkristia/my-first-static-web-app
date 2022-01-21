import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div> - {{message}} - </div>
    <div (click)="onClick()">Click Here</div>
    <div>{{clickMessage}}</div>
    `,
})
export class AppComponent {
  message = 'waiting';
  clickMessage = '';

  constructor(private http: HttpClient) {
    console.log('Lets begin')
    this.load()

    // this.http.get('/api/message')
    //   .subscribe((resp: any) => {
    //     console.log('resp ', resp)
    //     this.message = resp.text
    //   });
  }
  async load() {
    console.log('>> load')
    const resp: any = await this.http.get('/api/message').toPromise()
    console.log('<< load', resp)
    this.message = resp.message || 'oh oh'
  }
  async onClick() {
    console.log('>> onClick')
    const resp: any = await this.http.get('/api/clickmessage').toPromise()
    console.log('<< onClick', resp)
    this.clickMessage = resp.message || 'oh oh'
  }
}