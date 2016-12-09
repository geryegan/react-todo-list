import React from 'react';

class App extends React.Component {
	clickHandle(){
		console.log('lolol')
	}
	render() {
		return(
			<div>
			 Hello from React!
			 	<div>
			 		<button onClick = {this.clickHandle.bind(this)}>Woo!</button>
			 	</div>
			 </div>
			)
	}
}

export default App;