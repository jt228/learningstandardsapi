import React from "react";
import './index.css';
import './site.css';

import {Link} from 'react-router-dom';

class CourseAssignments extends React.Component{
  render(){
    return(
      <div>
        <button className="btn btn-primary">Create Class</button>
        <div className="course-container">
          <div className="course-title">
            <h2>My first revision</h2>
          </div>
          <div className="course-assignment-container">
            <div className="tile course-tile">
              <h4>title</h4>
            </div>
            <Link to='/library'>
              <div className="course-create-assignment">
                Create Assignment
                <div className="course-create-plus">+</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

}


class Home extends React.Component {
  render() {
    return (

      <div >
      <CourseAssignments/>
      </div>
    );
  }
}

export default Home