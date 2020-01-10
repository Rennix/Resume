import React from 'react';
import './App.css';
// import chevron from "./chevron-down.svg"
import chevron from "./img/chevron-down.svg"

function App() {
  return (
    <div>
      <div className="mainWrapper">
        <div className="main parallax me">
          <div className="flex flex-1"></div>
          Zac Skinner
          <div className="hr"></div>
          Frontend/Software Developer
          <div className="flex flex-1"></div>
          <img src={chevron} className="chevron" />
        </div>
        <div className="jobs flex flex-column bg-black">
          <div className="flex flex-row flex-around flex-fill bg-white">
            <div className="job vorpal"></div>
            <div className="job jpl"></div>
            <div className="job skills">Skills and Other</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
