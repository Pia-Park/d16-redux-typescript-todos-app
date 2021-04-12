import { ActionTypes, Action } from '../actions/types'
import { FetchTodosAction, Todo, ClearTodosAction } from '../actions/todos'

// interface Todo {
//     id: number;
//     title: string;
//     completed: boolean;
// }

// interface TodosAction{
//     type: ActionTypes.fetchTodos;
//     payload: Todo[]
// }



export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch(action.type){
        case ActionTypes.fetchTodos:
            return action.payload

        case ActionTypes.clearTodos:
            return []
        case ActionTypes.deleteTodos:
            return state.filter((todo:Todo)=> todo.id !== action.payload)

        default:
            return state
    }
}