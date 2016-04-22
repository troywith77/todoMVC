import React, { Component } from 'react'

import TodoInput from '../components/TodoInput'

import styles from '../styles/list-item'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  onDoubleClick() {
    this.setState({
      editing: !this.state.editing
    })
  }

  updateTodo(value) {
    const { todo, UPDATE_TODO } = this.props
    UPDATE_TODO(todo.id, value)
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    const { todo, TOGGLE_TODO, DELETE_TODO } = this.props
    if(!this.state.editing) {
      return (
        <li
        className={styles.root}
        onDoubleClick={this.onDoubleClick.bind(this)}>
          <input
          type='checkbox'
          className={styles.toggle}
          checked={todo.completed}
          onChange={() => TOGGLE_TODO(todo.id)} />
          <label>
          {todo.text}
          </label>
          <span
          className={styles.delete}
          onClick={() => DELETE_TODO(todo.id)}>
          X
          </span>
        </li>
      )
    } else {
      return (
        <li
        className={styles.root}
        >
          <TodoInput
          text={todo.text}
          onSave={this.updateTodo.bind(this)} />
        </li>
      )
    }
  }
}
