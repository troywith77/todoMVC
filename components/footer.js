import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'

const Footer = ({
	VisibilityFilter,
	actions
}) => (
	<div>
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
			CLEAR COMPLETED
		</FunctionalLink>
	</div>
)

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
