import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { baseURL } from '../global';
import { AuthToken } from '../interface/authToken';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService{

  constructor(private http: HttpClient) { }

  public refreshToken(refresh_token: String): Observable<AuthToken> {
    return this.http.get<AuthToken>(`${baseURL}/api/v1/token/refresh`)
  }

  public setToken(authResult: AuthToken) {
    localStorage.setItem("access_token", authResult.access_token)
    localStorage.setItem("refresh_token", authResult.refresh_token)
    localStorage.setItem("access_token_expiry_time", authResult.access_token_expiry_time)
    localStorage.setItem("refresh_token_expiry_time", authResult.refresh_token_expiry_time)
  }

  // public async checkTokenExpiry(): Boolean {
  //   let access_token = localStorage.getItem("access_token")
  //   let accessTokenExpiry = Number(localStorage.getItem("access_token_expiry_time"))
  //   let refresh_token = localStorage.getItem("refresh_token")
  //   let refreshTokenExpiry = Number(localStorage.getItem("refresh_token_expiry_time"))

  //   if (access_token && moment().isBefore(accessTokenExpiry)) {
  //     return true
  //   } else if (refresh_token && moment().isBefore(refreshTokenExpiry)) {
  //     this.refreshToken(refresh_token)

  //   } else {

  //   }




  // }
}
