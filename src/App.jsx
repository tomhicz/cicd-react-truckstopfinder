import React from "react";

import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";
import Results from "./components/Results";

export default function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      {/*<Map id="map" />*/}
      <Results />
    </div>
  );
}
