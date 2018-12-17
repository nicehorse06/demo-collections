import React from 'react'
const now = new Date();

export default class Time extends React.Component {
	render() {
		return <div>{now.toString()}</div>
	}
}