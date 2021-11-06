import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

function Rematch() {
    const navigate = useNavigate();

    return (
        <div className="centerDivElement min-h-screen">
            <div>
                <p className="text-5xl">Waiting for the opponent ...</p>
            </div>
            <div>
                <button className="button marginTopPlus" onClick={() => navigate("/TicTacToe")}>Menu</button>
                <button className="button marginTopPlus" onClick={() => navigate("/TicTacToe/game")}>Restart</button>
            </div>
        </div>
    )
}

export default Rematch