import {bindActionCreators, combineReducers} from 'redux'
import{ ActionTypes } from '../actions/types'
import{todosReducer} from './todos'
import  { Todo } from '../actions/todos'

export interface StoreState{
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({

    todos: todosReducer

})