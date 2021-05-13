import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MarsDevelop from "./MarsDevelop";
import {MarsProvider} from "./components/roversContext";

ReactDOM.render(
  <React.StrictMode>
    <MarsProvider>
      <MarsDevelop/>
    </MarsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
