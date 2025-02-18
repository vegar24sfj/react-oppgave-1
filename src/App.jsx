import React from "react";
import { meny } from "./data";
import Menu from "./components/menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Restaurant Meny</h1>
      <Menu meny={meny} />
    </div>
  );
}

export default App;
