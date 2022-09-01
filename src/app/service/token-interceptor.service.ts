import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let access_token = localStorage.getItem("access_token")
    let accessTokenExpiry = Number(localStorage.getItem("access_token_expiry_time"))
    let refresh_token = localStorage.getItem("refresh_token")
    let refreshTokenExpiry = Number(localStorage.getItem("refresh_token_expiry_time"))

    if (access_token && moment().isBefore(accessTokenExpiry)) {
      let jwtToken = req.clone({
        setHeaders: {
          Authorization: "Bearer " + access_token
        }
      })

      return next.handle(jwtToken)

    } else if (refresh_token && moment().isBefore(refreshTokenExpiry)) {
      let jwtToken = req.clone({
        setHeaders: {
          Authorization: "Bearer " + refresh_token
        }
      })

      return next.handle(jwtToken)

    } else {
      return next.handle(req)
    }
  }
}
