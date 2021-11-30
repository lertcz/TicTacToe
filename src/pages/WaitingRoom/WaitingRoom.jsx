import React, { useContext } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNavigate } from "react-router-dom";
import "../../index.css";

import { PeerContext } from "..//PeerInfo/PeerInfo";


function WaitingRoom() {
    const navigate = useNavigate();
    const contextProps = useContext(PeerContext)
    
    return (
        <div className="centerDivElementCol min-h-screen">
            <div>
                <p className="text-5xl">Waiting for the opponent ...</p>
            </div>
            <div>
                <p className="IDtext">{"ID: " + contextProps.peer.id}</p>
            </div>
            <div>
                <CopyToClipboard text={contextProps.peer.id}>
                    <button className="button">COPY</button>
                </CopyToClipboard>
            </div>
            <div>
                <button className="button" onClick={() => navigate("/TicTacToe")}>Back</button>
                <button className="button" onClick={() => console.log("connWaitRoom: ", contextProps.conn)/* navigate("/TicTacToe/game") */}>Load Game</button>
            </div>
        </div>
    )
}

export default WaitingRoom