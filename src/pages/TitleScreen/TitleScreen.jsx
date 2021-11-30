import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { PeerContext } from "../PeerInfo/PeerInfo";

function TitleScreen() {
    const navigate = useNavigate();
    const contextProps = useContext(PeerContext)

    const [idValue, setIdValue] = useState('')

    function createGame() {
        navigate("/TicTacToe/wait")
    }

    const joinGame = async(e) => {

        if(idValue !== ""){
            e.preventDefault();

            //contextProps.peer.signal(data)

            contextProps.initConn(idValue)
        }
    }

    useEffect(() => {
        console.log("conn: ", contextProps.conn)

    }, [contextProps.conn])

    var data = "data"

    contextProps.peer.on('data', data => {
        console.log('got a message from other peer: ' + data)
    })

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
                    <input className="textField" value={idValue} onChange={(e) => setIdValue(e.target.value)}
                    id="roomID" placeholder="Room ID" size="38" required></input>
                </div>
                <div>
                    <button className="button" onClick={joinGame}>Join Game</button>
                </div>
            </form>
            <button className="button" onClick={() => console.log(contextProps.peer.id)}>Pear ID</button>
            <button className="button" onClick={() => console.log("conn: ", contextProps.conn)}>Conn ID</button>
            <h1>{data}</h1>
            <button className="button" onClick={() => {
                contextProps.peer.send("hello")
            }}>Send</button>
            
        </div>
    )
}

export default TitleScreen