import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./assets/styles/global";
// eslint-disable-next-line no-unused-vars
import HackTimer from "./assets/scripts/HackTimer/HackTimer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
