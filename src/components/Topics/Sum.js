import React, {Component} from 'react';


class Sum extends Component{
  constructor(){
    super();

    this.state = {
        number1:0,
        number2:0,
        sum:null
    }
  }


  num1Change(value){
    this.setState({number1:parseInt(value,10)});
  }
  num2Change(value){
    this.setState({number2:parseInt(value,10)});
  }
  sumNums(num1,num2){
    this.setState({sum : num1 + num2});
  }

render(){
  return(
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input className="inputLine" type="number"
      onChange={(e) => this.num1Change(e.target.value)}
      />
      <input className="inputLine" type="number"
      onChange={(e)=>this.num2Change(e.target.value)}
      />
      <button className="confirmationButton"
      onClick={()=>this.sumNums(this.state.number1, this.state.number2)}>Sum</button>
      
      <span className="resultsBox">
      Equals: {this.state.sum}
      </span>
    </div>
     )
  }
}

export default Sum;