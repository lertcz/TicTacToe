import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

//import TitleScreen from "./TitleScreen/TitleScreen";
import PeerTest from "./PeerTest/PeerTest";
import PeerWait from "./PeerTest/PeerWait";
//import WaitingRoom from "./WaitingRoom/WaitingRoom";
import Game from "./Game/Game";
import Rematch from "./Rematch/Rematch";

import Peer from "peerjs";

export const PeerInfo = React.createContext()

function Router() {
  const [peerid, setPeerid] = useState(new Peer())
  
  return(
    <PeerInfo.Provider value={peerid}>
      <Routes>
        <Route exact path="/TicTacToe" element={<PeerTest />} /> {/* <TitleScreen /> */}
        <Route exact path="/TicTacToe/wait" element={<PeerWait />} /> {/* <WaitingRoom /> */}
        <Route exact path="/TicTacToe/game" element={<Game />} />
        <Route path="/TicTacToe/game/rematch/:winner" element={<Rematch />} />
      </Routes>
    </PeerInfo.Provider>
  )
}

export default Router