import React, { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./Style.css";

// ======================
const Item=props=>{

  return <div className={"item level"+props.level}>
    {props.id}
  </div>
}
// =========================


const Animated_Button = props => {
  const [itemConfig, setItemConfig]= useState({
    items: props.items,
    position: props.position,
    direction:"left",
  });
  const clickRight = ()=>{
    let tempA=itemConfig.position;
    setItemConfig({...itemConfig,
      position: (tempA+1)% itemConfig.items.length,
      direction:"right",
    });
  }
  const clickLeft=()=>{
    // alert(itemConfig.direction)
    let tempA = itemConfig.position;
    tempA--;
    setItemConfig({...itemConfig,
      position: itemConfig.position < 0 ? itemConfig.items.length - 1 : tempA,
      direction: "left"
    });
  }
   function generateItems() {
    var items = []
    var level
    console.log(itemConfig.position)
    for (var i = itemConfig.position - 2; i < itemConfig.position + 3; i++) {
        var index = i
        if (i < 0) {
            index = itemConfig.items.length + i
        } else if (i >= itemConfig.items.length) {
            index = i % itemConfig.items.length
        }
        level = itemConfig.position - i
        items.push(<Item key={index} id={itemConfig.items[index]} level={level} />)
    }
    return items;
}
  return (
    <div className="container">
      <div id="carousel">
        <div className="arrow arrow_left " onClick={clickLeft}>&#10094;</div>
        <CSSTransitionGroup transitionName={itemConfig.direction}>
               {generateItems()}
          </CSSTransitionGroup>
        <div className="arrow arrow_right" onClick={clickRight}>&#10095;</div>
      </div>
    </div>
  );
};
export default Animated_Button;