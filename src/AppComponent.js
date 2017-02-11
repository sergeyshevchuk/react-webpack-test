import React, { Component } from 'react';

export default class AppComponent extends Component {

	constructor() {
  		super();
  		this.state = {n: 0};
 	}

	componentDidMount(){
		
	}

	handleClick = () => {
		this.setState({n : ++this.state.n});
	}

	render() {
		return (
			<div>
	  			<h1>Hello d World</h1>
	  			<button onClick={this.handleClick}>{this.state.n}</button>
	  		</div>
		);
  	}
}