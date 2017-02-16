import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import AddTodo from './containers/AddTodo.js'
import VisibleTodoList from './containers/VisibleTodoList'

let store = createStore(todoApp)

const App = () => (

    <div>
        <h1>Todo List</h1>
        <AddTodo />
        <VisibleTodoList />
    </div>

)

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
