import React, { Component } from 'react';

class Input extends Component {
	constructor(props){
		super(props)
		this.state = {
			userIn: ''
		}
	}

	handleChange(e) {
		//console.log('event', e.target.value);
		let newUserIn = e.target.value
		this.setState({userIn: newUserIn})
		//this.props.submit(e.target.value)
	}

	submitHandler(e){
		e.preventDefault ()
		console.log('state', this.state)
		this.props.submit(this.state.userIn)
	}

	render() {
		console.log("this is our props", this.props)

		return (
			<div className="submitStyle" style={{paddingTop: 30}}>
			<form onSubmit={this.submitHandler.bind(this)}>

				<input className="input-field" type= 'text' name= 'userIn' onChange = {this.handleChange.bind(this)}/>
				<input className="submit-button" type= 'submit' value='Submit'/>
			</form>
			</div>
		)
	}
}

export default Input;
