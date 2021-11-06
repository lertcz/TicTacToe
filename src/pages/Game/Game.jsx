import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../../components/Board/Board"
import "../../index.css";

function Game() {
  const navigate = useNavigate();

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

  function nextTurn() {
    if(winner) {
      navigate("/TicTacToe/game/rematch/" + winner);
    }
    else if(!squares.includes(null)) {
      navigate("/TicTacToe/game/rematch/draw")
    }
    return Xturn ? "X's turn" : "O's turn"
  }

  return (
      <div className="grid grid-cols-3 grid-rows-4 min-h-screen text-5xl">
        <div className="centerDivElement col-span-3"><p>{nextTurn()}</p></div>
        <Board squares={squares} handleClick={handleClick} />

      </div>
  );
}

export default Game;
