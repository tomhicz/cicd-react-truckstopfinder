import React, { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";

const Search = (props) => (
  <div>
    {props.options.map((option) => (
      <Checkbox key={option.key} label={option} {...option} />
    ))}
  </div>
);

export function TruckServices() {
  //state
  const [oilChange, setOilChange] = useState(false);
  const [tirePass, setTirePass] = useState(false);
  const [lightMechanical, setLightMechanical] = useState(false);
  const [truckTireCare, setTruckTireCare] = useState(false);

  //hooks

  //handlers
  const handleOilChange = () => {
    setOilChange(!oilChange);
  };
  const handleTirePass = () => {
    setTirePass(!tirePass);
  };
  const handleLightMechanical = () => {
    setLightMechanical(!lightMechanical);
  };
  const handleTruckTireCare = () => {
    setTruckTireCare(!truckTireCare);
  };

  const options = [
    {
      key: 1,
      label: "Oil Change",
      value: oilChange,
      onChange: handleOilChange,
    },
    {
      key: 2,
      label: "TirePass",
      value: tirePass,
      onChange: handleTirePass,
    },
    {
      key: 3,
      label: "Light Mechanical",
      value: lightMechanical,
      onChange: handleLightMechanical,
    },
    {
      key: 4,
      label: "Truck Tire Care",
      value: truckTireCare,
      onChange: handleTruckTireCare,
    },
  ];

  return (
    <div>
      <Search options={options}></Search>
    </div>
  );
}
