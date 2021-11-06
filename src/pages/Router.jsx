import React from "react";
import { Route, Routes } from "react-router-dom";

import TitleScreen from "./TitleScreen/TitleScreen";
import WaitingRoom from "./WaitingRoom/WaitingRoom";
import Game from "./Game/Game";
import Rematch from "./Rematch/Rematch";

function Router() {
    return(
        <Routes>
          <Route exact path="/TicTacToe" element={<TitleScreen />} /> {/* /TicTacToe  etc.*/}
          <Route exact path="/TicTacToe/wait" element={<WaitingRoom />} />
          <Route exact path="/TicTacToe/game" element={<Game />} />
          <Route exact path="/TicTacToe/game/rematch" element={<Rematch />} />
        </Routes>
    )
}

export default Router