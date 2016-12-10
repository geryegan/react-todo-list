import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';

class App extends React.Component {

	clickHandle(){
		console.log('Wooo!')
	}

	render() {
		return(
			<div>
			 ToDo List
			  <TodoInput dispatch={this.props.dispatch}/>
			  <TodoList todos={this.props.todos}/>
			 </div>
			)
	}
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps)(App);