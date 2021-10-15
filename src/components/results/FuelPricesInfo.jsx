import React from "react";
import styled from "styled-components";

const StyledFuel = styled.div``;

export default function FuelPricesInfo({ fuel }) {
  //state

  //hooks

  //handlers

  const fuelArr = [];

  for (const [key, value] of Object.entries(fuel)) {
    fuelArr.push(`${key}: ${value}`);
  }

  return (
    <StyledFuel>
      <div>Fuel Prices:</div>
      {fuelArr.map((val, id) => {
        return <div key={id}>{val}</div>;
      })}
    </StyledFuel>
  );
}
