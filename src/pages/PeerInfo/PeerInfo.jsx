import React, { useState, createContext } from "react";
import Peer from "peerjs";

export const PeerContext = createContext()

const PeerProvider = ({ children }) => {


    let connection = {
        peer1: new Peer(),
        conn: null
    }

    return (
        <PeerContext.Provider value={connection}>
            {children}
        </PeerContext.Provider>
    )
}

export default PeerProvider