import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../../components/Board/Board"
import "../../index.css";

import { PeerContext } from "../PeerInfo/PeerInfo";

function OGame() {
  const navigate = useNavigate();
  const contextProps = useContext(PeerContext)

  const [update, forceUpdate] = useState(0)

  //const [squares, setSquares] = useState(Array(9).fill(null))
  const winner = calculateWinner(contextProps.squares)


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
    

    if(contextProps.squares[i] == null && contextProps.onTurn) {
        let localSquares = contextProps.squares
        localSquares[i] = contextProps.shape

        contextProps.setSquares(localSquares)
        contextProps.onTurn = false
        
        contextProps.conn.send(localSquares)
        forceUpdate(update + 1)
    }
  }

  function nextTurn() {
    if(winner) {
      contextProps.setSquares(Array(9).fill(null))
      navigate("/TicTacToe/game/rematch/" + winner);
    }
    else if(!contextProps.squares.includes(null)) {
      contextProps.setSquares(Array(9).fill(null))
      navigate("/TicTacToe/game/rematch/draw")
    }
    return contextProps.onTurn ? "Your turn" : "Opponent's turn"
  }

  return (
    <div className="setScreenSize">
      <div className="w-screen h-screen">
        <div className="sideBar">
          {/* !need to add that the opponent left */}
          <button className="button" onClick={() => navigate("/TicTacToe")}>Menu</button>
        </div>

        <div className="centerDivElement text-5xl">
          <p>{nextTurn()}</p>
        </div>

        <div className="centerDivElement boardDiv">
          <div className="board grid grid-rows-3 grid-cols-3">
            <Board squares={contextProps.squares} handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OGame;
