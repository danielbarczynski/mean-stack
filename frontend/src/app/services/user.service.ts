import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import User from '../models/User';

const API_USERS = 'http://localhost:3000/users/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_USERS);
  };

  createUser(user: any): Observable<any> {
    return this.http.post<any>(API_USERS, user, httpOptions);
  };

  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(API_USERS + user._id);
  };
}