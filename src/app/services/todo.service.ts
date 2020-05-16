import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[];

  constructor() {
    this.todos = [
      {
        done: true,
        title: 'Create the todo service with dummy values'
      },
      {
        done: false,
        title: 'Create the TodosComponent'
      },
      {
        done: false,
        title: 'Get todos from service'
      },
    ];
  }

  public getTodos(): Observable<Todo[]> {
    return new Observable(observer => {
      observer.next(this.todos);
    });
  }
}
