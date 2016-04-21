export const ADDTODO = ( text ) => {
	return {
		type: 'ADD_TODO',
		text
	}
}

export const DELETE_TODO = ( id ) => {
	return {
		type: 'DELETE_TODO',
		id
	}
}

export const TOGGLE_TODO = ( id ) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export const SET_VISIBILITY_FILTER = ( filter ) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}
