import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/*
   COMBINED REDUCERS
   Generate a function that calls your reducers with the slice of state selected according to their keys,
   and combining their results into a single object again.

 */

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default todoApp
