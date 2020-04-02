import React, { useState, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "./Style.css";

const Item = () => {
  return <div className="tile"></div>;
};

const Animated_Button = () => {
  const generate = () => {
    let items = [];
    for (let i = 0; i < 12; i++) {
      items.push(<Item key={i} />);
    }
    // setLista( items);
    return items;
  };
  const [lista, setLista] = useState({
    sta: true,
    ll: null
  });

  const reload = () => {
    setLista({ sta: !lista.sta, ll: null });
  };
  useEffect(() => {
    setLista({
      ...lista,
      ll: generate()
    });
  }, [lista.sta]);

  return (
    <div className="container">
      <div className="tiles">
        {
          // generate()
          lista.ll
        }
      </div>
      <a href="javascript:void(0);" className="reload" onClick={reload}>
        Reload
      </a>
    </div>
  );
};

export default Animated_Button;
