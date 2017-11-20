import React, { Component } from "react";

import criteria from './data/criteria.js';


//var data = JSON.parse(criteria);



class Overlay extends React.Component{ 
  
  renderStandardButton(){
    //axios.get('./data/criteria.js');
    var arrayStuff= [];
    for(var i=0; i<5; i++){
     arrayStuff.push(
        <li key={i}><option className="col-md-4 col-sm-6">{i}</option></li>
      )
    }
    return(      
      arrayStuff
    );
  }

  // renderSearchBox(){
  //   return(
  //     <p>"hello</p>
  //     );
  //   }

  render(){
    console.log("check");

    return(
      <div className="overlay">
        <p>This is a test</p>
        {this.renderStandardButton()}
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