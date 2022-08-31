import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseURL } from '../global';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { LoginUser } from '../interface/loginUser';
import { AuthToken } from '../interface/authToken';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // initialize the variable
  constructor(private http: HttpClient) { }

  public login(loginUser: LoginUser): Observable<User> {
    return this.http.post<User>(`${baseURL}/api/v1/user/login`, loginUser)
  }

  private setToken(authResult: AuthToken){
    localStorage.setItem("access_token", authResult.access_token)
    localStorage.setItem("refresh_token", authResult.refresh_token)
    localStorage.setItem("access_token_expiry_time", authResult.access_token_expiry_time)
    localStorage.setItem("refresh_token_expiry_time", authResult.refresh_token_expiry_time)
  }

  public logout(){
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("access_token_expiry_time")
    localStorage.removeItem("refresh_token_expiry_time")
  }

  public checkTokenExpiry(){
    const accessTokenExpiry = Number(localStorage.getItem("access_token_expiry_time"))
    const refreshTokenExpiry = Number(localStorage.getItem("refresh_token_expiry_time"))

    if(moment().isBefore(accessTokenExpiry)){

    }else if (moment().isAfter(accessTokenExpiry) && moment().isBefore(refreshTokenExpiry)){

    }else {
      
    }




  }
}
