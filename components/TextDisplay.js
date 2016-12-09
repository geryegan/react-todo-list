import React from 'react';


class TextDisplay extends React.Component {


	render() {
		console.log('PROPS:', this.props)
		return (
			<div>
				I'm displaying text: {this.props.text}
			</div>
			)
		
	}
}

export default TextDisplay;