import React, { useState, useEffect } from "react";
import { TruckServices, Types, Amenities, Restaurants, Dropdown, Button } from "./searchComponents";
import { SearchWrapper } from "../elements";
import axios from "axios";

export default function Search({
  currentView,
  setCurrentView,
  searchState,
  setSearchState,
  locationState,
  setLocationState,
}) {
  const [isLoading, setLoading] = useState(true);
  const [amenities, setAmenities] = useState();

  //fetch amenities
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const { data: response } = await axios.get("/api/amenities", {
          signal: controller.signal,
        });
        const responseValues = Object.values(response);
        setAmenities(responseValues);
        setLoading(false);
        console.log("----------AMENITIES FETCH---------");
      } catch (e) {
        // handle fetch error
      }
    })();
    return () => controller?.abort();
  }, []);

  //hooks
  useEffect(() => {
    console.log("real state", searchState);
  }, [searchState]);

  //handlers
  const handleChange = (e, label, type, isLoading = false) => {
    if (!isLoading) {
      const stateCopy = { ...searchState };
      stateCopy[type][label] = !stateCopy[type][label];
      setSearchState(stateCopy);
      console.log("HANDLECHANGE");
    }
  };

  const handleDropdown = (e, key, value) => {
    const stateCopy = { ...locationState };
    stateCopy[key] = value;
    setLocationState(stateCopy);
  };

  const handleClick = (e, view) => {
    const stateCopy = { ...currentView };
    stateCopy[view] = "Results";
    setCurrentView(stateCopy);
  };

  return (
    <SearchWrapper>
      {/* <Dropdown
        locationState={locationState}
        setLocationState={setLocationState}
        handleChange={handleDropdown}
      /> */}
      <TruckServices
        searchState={searchState}
        setSearchState={setSearchState}
        handleChange={handleChange}
      />
      <Types
        searchState={searchState}
        setSearchState={setSearchState}
        handleChange={handleChange}
      />
      <Amenities
        searchState={searchState}
        setSearchState={setSearchState}
        handleChange={handleChange}
        isLoading={isLoading}
        amenities={amenities}
      />
      <Restaurants
        searchState={searchState}
        setSearchState={setSearchState}
        handleChange={handleChange}
      />
      <Button type="submit" currentView={currentView} handleClick={handleClick} />
    </SearchWrapper>
  );
}
