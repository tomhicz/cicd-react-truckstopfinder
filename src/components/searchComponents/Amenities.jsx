import React, { useEffect } from "react";
import { Checkbox } from "./Checkbox";

const Search = (props) => (
  <div>
    {props.options.map((option) => (
      <Checkbox
        key={option.key}
        label={option}
        onChange={(e) => props.handleChange(e, option.label, "amenities")}
        {...option}
      />
    ))}
  </div>
);

export function Amenities({ searchState, setSearchState, handleChange }) {
  //hooks
  useEffect(() => {
    const stateCopy = { ...searchState };
    for (const option of options) {
      stateCopy.amenities[option.label] = false;
    }
    setSearchState(stateCopy);
  }, []);

  const options = [
    {
      key: 1,
      label: "Private Showers",
      //   value: oilChange,
      //   onChange: handleOilChange,
    },
    {
      key: 2,
      label: "CAT Scales",
      //   value: tirePass,
      //   onChange: handleTirePass,
    },
    {
      key: 3,
      label: "Wifi",
      //   value: lightMechanical,
      //   onChange: handleLightMechanical,
    },
    {
      key: 4,
      label: "ATM",
      //   value: truckTireCare,
      //   onChange: handleTruckTireCare,
    },
  ];

  return (
    <div>
      <Search options={options} handleChange={handleChange}></Search>
    </div>
  );
}
