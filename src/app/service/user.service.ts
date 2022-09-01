import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { baseURL } from '../global';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { LoginUser } from '../interface/loginUser';
import { AuthToken } from '../interface/authToken';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // initialize the variable
  constructor(private http: HttpClient) { }

  public login(loginUser: LoginUser): Observable<AuthToken> {

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http
    .post<AuthToken>(`${baseURL}/api/v1/user/login`, loginUser, options)
  }

  public logout() {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("access_token_expiry_time")
    localStorage.removeItem("refresh_token_expiry_time")
  }

}
