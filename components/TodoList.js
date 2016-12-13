import React, { Component } from 'react';
import TodoItem from './TodoItem'


class TodoList extends Component {


	render() {

		return (
			<ul>
				{
				this.props.todos.map((todoItem)=>{
						return <TodoItem completeTodo={this.props.completeTodo} deleteTodo={this.props.deleteTodo} key={todoItem.id} todo={todoItem}/>
					})
				}
			</ul>
		)
	}
}

export default TodoList;