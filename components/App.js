import React from 'react';
import TextInput from './TextInput';

class App extends React.Component {
	clickHandle(){
		console.log('Wooo!')
	}
	render() {
		return(
			<div>
			 Hello from React(App Component)!
			 <TextInput />
			 </div>
			)
	}
}

export default App;