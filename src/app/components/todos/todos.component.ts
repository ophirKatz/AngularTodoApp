import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }
  
  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }
}
