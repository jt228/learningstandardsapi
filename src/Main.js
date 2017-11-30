import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Library from "./Library";
import Assignment from "./Assignment";
import Standards from "./Standards";


class Main extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>

          <nav className="navbar-fixed-top">
            <div></div>
            <ul className="header ">
              <li><NavLink exact to="/">
                <span className="glyphicon glyphicon-home"></span>
              </NavLink></li>
              <li><NavLink to="/library">
                <span className="glyphicon glyphicon-book"></span>
              </NavLink></li>

            </ul>
          </nav>

          <div className="content col-md-8 col-sm-12 col-xs-12">
            <Route exact path="/" component={Home}/>
            <Route path="/library" component={Library}/>
            <Route path="/assignment" component={Assignment}/>
            <Route path="/standards" component={Standards}/>
          </div>
        </div>

      </HashRouter>

    );
  }
}

export default Main;