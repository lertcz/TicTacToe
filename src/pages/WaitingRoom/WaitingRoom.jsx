import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

function WaitingRoom() {
    const navigate = useNavigate();

    function load() {
        console.log("Loading Game!")
        navigate("/TicTacToe/game")
    }
    return (
        <div className="centerDivElement min-h-screen">
            <div>
                <p className="text-5xl">Waiting for the opponent ...</p>
            </div>
            <div>
                <button className="button marginTopPlus" onClick={() => navigate("/TicTacToe")}>Back</button>
                <button className="button marginTopPlus" onClick={load}>Load Game</button>
            </div>
        </div>
    )
}

export default WaitingRoom