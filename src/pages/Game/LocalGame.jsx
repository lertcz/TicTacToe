import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../../components/Board/Board"
import "../../index.css";

function LGame() {
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
      navigate("/TicTacToe/game/rematch/D")
    }
    return Xturn ? "X's turn" : "O's turn"
  }

  return (
    <div className="setScreenSize">
      <div className="sideBar">
        {/* !need to add that the opponent left */}
        <button className="button" onClick={() => navigate("/TicTacToe")}>Menu</button>
      </div>

      <div className="w-screen h-screen">
        <div className="centerDivElement text-5xl">
          <p>{nextTurn()}</p>
        </div>

        <div className="centerDivElement boardDiv">
          <div className="board grid grid-rows-3 grid-cols-3">
            <Board squares={squares} handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LGame;
