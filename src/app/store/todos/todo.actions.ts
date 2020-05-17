import { createAction, props }  from '@ngrx/store';
import { Todo } from 'src/app/model/todo';

const LOAD_TODOS = '[Todo Component] LOAD';
const ADD_TODO = '[Todo Component] ADD';
const DELETE_TODO = '[Todo Component] DELETE';

export const loadTodos = createAction(LOAD_TODOS, props<{todos: Todo[]}>())
export const addTodo = createAction(ADD_TODO, props<Todo>());
export const deleteTodo = createAction(DELETE_TODO, props<Todo>());