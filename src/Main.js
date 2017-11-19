import React, { Component } from "react";

import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Library from "./Library";
import Assignment from "./Assignment";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <nav>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/library">Library</NavLink></li>
              <li><NavLink to="/assignment">Assignment</NavLink></li>
            </ul>
          </nav>
          
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/library" component={Library}/>
            <Route path="/assignment" component={Assignment}/>            
          </div>

        </div>

      </HashRouter>
    );
  }
}
 
export default Main;