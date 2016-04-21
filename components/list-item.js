import React, { Component } from 'react'

import styles from '../styles/list-item'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { todo, TOGGLE_TODO, DELETE_TODO } = this.props
    return (
      <li className={styles.root}>
        <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => TOGGLE_TODO(todo.id)} />
        <label>
        {todo.text}
        </label>
        <button
        className={styles.delete}
        onClick={() => DELETE_TODO(todo.id)}>
        X
        </button>
      </li>
    )
  }
}
