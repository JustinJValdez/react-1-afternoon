import React, {Component} from 'react';


class Palindrome extends Component{
  constructor(){
    super();

    this.state={
      userInput:'',
      palindrome:''
    }
  }

updateUserInput(value){
  this.setState({userInput:value})
}

givePalindrome(userInput){
let forward = userInput;
let backward = userInput;
backward = backward.split('');
backward = backward.reverse();
backward = backward.join('');

if(forward === backward){
  this.setState({palindrome: 'true'})
  }else {
  this.setState({palindrome:false})
    }
}

render(){
  return(
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input className="inputLine" 
      onChange={(e)=>this.updateUserInput(e.target.value)}
      />
      <button className="confirmationButton" 
      onClick={()=>this.givePalindrome(this.state.userInput)}>Check</button>
      <span className="resultsBox">Palindrome:{this.state.palindrome}</span>
    </div>
     )
  }
}

export default Palindrome;