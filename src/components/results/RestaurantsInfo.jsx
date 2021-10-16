import React from "react";
import styled from "styled-components";

export default function RestaurantsInfo({ restaurants }) {
  //Styles
  const StyledIcon = styled.div`
    display: inline-flex;
    justify-content: center;
    alignitems: center;
    height: 80px;
    width: 80px;
    background-color: #ffffff;
    margin: 4px;
    border-radius: 12px;
    overflow: hidden;
  `;

  //state

  //hooks

  //handlers
  const restArr = [];

  for (const [key, value] of Object.entries(restaurants)) {
    restArr.push({ id: key, name: value });
  }

  return (
    <div>
      <h3>Restaurants:</h3>
      {restArr.map((val, id) => {
        return (
          <StyledIcon key={val.id}>
            <img
              alt={val.name}
              title={val.name}
              src={`/media/restaurant-icons/${val.id}.png`}
              style={{ maxWidth: "80px", maxHeight: "80px", objectFit: "contain" }}
            />
          </StyledIcon>
        );
      })}
    </div>
  );
}
