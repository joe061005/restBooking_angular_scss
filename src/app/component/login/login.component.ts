import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUser } from 'src/app/interface/loginUser';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  loginUser: LoginUser

  constructor(private userService: UserService) { 
    this.loginUser = {
      username: '',
      password: '',
    }

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.loginUser.username = this.loginForm.get('username')?.value
    this.loginUser.password = this.loginForm.get('password')?.value
    
    this.userService.login(this.loginUser).subscribe(data => {
      console.log(data);
      
    })

    
  }

}
