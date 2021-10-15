import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import Results from "./components/Results";
import Search from "./components/Search";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Box, Grommet } from "grommet";

export default function App() {
  //Gtommet theme styles
  const theme = {
    global: {
      font: {
        family: "Roboto",
        size: "14px",
        height: "20px",
      },
    },
  };

  //state
  const [currentView, setCurrentView] = useState({ view: "Search" });
  const [locations, setLocations] = useState([]);
  const [searchState, setSearchState] = useState({
    amenities: {},
    restaurants: {},
    truck_services: {},
    type: {},
  });
  const [locationState, setLocationState] = useState({
    state: "IL",
    city: "null",
    highway: "null",
  });

  //fetch locations
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const { data: response } = await axios.get("/api/locations", {
          signal: controller.signal,
        });
        setLocations(response);
        console.log("---------LOCATIONS FETCH---------");
      } catch (e) {
        // handle fetch error
      }
    })();
    return () => controller?.abort();
  }, []);

  return (
    <Grommet theme={theme} className="App" style={{ height: "100%" }}>
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Truck Stop Finder</h2>
      </div>
      <Map id="map" locations={locations} view={"view"} />
      {currentView.view === "Search" ? (
        <Search
          currentView={currentView}
          setCurrentView={setCurrentView}
          searchState={searchState}
          setSearchState={setSearchState}
          locationState={locationState}
          setLocationState={setLocationState}
        />
      ) : null}
      {currentView.view === "Results" ? <Results locations={locations} /> : null}
    </Grommet>
  );
}
