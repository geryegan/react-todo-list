import React, { Component } from 'react';


class TodoList extends Component {


	render() {

		return (
			<ul>
				{
				this.props.todos.map((todoItem)=>{
						return <li key={todoItem.id}>{todoItem.text}</li>
					})
				}
			</ul>
		)
	}
}

export default TodoList;