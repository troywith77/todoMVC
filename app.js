import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index'
import { Provider } from 'react-redux'
import TodoApp from './containers/todo-app'

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.querySelector('#root')
)
