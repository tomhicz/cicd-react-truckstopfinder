import React, { useState, useEffect } from "react";
import { Types, Amenities, Restaurants, Dropdown, Button, TruckServices } from "./searchComponents";
import { SearchWrapper } from "../elements";
import { Card } from "grommet";

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

  const handleDropdown = (key, value) => {
    const stateCopy = { ...locationState };
    stateCopy[key] = value;
    setLocationState(stateCopy);
    console.log("HANDLEDROPDOWN", locationState);
  };

  const handleClick = (e, view) => {
    const stateCopy = { ...currentView };
    stateCopy[view] = "Results";
    setCurrentView(stateCopy);
  };

  return (
    <SearchWrapper>
      <Card pad="small" background="light-1" margin="xsmall">
        <Dropdown
          locationState={locationState}
          setLocationState={setLocationState}
          handleDropdown={handleDropdown}
        />
      </Card>
      <Card pad="small" background="light-1" margin="xsmall">
        <TruckServices
          searchState={searchState}
          setSearchState={setSearchState}
          handleChange={handleChange}
        />
      </Card>
      <Card pad="small" background="light-1" margin="xsmall">
        <Types
          searchState={searchState}
          setSearchState={setSearchState}
          handleChange={handleChange}
        />
      </Card>
      <Card pad="small" background="light-1" margin="xsmall">
        <Amenities
          searchState={searchState}
          setSearchState={setSearchState}
          handleChange={handleChange}
        />
      </Card>
      <Card pad="small" background="light-1" margin="xsmall">
        <Restaurants
          searchState={searchState}
          setSearchState={setSearchState}
          handleChange={handleChange}
        />
      </Card>
      <Button type="submit" currentView={currentView} handleClick={handleClick} />
    </SearchWrapper>
  );
}
