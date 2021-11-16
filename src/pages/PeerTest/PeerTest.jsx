import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

function PeerTest() {
    const navigate = useNavigate();

    function createGame() {
        navigate("/TicTacToe/wait")
    }

    const joinGame = async(e) => {
        e.preventDefault();

        console.log(idValue);
    }
    
    /*function displayID(id) {
        return id ? "ID: " + id : "ID:"
    } */

    return (
        <div className="centerDivElementCol min-h-screen">
            <div>
                <p className="text-5xl">TicTacToe</p>
            </div>
            <div>
                <button className="button" onClick={createGame}>Create Game</button>
            </div>
            <form className="centerDivElement" onSubmit={joinGame}>
                <div>
                    <input className="textField" value={idValue} onChange={(e) => setidValue(e.target.value)}
                    id="roomID" placeholder="Room ID" size="38" required></input>
                </div>
                <div>
                    <button className="button" onClick={joinGame}>Join Game</button>
                </div>
            </form>
        </div>
    )
}

export default PeerTest