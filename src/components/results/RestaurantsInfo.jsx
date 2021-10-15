import React from "react";

export default function RestaurantsInfo({ restaurants }) {
  //state

  //hooks

  //handlers
  const restArr = [];

  for (const [key, value] of Object.entries(restaurants)) {
    restArr.push({ id: key, name: value });
  }

  return (
    <div>
      Restaurant Icons:
      {restArr.map((val, id) => {
        return (
          <img
            key={val.id}
            alt={val.name}
            title={val.name}
            src={`/media/restaurant-icons/${val.id}.png`}
          />
        );
      })}
    </div>
  );
}
