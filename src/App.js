import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Piglatin from './piglatin.js'
import Input from './Input.js'

class App extends Component {
	constructor(props){
	    super(props)
	    this.state = {
	      greeting: ''
	    }
	  }

	takeInput(newInput) {
		this.setState({greeting: newInput})
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
		<div className="textbox">
		Welcome to the Pig Pen
		</div>
        </header>
		<div className="Pig" style={{  backgroundImage: "url(" + "https://kathleenhalme.com/images/pigs-clipart-teacher-5.png" + ")",
  		  backgroundPosition: 'center',
  		  backgroundSize: 'contain',
  		  backgroundRepeat: 'no-repeat',}}>

		  <Input submit={this.takeInput.bind(this)} />
		  <Piglatin newString={this.state.greeting} />
  		</div>
      </div>
    );
  }
}

export default App;
