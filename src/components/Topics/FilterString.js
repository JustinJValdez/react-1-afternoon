import React, {Component} from 'react';


class FilterString extends Component{
constructor(){
  super();

  this.state ={
    people:[
        "Li",
       "Chi",
        "Yi",
        "Bob",
        "John",
        "Jack",
        "Jill",
        "Manny"
    ],
    userInput:'',
    filteredPeople:[]
  }
}

updateUserInput(value){
  this.setState({userInput:value})
}
filteredPeople(userInput){
  let people = this.state.people;
  let filteredPeople=[];

  for(let i=0; i<people.length; i++){
    if(people[i].includes(userInput)){
      filteredPeople.push(people[i]);
    }
  }
  this.setState({filteredPeople:filteredPeople})
}


render(){
  return(
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
        <span className="puzzleText">
          Input:{JSON.stringify(this.state.people,null,10)}
        </span>
      <input className="inputLine" 
      onChange={(e)=>this.updateUserInput(e.target.value)}
      />
      <button className="confirmationButton" 
      onClick={()=>this.filteredPeople(this.state.userInput)}>Filter:</button>
        <span className="resultsBox filterStringRB">
          Result:{JSON.stringify(this.state.filteredPeople,null,10)}
        </span>
    </div>
     )
  }
}

export default FilterString;