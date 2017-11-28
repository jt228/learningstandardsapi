import React from "react";

import criteria from './data/criteria.json';



function StandardButton(props){
    return (
      <div onClick={() => props.onClick(props.value)}>{props.value}</div>
    );
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
class PromptList extends React.Component{

    render() {
      const data = criteria;
      return (
        <div>
          {data.map(function(d, idx){
             return (
              <div key={idx}>
                <h3>{d.title}</h3>
                <div>{d.preview}</div>
                <span> {d.grade}</span>
                <span>{d.genre}|{d.sources}</span>
              </div>)
           })}
        </div>
      );
    }
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
    console.log(localStorage.selectedStandards)
    //console.log(this.state.selectedStandards);
    alert(standardsClicked[value])
  }

  render() {
    return (
      <div>
        <Overlay
          selectedStandards={this.state.selectedStandards}
          changeButton={(value) => this.changeButton(value)}
        />
        <h2>Library</h2>
        <h2>{this.state.selectedJuris}</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <PromptList />
        <ol>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
          <li><a href="/contact">Contact</a></li>
        </ol>
      </div>
    );
  }
}

export default Library