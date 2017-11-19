import React, { Component } from "react";

import criteria from './data/criteria.js';


//var data = JSON.parse(criteria);

class Overlay extends React.Component{

  renderStandardButton(i){
    return(
      <button>{criteria.standards[i]}</button>
    );
  }

  render(){
      console.log(criteria);

    return(
      <div className="overlay">
        <p>This is a test</p>
        <li><button>{this.renderStandardButton[1]}</button></li>
        <button>Add a standard </button>
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