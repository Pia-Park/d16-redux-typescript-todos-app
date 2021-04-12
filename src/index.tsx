import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { App } from './components/App'
import {reducers} from './reducers/index'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)


// interface AppProps {
//     color?: string
// }

// const App = (props:AppProps): JSX.Element => { //react return type 
//     return(
//         <div>{props.color}</div>
//     )
// }