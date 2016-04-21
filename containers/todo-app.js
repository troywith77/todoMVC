import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

import Header from '../components/header'
import TodoList from '../components/todo-list'
import Footer from '../components/footer'

import styles from '../styles/app'

const TodoApp = ({
	todos,
	actions,
	VisibilityFilter,
}) => (
	<div className={styles.root}>
		<Header addTodo={actions.ADDTODO} />
		<TodoList
			todos={todos}
			actions={actions}
			VisibilityFilter={VisibilityFilter}
		/>
		<Footer
		actions={actions}
		VisibilityFilter={VisibilityFilter} />
	</div>
)

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
		VisibilityFilter: state.VisibilityFilter
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
