import React, { Component } from 'react';
import './App.css';

class Piglatin extends Component {
	constructor(props) {
	super(props);

	this.state = {
		ourString: "The quick brown fox jumped over the lazy dog"
		}
	}

	phraseArr (str) {
		let splitArr = str.split(" ")
		let emptyArr = []
		for(var w=0; w < splitArr.length; w++) {
			emptyArr.push(splitArr[w].split(""))
		}
		return emptyArr
	}

	testVowel(arr) {
		let vowelReg = /[aeiou]/i
		let otherVowelReg= /[aeiouy]/i
		let emptyArr = []
		let finishArr = []
		for (var i=0; i < arr.length; i++) {
			if (arr[i].length>0) {
			if (vowelReg.test(arr[i][0])) {
				arr[i].push('-way')
				// console.log(arr[i])
				finishArr[i] = arr[i].join('')
			} //else if (i > 0) {
				//vowelReg = /[aeiouy]/i;
			else if ((arr[i][0] == "Q" || arr[i][0] == "q") && (arr[i][1] == "U" || arr[i][1] == "u")) {
				finishArr[i] = arr[i].slice(2).concat('-quay').join('')
			} else {
				for (var c=0; c < arr[i].length; c++) {
					if (otherVowelReg.test(arr[i][c])) {
						emptyArr[i] = arr[i].splice(0, c)
						// emptyArr.push(arr[i][c])

						finishArr[i] = (arr[i].join('') + "-" + emptyArr[i].join('') + "ay")

						// console.log(finishArr.push(pigLatinArr))
						break;
						// arr[i].shift();
						// console.log(arr[i])
						// console.log(arr[i].splice(arr[i].length -1, 0, arr[i][c]).concat(arr[i][0]))
					}
				}
			}
}
		}
		console.log(finishArr.join(" "))
		return(finishArr.join(' '))
	}

  render() {

    return (
      <div className="pigOutput">

	  	<p>{this.testVowel(this.phraseArr(this.props.newString))}</p>
      </div>
    );
  }
}

export default Piglatin;
