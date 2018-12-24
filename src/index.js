import React from 'react'
import { render } from 'react-dom';
import Header from './header'
import Body from './body'
import Footer from './footer'


class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Body />
				<Footer />
			</div>
		)
	}
}

render(<HelloWorld />, document.getElementById('root'));