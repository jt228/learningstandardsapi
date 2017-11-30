import React from "react";
import {Link} from 'react-router-dom';

import allStandards from './data/standards.json';



function JurisdictionList(props){
  const allStandards = props.standards[props.juris][props.grade];
  const myStandards = [];
  //console.log(props.grade);
  //console.log(props.genre);
  for(var k in allStandards){
    //console.log(allStandards[k]);
    if(allStandards[k][props.genre]===true){
      myStandards.push(allStandards[k]);
    }
  }
  return(
      myStandards.map((standard)=>
        <div key="standard" className="assignment-div">

         <StandardItem standard={standard} />
        </div>
        )
    );

}

 function StandardItem(props){
     return(
       <div>
         <div className="standard-title">{props.standard.name}</div>
         <div className="standard-text">{props.standard.description}</div>
       </div>
     );
 }


class StandardsList extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      myStandards: myFoobar(),
    };

    function myFoobar(){
      const myStandards = [];
      const standardsSettings = JSON.parse(localStorage.getItem('selectedStandards'));

      for(var k in standardsSettings){
        if(standardsSettings[k]===true){
          myStandards.push(k);
        }
      }
      return myStandards;
    }
  }
  renderStandardsDisplay(jurisdictions){
    const standards = allStandards;
    //console.log(this.props.assignmentDummy);
    //console.log(this.props.assignmentDummy["grade"]);
    //console.log(this.props.assignmentDummy.genre);

    const jurisdiction =jurisdictions.map((k) =>
        <div key={k}>
          <h4 className="heading">{k}</h4>
          <JurisdictionList juris={k} grade={this.props.assignmentDummy.grade} standards={standards} genre={this.props.assignmentDummy.genre}/>
        </div>
      );
    return jurisdiction;
  }


  render(){
    return(
        <div>
          {this.renderStandardsDisplay(this.state.myStandards)}
        </div>
      );
  }
}



class Standards extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      assignmentDummy: JSON.parse(localStorage.getItem('assignmentDummy')),
    }
  }
  render() {
    return (
      <div>
        <div>
          <span >
            <h2>Learning Standards</h2>
          </span>
          <span >
            <Link to='/assignment'>Back</Link>
          </span>
        </div>
        <StandardsList assignmentDummy={this.state.assignmentDummy} />
      </div>
    );
  }
}

export default Standards
