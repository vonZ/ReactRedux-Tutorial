/*
	- REDUCERS -

Actions describe the fact that _something happend_, but don´t specify how the application´s state changes in response.
This is the job of a reducer

The reducer is a pure function tha takes previous state and an action, and return the next state

*/


const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state
			}

			//Copy an empty state, and then return the new state
			return Object.assign({}, state, {
				completed: !state.completed
			})

		default: 
			return: state
	}

}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map(t =>
				todo(t, action)
			)
		default: 
			return: state
	}
}

export default todos