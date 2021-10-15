import React, { useState, useEffect } from "react";
import { Types, Amenities, Restaurants, Dropdown, Button, TruckServices } from "./searchComponents";
import { SearchWrapper } from "../elements";

export default function Search({
  currentView,
  setCurrentView,
  searchState,
  setSearchState,
  locationState,
  setLocationState,
}) {
  //hooks
  useEffect(() => {
    console.log("real state", searchState);
  }, [searchState]);
  //hooks
  useEffect(() => {
    console.log("location state", locationState);
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
      <Dropdown
        locationState={locationState}
        setLocationState={setLocationState}
        handleChange={handleDropdown}
      />
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
