import { Component } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // @Input() abc: String -> <app-child [abc] = "abc"></app-child> 

  // @Output() messageEvent = new EventEmitter<string>(); + sendMessage(){this.messageEvent.emit('xxx')} -> <app-child (messageEvent)="receiveMessage"></app-child> + receiveMessage(msg){}
  // OR child: message = 'abc'  + parent: @ViewChild(ChildComponent) child; and ngAfterViewInit(){alert(this.child.message)}

  //property binding: [src] = "variable name"
  //event binding: <button (click)="delete()">delete</button> + <xxx (deleteRequest)="deleteItem($event)"


  public user : User;

  constructor(private userService: UserService){}

  ngOnInit(){

  }

  public login(): void {
   
  }
}
