import React, { Component } from 'react';


class UserInfo extends Component {
	
	handleNewId(){
		console.log('ID', this.props.user.id)
		this.props.createNewUserId()
	}
	render() {

		return (
		<div>
			<div>username: {this.props.user.username} </div>
			<div>id: {this.props.user.id} <button onClick = {this.handleNewId.bind(this)}>Update Id</button></div>
		</div>
		)
	}
}

export default UserInfo;