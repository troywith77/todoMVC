import React, { Component } from 'react'
import styles from '../styles/todo-input.css'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      text: this.props.text || ''
    }
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({
      text: value
    })
  }

  handleKeyDown(e) {
    const value = e.target.value
    const { onSave } = this.props
    if(e.keyCode === 13) {
      onSave(value)
      this.setState({
        text: ''
      })
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
      placeholder={placeholder}
      autoFocus='true'
      />
    )
  }
}
