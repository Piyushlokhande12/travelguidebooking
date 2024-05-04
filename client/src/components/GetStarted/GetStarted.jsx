import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Best Way To Start Your Journey !</span>
          <span className="secondaryText">
          Travelling opens the door of creating <p style={{color:"#d4e51b"}}> memories</p>
            <br />
            </span>
          <button className="button" href>
            <a href="mailto:rabbitboy110@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
