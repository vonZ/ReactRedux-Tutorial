/*
	- COMPONENTS - Todo -
	Single todo item
		* onClick(), is a callback to invoke when a todo is clicked
		* completed: boolean, is whether todo should appear crossed out
		* text: string, is the text to show		
*/

import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
	<li
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		{text}
	</li>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo