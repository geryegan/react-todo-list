import React, { Component } from 'react';
import TodoList from './TodoList';


class TodoInput extends Component {

	constructor(props){
		super(props)
		this.state = {
			inputText: ''
		}
	}

	handleChange(event){
		this.setState({
			inputText: event.target.value
		})
	}

	render() {

		return (
			<div>
				<input 
				type='text'
				value={this.state.inputText}
				onChange={this.handleChange.bind(this)}
				/>
				<button>Submit</button>
				<TodoList/>
			</div>
		)
	}
}

export default TodoInput;