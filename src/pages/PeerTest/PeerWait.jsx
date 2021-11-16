import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

import { PeerContext } from "..//PeerInfo/PeerInfo";




function PeerWait() {
    const navigate = useNavigate();

    const contextProps = useContext(PeerContext)
    console.log("Context Props: ", contextProps.id)
    return (
        <div className="centerDivElementCol min-h-screen">
            <div>
                <p className="text-5xl">Waiting for the opponent ...</p>
                <p>{"Your ID: "}</p>
            </div>
            <div>
                <button className="button marginTopPlus" onClick={() => navigate("/TicTacToe")}>Back</button>
                <button className="button marginTopPlus" onClick={() => navigate("/TicTacToe/game")}>Load Game</button>
            </div>
        </div>
    )
}

export default PeerWait