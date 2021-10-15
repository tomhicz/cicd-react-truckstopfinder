import React from "react";

export default function FuelPricesInfo({ fuel }) {
  //state

  //hooks

  //handlers

  const fuelArr = [];

  for (const [key, value] of Object.entries(fuel)) {
    fuelArr.push(`${key}: ${value}`);
  }

  return (
    <div>
      <div>Fuel Prices:</div>
      {fuelArr.map((val, id) => {
        return <div key={id}>{val}</div>;
      })}
    </div>
  );
}
