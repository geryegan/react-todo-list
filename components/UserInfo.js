import React, { Component } from 'react';


class UserInfo extends Component {
	
	handleNewId(){
		console.log('ID', this.props.user.id)
		this.props.actions.createNewUserId();
	}

	handleNewIdIfOdd(){
		console.log('ACTIONS', this.props.actions)
		this.props.actions.createNewUserIdIfOdd();
	}
	
	handleNewIdAsync(){
		this.props.actions.createNewUserIdAsync();
	}

	render() {

		return (
		<div>
			<div>username: {this.props.user.username} </div>
			<div>id: {this.props.user.id} 
				<button onClick = {this.handleNewId.bind(this)}>Update Id</button>
				<button onClick = {this.handleNewIdIfOdd.bind(this)}>Update Id if Odd</button>
				<button onClick = {this.handleNewIdAsync.bind(this)}>Async</button>
			</div>
		</div>
		)
	}
}

export default UserInfo;