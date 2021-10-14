import React, { useEffect, useState } from "react";
import { TruckServices, Types, Amenities, Restaurants, Dropdown } from "./searchComponents";
import { SearchWrapper } from "../elements";

export default function Search() {
  //state
  const [searchState, setSearchState] = useState({
    amenities: {},
    restaurants: {},
    truck_services: {},
    type: {},
  });
  const [locationState, setLocationState] = useState({
    state: undefined,
    city: undefined,
    highway: undefined,
  });

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
    </SearchWrapper>
  );
}
