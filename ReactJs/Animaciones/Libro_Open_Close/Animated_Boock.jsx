import React from "react";
import "./Animated_Boock.css";
import imagen from '../../img/8Copy.jpg'
const Animated_Boock = () => {
  return (
    <div className="body_card">
      <div className="card">
        <div className="imgBox">
          <img src={imagen} alt="" />
        </div>
        <div className="details">
          <h2>lorem10</h2>
        </div>
      </div>
    </div>
  );
};

export default Animated_Boock;
