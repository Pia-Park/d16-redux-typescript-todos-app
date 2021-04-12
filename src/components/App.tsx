import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StoreState} from '../reducers'
import {Todo, FetchTodosAction , fetchTodos, clearTodos, deleteTodos} from '../actions'
import { todosReducer } from '../reducers/todos'

interface AppProps{
    todos: Todo[];
    fetchTodos: Function; //only for action creators
    clearTodos: Function;
    deleteTodos: Function;
}

interface AppState{
    fetching: boolean;
}

class _App extends Component<AppProps, AppState>{
    constructor(props: AppProps){
        super(props)

        this.state = {fetching: false}
    }

    componentDidUpdate(preProps: AppProps){
        if(!preProps.todos.length&&this.props.todos.length){
            this.setState({fetching: false})
        }
    }

    onButtonClick = ():void =>{
        this.props.fetchTodos()
        this.props.clearTodos()
        this.setState({fetching: true})
    }

    onDeleteClick = (id:number):void => {
        this.props.deleteTodos(id)

    }

    renderList():JSX.Element[]{
        return this.props.todos.map((todo: Todo)=>{
            return(
                <div key={todo.id}>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                    <button key={todo.id} onClick={() => this.onDeleteClick(todo.id)}>X</button>
                </div>
            )
        })
    }

    render(){
        
        return(
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? 'Loading......' : null}
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = ({todos}:StoreState):{todos: Todo[]} => {
    return {todos}
}



export const App = connect(mapStateToProps, {fetchTodos, clearTodos, deleteTodos})(_App)