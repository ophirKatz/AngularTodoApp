import { State } from './../state';
import { createReducer, on, Action } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { fromTodos } from './../state';
import { Todo } from 'src/app/model/todo';

const initialState: State = {
	todos: []
};

function onAddTodo(state: State, newTodo: Todo): State {
	return fromTodos([...state.todos, newTodo]);
}

const _reducer = createReducer(initialState,
	on(TodoActions.addTodo, onAddTodo)
);

export function todoReducer(state: State, action: Action) {
	return _reducer(state, action);
}