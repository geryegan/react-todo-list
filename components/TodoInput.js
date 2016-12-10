import React, { Component } from 'react';
import TodoList from './TodoList';
import actions from '../redux/actions'


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

	handleSubmit(event){
		event.preventDefault();
		this.props.dispatch(actions.addTodo(this.state.inputText))

	}
	render() {

		return (
			<div>
				<input 
				type='text'
				value={this.state.inputText}
				onChange={this.handleChange.bind(this)}
				/>
				<button onClick={this.handleSubmit.bind(this)}>Submit</button>
			</div>
		)
	}
}

export default TodoInput;