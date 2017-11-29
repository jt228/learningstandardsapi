import React from "react";
import {Link} from 'react-router-dom';

import criteria from './data/criteria.json';



function StandardButton(props){
    return (
      <div onClick={() => props.onClick(props.value)}>{props.value}</div>
    );
}


class LibraryHeader extends React.Component{
  render(){
    return (
      <div>
        <div className="library-container">
          <h2 className="library-title">Revision Assistant Library</h2>
          <p className="instructions">Click on a prompt to view the full text and to add it to your assignment.</p>
          <select name="skill">
            <option value="">All Skill Levels</option>
            <option value="6">Grade 6</option>
            <option value="7">Grade 7</option>
            <option value="8">Grade 8</option>
            <option value="9">Grade 9-10</option>
            <option value="11">Grade 11-12</option>
            <option value="AP">AP</option>
            <option value="HE">Higher Education</option>
          </select>
          <select name="genre">
            <option value="">All Genres</option>
            <option value="analysis">Analysis</option>
            <option value="argumentative">Argumentative</option>
            <option value="historical">Historical Analysis</option>
            <option value="informative">Informative</option>
            <option value="narrative">Narrative</option>
          </select>
        </div>
      </div>
    );
  }
}



class ArrayList extends React.Component{

  renderStandardButton(arrayValue, index){
    return(
      <StandardButton
        onClick={(arrayValue) => this.props.changeButton(arrayValue)}
        value={arrayValue}
        key={index} />
    )
  }

   render(){
    const arrayStandards = Object.keys(this.props.selectedStandards);

    const arrayItems = arrayStandards.map((arrayValue, index) =>
        <div key={"div-"+arrayValue.toString()}>
          {this.renderStandardButton(arrayValue, index)}
        </div>
      );
      return(
        <div> {arrayItems} </div>
      );
    }
}

// Resource used for this: https://plnkr.co/edit/kFKBi8qUAC02eeHOYUB3?p=preview and https://stackoverflow.com/questions/41374572/how-to-render-an-array-of-objects-in-react
function PromptList(props){
    const data = criteria;

    return (
      <div >
        <div className="library-count">
          <h4>
            Assignments ({data.length})
          </h4>
        </div>
        {data.map(function(d, idx){
           return (
            <Link to='/assignment' key={idx} >
              <div className="tile" key={idx} onClick={()=> props.onClick(idx)}>
                <h4>{d.title}</h4>
                <div>{d.preview}</div>
                <span>{d.genre}|{d.sources}</span>
              </div>
            </Link>
            );
         })}
      </div>
    );
}

class Overlay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: false,
    };
  }
  render(){
    //console.log(this.state.selectedStandards);
    //let standardsOptions = Object.keys(this.state.selectedStandards);

    return(
      <div className="overlay">
        <ArrayList
          selectedStandards={this.props.selectedStandards}
          changeButton={(value) => this.props.changeButton(value)} />
        <button onClick={()=> alert('Do something!')}>Save and View Library</button>
      </div>
      );
    }
  }

class Library extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    if (localStorage.selectedStandards) {
      //console.log("init state from local storage");
      this.state['selectedStandards'] = JSON.parse(localStorage.getItem('selectedStandards'));
    } else {
      //console.log("init state from default (not local storage");
      this.state['selectedStandards'] = {
        "Common Core": false,
        "Alaska": false,
        "Arizona": false,
        "Florida": false,
        "Indiana": false,
        "Iowa": false,
        "Nebraska": false,
        "New Jersey": false,
        "Oklahoma": false,
        "Pennsylvania": false,
        "South Carolina": false,
        "Tennessee": false,
        "Texas": false,
        "Virginia": false
      }
    };
  }
  changeButton(value) {
    const standardsClicked = Object.assign({}, this.state.selectedStandards);
    standardsClicked[value] = !standardsClicked[value];
    // Update state in component
    this.setState({selectedStandards: standardsClicked});
    // Update state in localStorage
    localStorage.setItem('selectedStandards', JSON.stringify(standardsClicked));
    //console.log(localStorage.selectedStandards)
    //console.log(this.state.selectedStandards);
    //alert(standardsClicked[value])
  }
  handleClick(i){
    localStorage.setItem('currentAssignment',i);
    //console.log(localStorage.getItem('currentAssignment'));
    //alert("hi");
  }

  render() {
    return (
      <div>
        <Overlay
          selectedStandards={this.state.selectedStandards}
          changeButton={(value) => this.changeButton(value)}
        />
        <h2>{this.state.selectedJuris}</h2>
        <LibraryHeader/>
        <PromptList onClick={(i) => this.handleClick(i)}/>
      </div>
    );
  }
}





export default Library