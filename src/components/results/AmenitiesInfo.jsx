import React from "react";

export default function AmenitiesInfo({ amenities }) {
  //state

  //hooks

  //handlers

  const amenArr = [];

  for (const [key, value] of Object.entries(amenities)) {
    amenArr.push(value);
  }

  return (
    <div>
      Amenities:
      {amenArr.map((name, id) => {
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
}
