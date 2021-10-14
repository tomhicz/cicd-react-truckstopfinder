import React, { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";
import { SearchWrapper } from "../elements";

<Options>
  {props.options.map((option) => (
    <Checkbox label={option} {...option} onRightClick={() => props.onMarkerRightClick(marker)} />
  ))}
</Options>;

export default function Search() {
  //state
  const [travelStop, setTravelStop] = useState(false);
  const [countryStore, setCountryStore] = useState(false);
  const [oilChange, setOilChange] = useState(false);
  const [tirePass, setTirePass] = useState(false);
  const [lightMechanical, setLightMechanical] = useState(false);
  const [truckTireCare, setTruckTireCare] = useState(false);

  //hooks

  //handlers
  const handleTravelStop = () => {
    setTravelStop(!travelStop);
  };
  const handleCountryStore = () => {
    setCountryStore(!countryStore);
  };
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
      label: "Oil Change",
      value: oilChange,
      onChange: handleOilChange,
    },
    {
      label: "TirePass",
      value: tirePass,
      onChange: handleTirePass,
    },
    {
      label: "Light Mechanical",
      value: lightMechanical,
      onChange: handleLightMechanical,
    },
    {
      label: "Truck Tire Care",
      value: truckTireCare,
      onChange: handleTruckTireCare,
    },
  ];

  return (
    <SearchWrapper>
      <Options options={options}></Options>
      <Checkbox label="Travel Stop" value={travelStop} onChange={handleTravelStop} />
      <Checkbox label="Country Store" value={countryStore} onChange={handleCountryStore} />
      <p>Is &quot;My Value&quot; checked? {checkedOne.toString()}</p>
    </SearchWrapper>
  );
}
