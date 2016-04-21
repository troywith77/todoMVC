import { createStore, combineReducers } from 'redux'

import { todos, VisibilityFilter } from '../reducers/index'

const RootReducer = combineReducers({
	todos,
	VisibilityFilter
})

let store = createStore(RootReducer)

export default store