import React, { useEffect } from "react";
import { Checkbox } from "./Checkbox";

const Search = (props) => (
  <div>
    {props.options.map((option) => (
      <Checkbox
        key={option.key}
        label={option}
        onChange={(e) => props.handleChange(e, option.label, "restaurants")}
        {...option}
      />
    ))}
  </div>
);

export function Restaurants({ searchState, setSearchState, handleChange }) {
  //hooks
  useEffect(() => {
    const stateCopy = { ...searchState };
    for (const option of options) {
      stateCopy.restaurants[option.label] = false;
    }
    setSearchState(stateCopy);
  }, []);

  const options = [
    {
      key: 1,
      label: "Arby's",
      //   value: oilChange,
      //   onChange: handleOilChange,
    },
    {
      key: 2,
      label: "Wendy's",
      //   value: tirePass,
      //   onChange: handleTirePass,
    },
  ];

  return (
    <div>
      <Search options={options} handleChange={handleChange}></Search>
    </div>
  );
}
