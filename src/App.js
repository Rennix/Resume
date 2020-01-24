import React, {Component} from 'react';
import './App.css';
// import chevron from "./chevron-down.svg"
import chevron from "./img/chevron-down.svg"
import {Collapse} from 'react-collapse';

// function App() {
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      current: ""
    };
  }

  toggle(page) {
    if(this.state.current === page && page !== ""){
      this.setState({isOpen: false, current: ""});
    }
    else{
      this.setState({isOpen: true, current: page});
      // setTimeout(function(){window.scrollTo(0,document.querySelector(".collapse").scrollHeight)},1);
      setTimeout(function(){window.scrollTo(0, document.body.scrollHeight);},1000);
      // document.getElementById("collapse").scrollTop = document.getElementById("collapse").scrollHeight
    }
  }

  render(){

    var jobDesc = "";
    var vorpalClasses = "job vorpal";
    var jplClasses = "job jpl";
    var skillsClasses = "job skills";

    switch(this.state.current){
      case "vorpal":
        vorpalClasses += " selected";
        jobDesc = <div className="jobDesc">
          <div className="title">Chief Executive Officer</div>
          <div className="company">Vorpal Entertainment</div>
          <div className="duration">Aug 2019 – Present</div>
          <div className="desc">Self-employed managing my own company currently designing and creating board games and video games. Experience spanning a number of areas including: management, advertising, design, planning, programming, editing, game theory, and art.</div>
        </div>;
        break;
      case "jpl":
        jplClasses += " selected";
        jobDesc = <div className="jobDesc">
          <div className="title">Web Application Developer</div>
          <div className="company">NASA Jet Propulsion Laboratory (JPL)</div>
          <div className="duration">April 2015 – August 2019</div>
          <div className="desc">Full stack development of complex internal web applications
          Developed a web application to draw and save highlighted terrain data on hi-rise Mars images
          Created a visitor management system for all of JPL that manages and tracks thousands of visits to JPL per day
          Built a web application to view multiple sets of flight data at the same time on a zoomable time scale</div>
        </div>
        break;
      case "skills":
        skillsClasses += " selected";
        jobDesc = <div className="jobDesc">
        <div className="title">About</div>
        <div className="desc">Full stack web developer with a focus on frontend development and design and an interest in working in media and music.</div>
        <br />
        <div className="title">Skills</div>
        <div className="desc">5+ years experience with developing browser based software and web pages through the use of HTML, CSS, Javascript, Python, Flask, Polymer, React, Redux, and jQuery.
        Additionally, I have many years experience with using Unity3D and C# doing personal game projects.</div>
        </div>
        break;
    }

    return (
      <div>
        <div className="mainWrapper">
          <div className="main parallax me headerText">
            <div className="flex flex-1"></div>
            Zac Skinner
            <div className="hr"></div>
            Frontend/Software Developer
            <div className="flex flex-1"></div>
            <img src={chevron} className="chevron" />
          </div>
          <div className="jobs flex flex-column bg-black">
            <div className="flex flex-row flex-around flex-fill bg-white jobText">
              <div className={vorpalClasses} onClick={() => this.toggle("vorpal")}></div>
              <div className={jplClasses} onClick={() => this.toggle("jpl")}></div>
              <div className={skillsClasses} onClick={() => this.toggle("skills")}>About and Skills</div>
            </div>
            <Collapse isOpened={this.state.isOpen}>
              <div id="collapse" className="collapse normalText">
                {jobDesc}
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
