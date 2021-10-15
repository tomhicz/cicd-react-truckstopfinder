import React, { useState, useEffect } from "react";
import { Checkbox } from "./Checkbox";
import axios from "axios";

const Search = (props) => (
  <div>
    {props.options.map((option) => (
      <Checkbox
        key={props.options.indexOf(option)}
        label={option}
        onChange={(e) => props.handleChange(e, option, "amenities", props.isLoading)}
        {...option}
      />
    ))}
  </div>
);

export function Amenities({ searchState, setSearchState, handleChange, isLoading, amenities }) {
  console.log("AMENITIES", amenities);
  //hooks;
  useEffect(() => {
    if (!isLoading) {
      const name = "amenities";
      const stateCopy = { ...searchState };
      for (const option of amenities) {
        stateCopy[name][option] = false;
      }
      console.log("---------useEffect---------");
      setSearchState(stateCopy);
    }
  }, [isLoading]);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div>
      <Search options={amenities} handleChange={handleChange} isLoading={isLoading}></Search>
    </div>
  );
}
