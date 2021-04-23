import React, { Component } from 'react';


class Multiply extends Component{
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Multiply</h4>
        <input className="inputLine" type="number"
        />
        <input className="inputLine" type="number"
        />
        <button className="confirmationButton">Multiply</button>
        <span className="resultsBox">Equals:</span>
      </div>
    )
  }

}


export default Multiply;