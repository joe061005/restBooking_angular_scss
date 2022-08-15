import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseURL } from '../global';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }
}
