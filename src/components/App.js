import React, { useEffect, useState } from "react";
import Map from "./Map";
import Results from "./Results";
import Search from "./Search";

export default function App() {
  //state
  const [currentView, setCurrentView] = useState();

  //hooks
  useEffect(() => {}, []);

  //handlers

  return (
    <div className="app">
      {/*<Map />*/}
      {currentView === "Search" ? <Search setCurrentView={setCurrentView} /> : null}
      {currentView === "Results" ? <Results setCurrentView={setCurrentView} /> : null}
      <Results />
    </div>
  );
}
