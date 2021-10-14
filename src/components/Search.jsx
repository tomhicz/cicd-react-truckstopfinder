import React, { useEffect, useState } from "react";
import { TruckServices, Types, Amenities, Restaurants } from "./searchComponents";
import { SearchWrapper } from "../elements";

export default function Search() {
  //state
  const [searchState, setSearchState] = useState({});

  //hooks
  useEffect(() => {
    console.log("real state", searchState);
  }, [searchState]);

  //handlers
  const handleChange = (e, label) => {
    const stateCopy = { ...searchState };
    stateCopy[label] = !stateCopy[label];
    setSearchState(stateCopy);
  };

  return (
    <SearchWrapper>
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
