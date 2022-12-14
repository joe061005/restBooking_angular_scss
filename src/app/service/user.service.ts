import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { baseURL } from '../global';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { LoginUser } from '../interface/loginUser';
import { AuthToken } from '../interface/authToken';
import { SignupUser } from '../interface/signupUser';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // initialize the variable
  constructor(private http: HttpClient) { }

  public login(loginUser: LoginUser): Observable<AuthToken> {

    var formBody = Object.keys(loginUser).map(key => 
      encodeURIComponent(key) + '=' + encodeURIComponent(loginUser[key as keyof LoginUser])
    ).join('&')

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http
    .post<AuthToken>(`${baseURL}/user/login`, formBody, options)
  }

  public signup(signupUser: SignupUser): Observable<User>{
    console.log(`${baseURL}/user/addUser`)
    return this.http.post<User>(`${baseURL}/user/addUser`, signupUser)
  }

  public logout() {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("access_token_expiry_time")
    localStorage.removeItem("refresh_token_expiry_time")
  }

}
