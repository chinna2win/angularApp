import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hello World';

  userObject = {
    name: 'Samy',
    age: '32',
    id:0,
    isColored: true
  }

  //posts: any = [];
  posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts');

  newDate = new Date();

  showUser: boolean = true;

  constructor(private httpService: HttpService) {}

  handleEvent(event: any) {
    // this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    // .subscribe((response) => {
    //  //this.jsonValue = response;
    //  console.log('hello');
    // })
    console.log(event);
  }

  // getPosts(): any {
  //   this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts')
  //   .subscribe((response) => {
  //     this.posts = response;
  //   })
  // }

  ngOnInit() {
  //  this.getPosts();
  }
}
