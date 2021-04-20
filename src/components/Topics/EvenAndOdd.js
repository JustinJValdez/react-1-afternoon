import React, {Component} from 'react';


class EvenAndOdd extends Component{
  constructor(props){
    super(props);
    this.state={
      evenArray: [],
      oddArray:[],
      userInput:''
    }
  }

  updateUserInput(value){
    this.setState({userInput : value})
  }
  evenOrOdd(userInput){
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];

    for (let i = 0; i < arr.length; i++) {
      if ( arr[i] % 2 === 0 ) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });
  }

render(){
  return(
    <div className="puzzleBox evenAndOddPB">
      <h4>Even and Odds</h4>

      <input className="inputLine" 
      onChange={(e)=> this.updateUserInput (e.target.value)}
      />

      <button className="confirmationButton" 
      onClick={()=>{this.evenOrOdd(this.state.userInput)}}> 
      Make Evens or Odds
      </button>

      <span className="resultsBox">{JSON.stringify(this.state.evenArray)}</span>
      <span className="resultsBox">{JSON.stringify(this.state.oddArray)}</span>

    </div>
     )
  }
}

export default EvenAndOdd;