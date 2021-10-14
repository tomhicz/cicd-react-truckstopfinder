import React, { useState } from "react";
//import { ResultWrapper } from "../elements/ResultWrapper";

export default function Restaurants({ restaurants }) {
  //state

  //hooks

  //handlers
  const restArr = [];

  for (const [key, value] of Object.entries(restaurants)) {
    restArr.push(value);
  }

  return (
    <div>
      Restaurant Icons:
      {restArr.map((val, id) => {
        return <div key={id}>{val}</div>;
      })}
    </div>
  );
}
