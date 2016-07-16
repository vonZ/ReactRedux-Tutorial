/*
	- ACTIONS -

Actions are plain objects describing what happened in the app, and server as the sole way to describe
an intention to mutate the data.

Payloads of information that send data from your application to your store. They are
the _only_ source of information for the store. You send them to the store using store.dispatch()

*/


/*
 * action types - can be separated in other file
 */
 export const ADD_TODO = 'ADD_TODO'
 export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
 export const TOGGLE_TODO = 'TOGGLE_TODO'


let nextToDoId = 0

export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		id: nextToDoId++,
		text
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		id
	}
}
