import React from "react";
import {Link} from 'react-router-dom';
import criteria from './data/criteria.json';


class Subheader extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      assignment: criteria[localStorage.getItem('currentAssignment')]
    };

  }

  currentAssignment(){
    {this.state.assignment.title};
    return;
  }

  render(){
    return(
          <nav
           className="sub-nav">
            <div className="sub-nav-col sub-nav-left">
              <Link to='/library'><div className="sub-nav-link">Back</div></Link>
            </div>
            <div className="sub-nav-col sub-nav-center">
              <h2 className="sub-nav-heading">{this.state.assignment.title}</h2>
            </div>
            <div className="sub-nav-col sub-nav-right">
              <button className="sub-nav-btn" onClick={()=>this.currentAssignment()}>Create Assignment</button>
            </div>
          </nav>
      );
  }
}


class AssignmentDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      assignment: criteria[localStorage.getItem('currentAssignment')]
    };
  }

  setStandardsCriteria(a, b){
    var standardsCriteria ={"grade":a, "genre": b};
    localStorage.setItem("assignmentDummy",JSON.stringify(standardsCriteria));
  }

  render(){
    return(
      <div>
        <div className="assignment-lg">
          <div className="col-md-9">
            <div className="assignment-div">
              <div className="assignment-div-header">Instructions</div>
              <h3 className="assignment-div-title">{this.state.assignment.title}</h3>
              <div>{this.state.assignment.instructions}</div>
            </div>
            <div className="assignment-div">
              <div className="assignment-div-header">Source</div>
              <div className="source-title">{this.state.assignment.sourceTitle}</div>
              <em>by {this.state.assignment.sourceAuthor}</em>
              <div>{this.state.assignment.source}</div>
            </div>
          </div>
          <div className="">
            <div className="assignment-info">
              <div>
                <div>
                  <a>Rubric</a>
                </div>
                <div onClick={() => this.setStandardsCriteria(this.state.assignment.grade,this.state.assignment.genre)}>
                  <Link to='/standards'>Learning Standards</Link>
                </div>
                <div>
                  <a>Assignment PDF</a>
                </div>
              </div>
              <div>
                <div>
                  <b>Skill Level</b>
                  <p>{this.state.assignment.grade}</p>
                </div>
                <div>
                  <b>Subject</b>
                  <p>{this.state.assignment.subject}</p>
                </div>
                <div>
                  <b>Genre</b>
                  <p>{this.state.assignment.genre}</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="assignment-sm">
          <div className="col-md-12 assignment-sm-width">
            <div className="assignment-div">
              <div className="assignment-div-header">Instructions</div>
              <h3 className="assignment-div-title">{this.state.assignment.title}</h3>
              <div>{this.state.assignment.instructions}</div>
              <div>{this.state.assignment.genre}, {this.state.assignment.grade}</div>
            </div>

            <div className="assignment-div">
              <div>
                <div>
                  <a>Rubric</a>
                </div>
                <div onClick={() => this.setStandardsCriteria(this.state.assignment.grade,this.state.assignment.genre)}>
                  <Link to='/standards'>Learning Standards</Link>
                </div>
                <div>
                  <a>Assignment PDF</a>
                </div>
              </div>
            </div>


            <div className="assignment-div">
              <div className="assignment-div-header">Source</div>
              <div className="source-title">{this.state.assignment.sourceTitle}</div>
              <em>by {this.state.assignment.sourceAuthor}</em>
              <div>{this.state.assignment.source}</div>
            </div>
          </div>

        </div>
      </div>
      );
  }
}

class Assignment extends React.Component {
  render() {
    return (
      <div>

        <Subheader/>

        <AssignmentDetails />

      </div>
    );
  }
}

export default Assignment
