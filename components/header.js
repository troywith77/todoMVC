import React, { Component } from 'react'

import TodoInput from './TodoInput'

import styles from '../styles/header'

class Header extends Component {
	constructor(props) {
		super(props)
	}

	onSaveTodo(data) {
		const { addTodo } = this.props
		addTodo(data)
	}

	render() {
		return (
			<header>
				<h1 className={styles.title}>Todo MVC</h1>
				<TodoInput
				onSave={this.onSaveTodo.bind(this)}
				placeholder='What do you want to do?' />
			</header>
		)
	}
}

export default Header
