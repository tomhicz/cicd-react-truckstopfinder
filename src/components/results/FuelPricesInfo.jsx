import React from "react";
import styled from "styled-components";

const StyledFuel = styled.div``;

export default function FuelPricesInfo({ fuel }) {
  //state

  //hooks

  //handlers

  const fuelArr = [];

  for (const [key, value] of Object.entries(fuel)) {
    fuelArr.push({ gas: key, price: value });
  }

  return (
    <StyledFuel>
      <h3>Fuel Prices:</h3>
      {fuelArr.map((val, id) => {
        return (
          <div key={id}>
            <b>{val.gas}:</b> {val.price}
          </div>
        );
      })}
    </StyledFuel>
  );
}
