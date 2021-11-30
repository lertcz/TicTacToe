import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Board from "../../components/Board/Board"
import "../../index.css";

import { PeerContext } from "..//PeerInfo/PeerInfo";

function Game() {
  const navigate = useNavigate();

  const [Xturn, setXturn] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const winner = calculateWinner(squares)

  const contextProps = useContext(PeerContext)
  alert(contextProps.conn)

  /* connection.peer1.on('signal', (data) => {
    console.log('peer1 signal', data)
    connection.peer2.signal(data)
  })

  connection.peer2.on('signal', (data) => {
      console.log('peer2 signal', data)
      connection.peer1.signal(data)
  }) */

  /* connection.peer1.on('signal', (data) => console.log('peer1 signal', data))
  connection.peer1.on('connect', () => console.log('peer1 connected'))
  connection.peer1.on('data', (data) => console.log('peer1 received', data))
  connection.peer1.on('error', (error) => console.error('peer1 error', error))
  connection.peer1.on('close', () => console.log('peer1 connection closed'))

  connection.peer2.on('signal', (data) => console.log('peer2 signal', data))
  connection.peer2.on('connect', () => console.log('peer2 connected'))
  connection.peer2.on('data', (data) => console.log('peer2 received', data))
  connection.peer2.on('error', (error) => console.error('peer2 error', error))
  connection.peer2.on('close', () => console.log('peer2 connection closed')) */

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
    <div className="min-h-screen">
      <div className="centerDivElement text-5xl">
        <p>{nextTurn()}</p>
      </div>

      <div className="centerDivElement boardDiv">
        <div className="board grid grid-rows-3 grid-cols-3">
          <Board squares={squares} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Game;
