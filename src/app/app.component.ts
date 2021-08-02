import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
  jsonValue = {
    a: "Hi,hello",
    b: "world"
  }

  newDate = new Date();
  handleEvent() {
    console.log("Button Clicked", this.title)
  }
}
