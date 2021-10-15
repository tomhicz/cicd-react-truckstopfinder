import React, { useEffect } from "react";
import { Checkbox } from "./Checkbox";

const Search = (props) => (
  <div>
    {props.types.map((type) => (
      <Checkbox
        key={type.key}
        label={type}
        onChange={(e) => props.handleChange(e, type.label, "type")}
        {...type}
      />
    ))}
  </div>
);

export function Types({ searchState, setSearchState, handleChange }) {
  //hooks
  useEffect(() => {
    const stateCopy = { ...searchState };
    for (const type of types) {
      stateCopy.type[type.label] = false;
    }
    setSearchState(stateCopy);
  }, []);

  const types = [
    {
      key: 1,
      label: "Travel Stop",
    },
    {
      key: 2,
      label: "Country Store",
    },
  ];

  return (
    <div>
      <Search types={types} handleChange={handleChange}></Search>
    </div>
  );
}
