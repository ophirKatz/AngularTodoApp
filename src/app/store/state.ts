import { Todo } from '../model/todo';

export interface State {
	readonly todos: Todo[];
}

export function fromTodos(todos: Todo[]): State {
	return { todos };
}