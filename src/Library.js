import React, { Component } from "react";

import criteria from './data/criteria.js';


//var data = JSON.parse(criteria);
var criteriaGrades = Array[6,7,8,9,10,11,12,"higher education"]


class Overlay extends React.Component{

  renderStandardButton(){
    return(
      // for(let i=0; i< criteriaGrades.length;++)
       <option className="col-md-4 col-sm-6">Words</option>
    
    );
  }

  render(){
      console.log("check");

    return(
      <div className="overlay">
        <p>This is a test</p>
        <li>{this.renderStandardButton()}</li>
        <button onClick={()=> alert('Do something!')}>Add a standard </button>
      </div>
      );
  }
}

class Library extends React.Component {
  render() {
    return (
      <div>
      <Overlay/>
        <h2>Library</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
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