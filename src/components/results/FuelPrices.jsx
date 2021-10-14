import React, { useState } from "react";
//import { ResultWrapper } from "../elements/ResultWrapper";

export default function FuelPrices({ fuel }) {
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
