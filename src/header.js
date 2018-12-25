import React from 'react'

export default class Header extends React.Component {
	render() {
		const topnav = {
			overflow: 'hidden',
			backgroundColor: '#333',
		}

		const topnav_a = {
			float: 'left',
			display: 'block',
			color: '#f2f2f2',
			textAlign: 'center',
			padding: '14px 16px',
			textDecoration: 'none',
		}
		return <header>
			<nav style={topnav}>
				<a href="https://www.google.com" style={topnav_a}>Google</a>
				<a href="#" style={topnav_a}>Link</a>
				<a href="#" style={topnav_a}>Link</a>
			</nav>
		</header>
	}
}