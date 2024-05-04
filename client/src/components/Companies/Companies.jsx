import React from "react";
import './Companies.css'
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img style={{height:"140px",width:"150px"}} src="./hills.jpeg" alt="" />
        <img src="./temples.jpeg" alt="" />
        <img src="./waterfalls.jpeg" alt="" />
        <img src="./forts.jpeg" alt="" />
      </div>
    </section>
  );
};

export default Companies;
