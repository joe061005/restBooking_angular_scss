import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  username: string;

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(){
    //this.tokenService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
  //  this.tokenService.username.subscribe((data: string) => this.username = data);
   // this.isLoggedIn = this.tokenService.isLoggedIn();
    //this.username = this.tokenService.getUserName();
  }

  goToUserProfile() {
    //this.router.navigateByUrl('/user-profile/' + this.username);
  }

  logout() {
   // this.authService.logout();
//this.isLoggedIn = false;
   // this.router.navigateByUrl('');
  }

}
