import React from 'react'
import { render } from 'react-dom';
import Time from './time'

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World, it's Jimmy Website</h1>
				<div>現在時間為：</div>
				<Time />
			</div>
		)
	}
}

render(<HelloWorld />, document.getElementById('root'));