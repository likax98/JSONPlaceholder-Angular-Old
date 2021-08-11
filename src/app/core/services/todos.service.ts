import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/todo';

const URL = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  //
  constructor(private _http: HttpClient) { }

  //
  fetchTodos():Observable<Todo[]> {
    return this._http.get<Todo[]>(URL);
  }
}
