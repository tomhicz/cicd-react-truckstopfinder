import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import Results from "./components/Results";
import Search from "./components/Search";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  //state
  const [currentView, setCurrentView] = useState();

  //hooks
  useEffect(() => {
    getSearch();
  }, []);

  //handlers
  function getSearch() {
    setCurrentView("Search");
  }

  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.jsx</code> and save to reload.
      </p>
      <Map id="map" />
      {currentView === "Search" ? <Search setCurrentView={setCurrentView} /> : null}
      {currentView === "Results" ? <Results setCurrentView={setCurrentView} /> : null}
    </div>
  );
}
