import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

const Footer = ({
	VisibilityFilter,
	actions,
	todos
}) => {
	const leftCount = todos.reduce((t, n) =>
		!n.completed ? t + 1 : t
	, 0);
	const word = leftCount === 1 ? ' item' : ' items';
	return (
		<div>
			<p>
			{leftCount + word + ' left'}
			</p>
			<hr />
			{'Filter: '}
			<FilterLink
			actions={actions}
			VisibilityFilter={VisibilityFilter}
			filter='ALL'>
				ALL
			</FilterLink>
			{' '}
			<FilterLink
			actions={actions}
			VisibilityFilter={VisibilityFilter}
			filter='ACTIVE'>
				ACTIVE
			</FilterLink>
			{' '}
			<FilterLink
			actions={actions}
			VisibilityFilter={VisibilityFilter}
			filter='COMPLETED'>
				COMPLETED
			</FilterLink>
			<hr />
			<FunctionalLink
			onClick={() => actions.CLEAR_COMPLETED()}>
				Clear Completed
			</FunctionalLink>
			<hr />
			<FunctionalLink
			onClick={() => actions.COMPLETE_ALL()}>
				Complete All
			</FunctionalLink>
		</div>
	)
}

const FilterLink = ({
	children,
	actions,
	filter,
	VisibilityFilter
}) => {
	if(VisibilityFilter === filter) {
		return <span>{children}</span>
	} else {
		return (
			<a
			href='#'
			onClick={ e => {
				e.preventDefault()
				actions.SET_VISIBILITY_FILTER(filter)
			}}>
				{children}
			</a>
		)
	}
}

const FunctionalLink = ({
	children,
	onClick
}) => {
	return (
		<a
		href='#'
		onClick={onClick}>
			{children}
		</a>
	)
}

export default Footer
