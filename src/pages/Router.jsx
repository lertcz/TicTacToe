import React from "react";
import { Route, Routes } from "react-router-dom";

import TitleScreen from "./TitleScreen/TitleScreen";
import WaitingRoom from "./WaitingRoom/WaitingRoom";
import Game from "./Game/Game";

function Router() {
    return(
        <Routes>
          <Route exact path="/" element={<TitleScreen />} />
          <Route exact path="/wait" element={<WaitingRoom />} />
          <Route exact path="/game" element={<Game />} />
        </Routes>
    )
}

export default Router