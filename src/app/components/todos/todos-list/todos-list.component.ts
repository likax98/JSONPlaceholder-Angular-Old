import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from './../../../core/services/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  //
  todos$: Observable<Todo[]>;

  //
  constructor(private todosService:TodosService) { }

  //
  ngOnInit(): void {
    this.todos$ = this.todosService.fetchTodos();
  }
}
