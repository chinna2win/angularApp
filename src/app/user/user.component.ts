import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


interface UsreInterface {
  name: string;
  age: string;
  id: number;
  isColored: boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: UsreInterface;

  @Output() userCustomEvent: EventEmitter<UsreInterface>;

  isColored: boolean = false;
  
  constructor() {     
    this.userCustomEvent = new EventEmitter<UsreInterface>();
    this.user = {} as UsreInterface;    
  }

  ngOnInit(): void {
    this.isColored = this.user.isColored;
    console.log(this.user.isColored);
  }

  sendUserEvent(): void {
    this.userCustomEvent.emit(this.user)
  }

}
