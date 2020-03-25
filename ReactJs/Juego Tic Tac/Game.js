import "./Game.css";
import './main.css';
import React, { useState } from "react";

const Game = () => {
  const [texto, setTexto] = useState({
    text: Array(9).fill(null),
    isEs: true
  });
  const handleClick = i => {
    const slicee = texto.text.slice();

    slicee[i] = texto.isEs ? "X" : "0";

    setTexto({
      text: slicee,
      isEs: !texto.isEs
    });
    if (calculate(slicee) != null) {
      alert("ganado");
      setTexto({
        text: Array(9).fill(null),
        isEs: true
      });
    }
  };
  const calculate = streamm => {
    const matrix = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < matrix.length; i++) {
      const [a, b, c] = matrix[i];
      if (
        streamm[a] &&
        streamm[a] === streamm[b] &&
        streamm[a] === streamm[c]
      ) {
        return streamm[a];
      }
    }
    return null;
  };

  return (
    <div className="board">
      <div className="roww">
        <div className="row" onClick={() => handleClick(0)}>
          {texto.text[0]}
        </div>
        <div className="row" onClick={() => handleClick(1)}>
          {texto.text[1]}
        </div>
        <div className="row" onClick={() => handleClick(2)}>
          {texto.text[2]}
        </div>
      </div>
      <div className="roww">
        <div className="row" onClick={() => handleClick(3)}>
          {texto.text[3]}
        </div>
        <div className="row" onClick={() => handleClick(4)}>
          {texto.text[4]}
        </div>
        <div className="row" onClick={() => handleClick(5)}>
          {texto.text[5]}
        </div>
      </div>
      <div className="roww">
        <div className="row" onClick={() => handleClick(6)}>
          {texto.text[6]}
        </div>
        <div className="row" onClick={() => handleClick(7)}>
          {texto.text[7]}
        </div>
        <div className="row" onClick={() => handleClick(8)}>
          {texto.text[8]}
        </div>
      </div>
    </div>
  );
};

export default Game;
