import React, { useState } from "react";
//import { ResultWrapper } from "../elements/ResultWrapper";

export default function Restaurants({ restaurants }) {
  //state

  //hooks

  //handlers

  return (
    <div>
      Restaurant Icons:
      {restaurants.map((val, id) => {
        return <div key={id}>{val}</div>;
      })}
    </div>
  );
}
