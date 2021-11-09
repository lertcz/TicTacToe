import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { PeerInfo } from "../Router";




function PeerWait() {
    const navigate = useNavigate();

    const peerid = useContext(PeerInfo)

    console.log(peerid)

    return (
        <div className="centerDivElementCol min-h-screen">
            <div>
                <p className="text-5xl">Waiting for the opponent ...</p>
                <p>Your ID:</p>
            </div>
            <div>
                <button className="button marginTopPlus" onClick={() => navigate("/TicTacToe")}>Back</button>
                <button className="button marginTopPlus" onClick={() => navigate("/TicTacToe/game")}>Load Game</button>
            </div>
        </div>
    )
}

export default PeerWait