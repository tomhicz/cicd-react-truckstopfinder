import React, { useEffect } from "react";
import { Checkbox } from "./Checkbox";

const Search = (props) => (
  <div>
    {props.options.map((option) => (
      <Checkbox
        key={option.key}
        label={option}
        onChange={(e) => props.handleChange(e, option.label, "truck_services")}
        {...option}
      />
    ))}
  </div>
);

export function TruckServices({ searchState, setSearchState, handleChange }) {
  //hooks
  useEffect(() => {
    const stateCopy = { ...searchState };
    for (const option of options) {
      stateCopy.truck_services[option.label] = false;
    }
    setSearchState(stateCopy);
  }, []);

  const options = [
    {
      key: 1,
      label: "Oil Change",
      //   value: oilChange,
      //   onChange: handleOilChange,
    },
    {
      key: 2,
      label: "TirePass",
      //   value: tirePass,
      //   onChange: handleTirePass,
    },
    {
      key: 3,
      label: "Light Mechanical",
      //   value: lightMechanical,
      //   onChange: handleLightMechanical,
    },
    {
      key: 4,
      label: "Truck Tire Care",
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
