import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseURL } from '../global';
import { Observable } from 'rxjs';
import { User } from './user';
import { LoginUser } from './loginUser';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // initialize the variable
  constructor(private http: HttpClient) { }

  public login(loginUser: LoginUser): Observable<User> {
    return this.http.post<User>(`${baseURL}/api/v1/user/login`, loginUser)
  }
}
