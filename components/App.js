import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions'
import UserInfo from './UserInfo'

class App extends React.Component {

	clickHandle(){
		console.log('Wooo!')
	}

	render() {
		return(
			<div>
			 <h1>ToDo List</h1>
			 <UserInfo actions={this.props.actions} user={this.props.user}/>
			  <TodoInput addTodo={this.props.actions.addTodo}/>
			  <TodoList completeTodo={this.props.actions.completeTodo} deleteTodo={this.props.actions.deleteTodo} todos={this.props.todos}/>
			 </div>
			)
	}
}

function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);