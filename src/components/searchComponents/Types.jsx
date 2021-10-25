import React, { useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { TypesWrapper } from "../../elements";

const Search = (props) => (
  <TypesWrapper>
    {props.types.map((type) => (
      <Checkbox
        key={type.key}
        label={type}
        onChange={(e) => props.handleChange(e, type.label, "type")}
        {...type}
      />
    ))}
  </TypesWrapper>
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

  return <Search className="types" types={types} handleChange={handleChange}></Search>;
}
