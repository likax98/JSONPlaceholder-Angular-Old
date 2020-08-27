import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoComponent } from './todos-list/todo/todo.component';


@NgModule({
  declarations: [TodosRoutingModule.Components, TodoComponent],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
