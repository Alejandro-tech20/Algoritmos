import React, { useState, useEffect, useRef } from "react";
import { CSSTransitionGroup, TransitionGroup, Transition } from "react-transition-group";
import "./Style.css";
import {TweenMax} from 'gsap';


class Box extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    // const el = this.boxx;
    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
  }

  render () {
    return <div className="box" ref={c => this.container = c}/>;
  }
}
// // ==========================
// const Box = ()=>{
//   TransitionGroup.componentWillEnter(callback){
//     TweenMax.fromTo(
//       boxx.current,
//        0.3,
//        {
//          y:100, 
//         opacity:0
//       },
//       {
//         y:0,
//         opacity:1,
//         onComplete: callback
//       }
//        );
//        componentWillLeave (callback) {
//         const el = boxx.current;
//         TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
//       }
//   }
//   const boxx = useRef(null);
//   return <div className="box" ref={boxx} ></div>
// }
// // =======================
const Animated_Button = ()=>{
  const boxx = useRef(null);
  const [isActive, setIsActive]= useState(true);
  const toggleBox = ()=>{
    setIsActive(!isActive);
  }
//   useEffect(()=>{
// TweenMax.from(
//   [boxx,]
// )
//   })

return(
  <div className='container1'>
    <TransitionGroup>
      {isActive && <Box/>}
    </TransitionGroup>
    <button className="toggle-btn" onClick={toggleBox}>
      Cambiar
    </button>

  </div>
)
}
export default Animated_Button;
