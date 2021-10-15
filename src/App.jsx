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
  const [currentView, setCurrentView] = useState();
  const [locations, setLocations] = useState([]);
  // const [markers, setMarkers] = useState([]);

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

  // useEffect(() => {
  //   const countryStore = new window.google.maps.MarkerImage(
  //     "https://freesvg.org/img/Wagonwheel2.png",
  //     null /* size is determined at runtime */,
  //     null /* origin is 0,0 */,
  //     null /* anchor is bottom center of the scaled image */,
  //     new window.google.maps.Size(32, 32)
  //   );

  //   const travelStop = new window.google.maps.MarkerImage(
  //     "https://freesvg.org/img/squat-marker-green.png",
  //     null /* size is determined at runtime */,
  //     null /* origin is 0,0 */,
  //     null /* anchor is bottom center of the scaled image */,
  //     new window.google.maps.Size(32, 32)
  //   );

  //   if (locations.length !== 0) {
  //     const markersArray = [];
  //     for (const location of locations) {
  //       const marker = {
  //         key: location.id,
  //         position: {
  //           lat: location.latitude,

  //           lng: location.longitude,
  //         },
  //         title: location.name,
  //         icon: countryStore,
  //       };
  //       markersArray.push(marker);
  //     }
  //     setMarkers(markersArray);
  //   }
  // }, []);

  //handlers
  function getSearch() {
    setCurrentView("Search");
  }

  return (
    <Grommet theme={theme} className="App" style={{ height: "100%" }}>
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Truck Stop Finder</h2>
      </div>
      <Map id="map" locations={locations} />
      {currentView === "Search" ? <Search setCurrentView={setCurrentView} /> : null}
      {currentView === "Results" ? <Results setCurrentView={setCurrentView} /> : null}
      <Results locations={locations} />
    </Grommet>
  );
}
