import React, {Component} from 'react';


class FilterObject extends Component{
  constructor(){
    super();

    this.state={
      unFilteredArray:[
        {
          name:"Jo",
          job:"mover",
          eyes: "blue"
        },
        {
          name:"Bo",
          job:"groover",
          hair:"black"
        },
        {
          job:'new',
          age:59
        }
      ],
      userInput:'',
      filteredArray:[]
    }
  }
  updateUserInput(value){
    this.setState({userInput : value})
  }
  filterInput(prop){
    let unFilteredArray = this.state.unFilteredArray;
    let filteredArray = [];

      for ( let i = 0; i < unFilteredArray.length; i++ ) {
        if ( unFilteredArray[i].hasOwnProperty(prop) ) {
          filteredArray.push(unFilteredArray[i]);
        }
    }
    this.setState({ filteredArray: filteredArray });
  }

render(){
  return(
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">
        Input:{ JSON.stringify(this.state.unFilteredArray, null, 10) }
      </span>

      <input className="inputLine"
      onChange={ (e)=>this.updateUserInput(e.target.value)}
      />

      <button className="confirmationButton" 
      onClick={()=>this.filterInput(this.state.userInput)}>
        Filter
      </button>

      <span className="resultsBox filterObjectRB">
    Results:{ JSON.stringify(this.state.filteredArray, null, 10) }
      </span>
    </div>
     )
  }
}

export default FilterObject;