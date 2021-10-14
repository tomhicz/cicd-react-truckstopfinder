import React, { useState } from "react";
//import { ResultWrapper } from "../elements/ResultWrapper";

export default function Amenities({ amenities }) {
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
