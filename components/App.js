import React from 'react';
import TodoInput from './TodoInput';

class App extends React.Component {
	clickHandle(){
		console.log('Wooo!')
	}
	render() {
		return(
			<div>
			 ToDo List
			  <TodoInput />
			 </div>
			)
	}
}

export default App;