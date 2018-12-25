import React from 'react'
import Time from './time'

export default class Body extends React.Component {
	render() {
		const body_style = {
			backgroundColor: '#ddd',
			padding: '10px',
			height: '200px',
		};
		return <div style={body_style}>
			<h2>CSS Template</h2>
			<p>A topnav, content and a footer.</p>
			<Time />
		</div>
	}
}