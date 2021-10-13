import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import Results from "./components/Results";
import Search from "./components/Search";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

export default function App() {
  //state
  const [currentView, setCurrentView] = useState();
  const [locations, setLocations] = useState([]);
  const [markers, setMarkers] = useState([]);

  //hooks
  useEffect(() => {
    getSearch();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const { data: response } = await axios.get("/api/locations", {
          signal: controller.signal,
        });
        setLocations(response);
      } catch (e) {
        // handle fetch error
      }
    })();
    return () => controller?.abort();
  }, []);

  useEffect(() => {
    const countryStore = new window.google.maps.MarkerImage(
      "https://freesvg.org/img/Wagonwheel2.png",
      null /* size is determined at runtime */,
      null /* origin is 0,0 */,
      null /* anchor is bottom center of the scaled image */,
      new window.google.maps.Size(32, 32)
    );

    if (locations.length !== 0) {
      const markersArray = [];
      for (const location of locations) {
        const marker = {
          key: location.id,
          position: {
            lat: location.latitude,

            lng: location.longitude,
          },
          title: location.name,
          icon: countryStore,
        };
        markersArray.push(marker);
      }
      setMarkers(markersArray);
    }
  }, []);

  //handlers
  function getSearch() {
    setCurrentView("Search");
  }

  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Welcome to React!!!</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.jsx</code> and save to reload.
      </p>
      <Map id="map" locations={locations} markers={markers} />
      {currentView === "Search" ? <Search setCurrentView={setCurrentView} /> : null}
      {currentView === "Results" ? <Results setCurrentView={setCurrentView} /> : null}
      <Results />
    </div>
  );
}
