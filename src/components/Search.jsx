import React, { useEffect } from "react";
import { TruckServices, Types, Amenities, Restaurants, Dropdown, Button } from "./searchComponents";
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

  //handlers
  const handleChange = (e, label, type) => {
    const stateCopy = { ...searchState };
    stateCopy[type][label] = !stateCopy[type][label];
    setSearchState(stateCopy);
  };

  //handlers
  const handleClick = (e, view) => {
    const stateCopy = { ...currentView };
    stateCopy[view] = "Results";
    setCurrentView(stateCopy);
    console.log("curView from Search", currentView);
  };

  return (
    <SearchWrapper>
      <Dropdown
        locationState={locationState}
        setLocationState={setLocationState}
        handleChange={handleChange}
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
