import React from "react";
import "./Screen1.css";
import nyorck from "../../img/new_yorck.jpg";
import TodoList from "../Animated_Item/AnimatedItem";

const Screen1 = () => {
  return (
    <div className="screen1">
      <div class="content">
  <div class="content__container">
    <p class="content__container__text">
      Hello
    </p>
    
    <ul class="content__container__list">
      <li class="content__container__list__item">world !</li>
      <li class="content__container__list__item">bob !</li>
      <li class="content__container__list__item">users !</li>
      <li class="content__container__list__item">everybody !</li>
    </ul>
  </div>
</div>
    </div>
  );
};
export default Screen1;
