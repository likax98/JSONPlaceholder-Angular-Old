import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostComment } from 'src/app/models/comment';
const URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //
  constructor(private _http:HttpClient) { }

  //
  fetchUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${URL}`);
  }

  //
  fetchUser(id: number): Observable<User> {
    return this._http.get<User>(`${URL}/${id}`)
  }

  //
  fetchComments(id:number):Observable<PostComment[]> {
    return this._http.get<PostComment[]>(`${URL}/${id}/comments`);
  }
}
