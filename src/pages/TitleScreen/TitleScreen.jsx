import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

function TitleScreen() {
    const navigate = useNavigate();

    function createGame() {
        navigate("/TicTacToe/wait")
    }

    function joinGame() {

    }

    return (
        <div className="centerDivElementCol min-h-screen">
            <div>
                <p className="text-5xl">TicTacToe</p>
            </div>
            <div>
                <button className="button" onClick={createGame}>Create Game</button>
            </div>
            <div>
                <input className="textField" placeholder="Room ID" size="16"></input>
            </div>
            <div>
                <button className="button" onClick={joinGame}>Join Game</button>
            </div>
        </div>
    )
}

export default TitleScreen