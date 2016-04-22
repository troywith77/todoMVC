import React, { Component } from 'react'
import styles from '../styles/todo-input.css'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)

    this.state = {
      text: this.props.text || ''
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleKeyDown(e) {
    const { onSave } = this.props
    if(e.keyCode === 13) {
      onSave(e.target.value)
      this.setState({
        text: ''
      })
    }
  }

  handleBlur(e) {
    const { onSave } = this.props
    if(!this.props.newTodo) {
      onSave(e.target.value)
    }
  }

  render() {
    const { placeholder } = this.props
    return (
      <input
      type='text'
      className={styles.root}
      value={this.state.text}
      onChange={this.handleChange}
      onKeyDown={this.handleKeyDown}
      onBlur={this.handleBlur}
      placeholder={placeholder}
      autoFocus='true'
      />
    )
  }
}
