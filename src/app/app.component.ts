import { Component } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public user : User;

  constructor(private userService: UserService){}

  public login(): void {
    
  }
}
