import { Injectable } from '@angular/core';
import { concat, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/operators';
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
    // Add a 3 second delay before returning the constant list of todos, for demonstrating puposes
    let todos = of(this.todos);
    let delayed = todos.pipe(delay(3000));
    return delayed;
    // return new Observable(observer => {
    //   observer.next(this.todos);
    // });
  }
}
