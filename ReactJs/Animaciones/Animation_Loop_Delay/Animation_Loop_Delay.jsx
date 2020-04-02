import React, { useState, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./Style.css";

const Item=()=>{
  return(
    <div className="tile"></div>
  )
}

const Animated_Button=()=>{
  function generated(){
    let items=[];
    for(let i=1;i<=12;i++){
      items.push(<Item key={i}/>)
    }
    return items;
  }
  return (<div className="container">
    <div className="tiles">
      {
        generated()
      }
      </div>

  </div>)
}

export default Animated_Button;
