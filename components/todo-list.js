import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

import ListItem from './list-item'

const TodoList = ({
	todos,
	VisibilityFilter,
	actions
}) => {
	const VisibleList = getVisibleList(todos, VisibilityFilter)
	return (
		<ul style={{padding: 0}}>
			{VisibleList.map(todo => {
				return (
					<ListItem
					key={todo.id}
					todo={todo}
					{...actions} />
				)
			})}
		</ul>
	)
}

const getVisibleList = ( todos, filter ) => {
	switch( filter ) {
		case 'ALL':
			return todos
		case 'ACTIVE':
			return todos.filter(t => !t.completed)
		case 'COMPLETED':
			return todos.filter(t => t.completed)
		default:
			return todos
	}
}

export default TodoList
