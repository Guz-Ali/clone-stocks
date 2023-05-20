import React from "react";
import "./Newsfeed.css";
import LineGraph from "./LineGraph";

function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed_container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>$253,221.55</h1>
            <p>+$567.44 (+0.22%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
