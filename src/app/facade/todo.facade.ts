import { State } from './../store/state';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoService } from '../services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { loadTodos } from '../store/todos/todo.actions';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoFacade {

  constructor(private store: Store<State>, private service: TodoService) { }

  public getTodos(): Observable<Todo[]> {
    // get from service.
    let existingTodos = this.store.pipe(select('todos'));
    if (existingTodos === null) {
      existingTodos = this.service.getTodos();
      return existingTodos.pipe(tap(todos => this.store.dispatch(loadTodos({todos}))));
    }
    // set state
  }
}
