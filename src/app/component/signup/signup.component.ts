import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formPasswordValidator } from './FormPasswordValidator';
import { SignupUser } from 'src/app/interface/signupUser';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  signupUser: SignupUser

  constructor(private userService: UserService) { 
    this.signupUser = {
      username: '',
      password: '',
      email: ''
    }

    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },
    {validators: formPasswordValidator}
    )
  }

  ngOnInit(): void {

  }

  signup(){
    this.signupUser.username = this.signupForm.get('username')?.value
    this.signupUser.password = this.signupForm.get('password')?.value
    this.signupUser.email = this.signupForm.get('email')?.value

    console.log("submit");
    

    this.userService.signup(this.signupUser).subscribe(data => {
      console.log("user: ", data)

    })

  }


}
