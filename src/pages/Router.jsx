import React from "react";
import { Route, Routes } from "react-router-dom";

import TitleScreen from "./TitleScreen/TitleScreen";
import WaitingRoom from "./WaitingRoom/WaitingRoom";
import LGame from "./Game/LocalGame";
import OGame from "./Game/OnlineGame";
import Rematch from "./Rematch/Rematch";


function Router() {
  return(
      <Routes>
        <Route exact path="/TicTacToe" element={<TitleScreen />} /> {/* <TitleScreen /> */}
        <Route exact path="/TicTacToe/wait" element={<WaitingRoom />} /> {/* <WaitingRoom /> */}
        <Route exact path="/TicTacToe/localGame" element={<LGame />} />
        <Route exact path="/TicTacToe/onlineGame" element={<OGame />} />
        <Route path="/TicTacToe/game/rematch/:winner" element={<Rematch />} />
      </Routes>
  )
}

export default Router