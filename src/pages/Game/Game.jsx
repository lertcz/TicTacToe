import React, { useState } from "react";
import Board from "../../components/Board/Board"
import "../../index.css";

function Game() {
  const [Xturn, setXturn] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const winner = calculateWinner(squares)

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return false;
  }

  function handleClick(i) {
    if(winner) {
      return // title screen TODO
    }
    else if(squares[i] == null) {
      let localSquares = squares
      localSquares[i] = Xturn ? "X" : "O"
      setSquares(localSquares)
      setXturn(!Xturn)

    }
  }

  function setTitle() {
    if(winner) {
      return winner + " won the game!"
    }
    else if(!squares.includes(null)) {
      return "Draw!"
    }
    return Xturn ? "X's turn" : "O's turn"
  }

  return (
      <div className="grid grid-cols-3 grid-rows-4 min-h-screen text-5xl">
        <div className="centerDivElement col-span-3"><p>{setTitle()}</p></div>
        <Board squares={squares} handleClick={handleClick} />

      </div>
  );
}

export default Game;
