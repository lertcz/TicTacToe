import React, { useState, createContext } from "react";
import Peer from "peerjs";

export const PeerContext = createContext()

const PeerProvider = ({ children }) => {

    const [conn, setConn] = useState(null)
    const peer = new Peer()

    let connection = {
        peer: peer,
        conn: conn,
        initConn: updateConn
    }

    function updateConn(id){
        var conn = connection.peer.connect(id)
        setConn(conn)

        conn.on('open', function() {
            // Receive messages
            conn.on('data', function(data) {
              console.log('Received', data);
            });
          
            // Send messages
            conn.send('Hello!');
          });
    }

    connection.peer.on('error', err => console.log('error', err))

    connection.peer.on('connect', () => {
        console.log('CONNECT')
    })

    connection.peer.on('close', () => {console.log("Conn closed!")})

    connection.peer.on('data', data => {
        console.log('got a message from other user: ' + data)
    })

    return (
        <PeerContext.Provider value={connection}>
            {children}
        </PeerContext.Provider>
    )
}

export default PeerProvider