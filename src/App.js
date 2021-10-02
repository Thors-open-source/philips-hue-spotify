import './App.css';
import { Router } from "@reach/router";
import { useState } from "react";

import Login from "./views/Login/Login";
import Player from "./views/Player/Player";
import Callback from "./views/Callback";

import tokenContext from "./tokenContext";

function App() {

  var tokenState = useState(null);

  return (
    <tokenContext.Provider value={tokenState}>
      <Router>
        <Login path="/" />
        <Callback path="/callback" />
        <Player path="/player" />
      </Router>
    </tokenContext.Provider>
  );
}

export default App;
