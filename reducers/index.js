const initialState = [
	{
	id: 0,
	text: 'React',
	completed: false
},
	{
		id: 1,
		text: 'Face the truth',
		completed: false
	}
]

export const todos = ( state = initialState, action ) => {
	switch( action.type ) {
		case 'ADD_TODO':
			return [...state, {
				id: state.reduce((maxId, nextTodo) => Math.max(maxId, nextTodo.id), -1) + 1,
				text: action.text,
				completed: false
			}]
		case 'DELETE_TODO':
			return state.filter(t => {
				return t.id !== action.id
			})
		case 'TOGGLE_TODO':
			return state.map((item) => {
				if(item.id !== action.id) {
					return item
				} else {
					return Object.assign({},
						item,
						{ completed: !item.completed }
					)
				}
			})
		case 'UPDATE_TODO':
			return state.map(todo => {
				if(todo.id !== action.id) {
					return todo
				} else {
					return Object.assign({},
					todo, {
						text: action.text
					})
				}
			})
		case 'CLEAR_COMPLETED':
			return state.filter(todo => {
				return !todo.completed
			})
		case 'COMPLETE_ALL':
			return state.map(todo => {
				return Object.assign({},
				todo, {
					completed: true
				})
			})
		default:
			return state
	}
}

export const VisibilityFilter = ( state = 'ALL', action) => {
	switch( action.type ) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}
