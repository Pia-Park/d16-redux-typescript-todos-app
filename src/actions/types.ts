// export const FETCH_TODOS = 'FETCH_TODOS'
// export const EDIT_TODOS = 'EDIT_TODOS'
// export const CREATE_TODOS = 'CREATE_TODOS'
import {FetchTodosAction, ClearTodosAction, DeleteTodosAction} from './todos'

export enum ActionTypes{
    fetchTodos,
    clearTodos,
    deleteTodos
}

export type Action = FetchTodosAction | ClearTodosAction | DeleteTodosAction