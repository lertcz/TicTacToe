import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";

export const PeerContext = createContext()

//TODO add text when opponent left 

const PeerProvider = ({ children }) => {
    const navigate = useNavigate();

    const [conn, setConn] = useState(null)
    const [peer] = useState(new Peer())

    const [shape, setShape] = useState(null)
    const [onTurn, setOnTurn] = useState(false)
    const [squares, setSquares] = useState(Array(9).fill(null))

    const [restartCount, setRCount] = useState(0)

    let connection = {
        peer: peer,
        conn: conn,

        shape: shape,

        onTurn: onTurn,
        setOnTurn: setOnTurn,

        squares: squares,
        setSquares: setSquares,
        joinPeer: updateConn,

        restartCount: restartCount,
        setRCount: setRCount
    }

    function updateConn(id){
        setShape("O")
        setConn(peer.connect(id))
    }

    peer.on('connection', function(recievedConnection) {
        setShape("X")
        setOnTurn(true)
        setConn(recievedConnection)
        navigate("/TicTacToe/onlineGame")
    });

    useEffect(() => {
        if(connection.conn){
            conn.on('open', function() {
                conn.on('data', function(data) {
                    //console.log('Received data:', data);
                    if (typeof(data) === "object") {
                        setSquares(data)
                        setOnTurn(true)
                    }
                    else if (typeof(data) === "string") {
                        if (data === "restartWait") {
                            setRCount(restartCount + 1)
                        }
                        else if (data === "restart") {
                            navigate("/TicTacToe/onlineGame")
                        }
                    }
                    
                });
          
                conn.on('close', () => {
                    console.log("Connection Closed")
                });
          
                conn.on('error', err => {
                    console.log("ERROR: ", err);
                });
            });
            
            //can add more
        }
      });

    return (
        <PeerContext.Provider value={connection}>
            {children}
        </PeerContext.Provider>
    )
}

export default PeerProvider