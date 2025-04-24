import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WindowProvider } from "./Context/WindowContext"; // Assurez-vous que le chemin est correct

ReactDOM.render(
  <WindowProvider>
    <App />
  </WindowProvider>,
  document.getElementById("root")
);
