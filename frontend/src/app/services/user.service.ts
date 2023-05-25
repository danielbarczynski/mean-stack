import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import User from '../models/User';

const API_USERS = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_USERS);
    // return this.http.get<any>(API_USERS).pipe(map((res: any[]) => {
    //   return res.map(user => ({
    //     id: user.id,
    //     name: user.name,
    //     age: user.age
    //   }))
    // }))
  };
}