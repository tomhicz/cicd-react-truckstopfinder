import React, { useState, useEffect } from "react";
import { Checkbox } from "./Checkbox";

const Search = (props) => (
  <div>
    {props.options.map((option) => (
      <Checkbox
        key={props.options.indexOf(option)}
        label={option}
        onChange={(e) => props.handleChange(e, option.label, "amenities")}
        {...option}
      />
    ))}
  </div>
);

export function Amenities({ searchState, setSearchState, handleChange, amenities }) {
  console.log("AMENITIES", amenities);

  //hooks
  useEffect(() => {
    const stateCopy = { ...searchState };
    for (const option of amenities) {
      stateCopy.amenities[option] = false;
    }
    setSearchState(stateCopy);
  }, []);

  return (
    <div>
      <Search options={amenities} handleChange={handleChange}></Search>
    </div>
  );
}
