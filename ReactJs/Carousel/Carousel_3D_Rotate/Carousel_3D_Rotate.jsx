import React from "react";
import "./Screen1.css";
import nyorck from "../../img/new_yorck.jpg";
import TodoList from "../Animated_Item/AnimatedItem";
import FirstDiv from "../FirtsDiv/FirtsDiv";

const Screen1 = () => {
  return (
    <div className="screen1">
      <figure className="container_card">
        <div className="container_card_items">
          <div className="container_card_item step-animation">
            <span className="h1" role="img">
              🙂
            </span>
          </div>
          <div className="container_card_item">
            <span className="h1" role="img">
              Hola
            </span>
          </div>
          <div className="container_card_item">
            <span className="h1" role="img">
            Buenas
            </span>
          </div>
        </div>
      </figure>
    </div>
  );
};
export default Screen1;
