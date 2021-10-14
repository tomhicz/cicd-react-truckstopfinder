import React, { useState } from "react";
//import { ResultWrapper } from "../elements/ResultWrapper";

export default function Amenities({ amenities }) {
  //state

  //hooks

  //handlers

  return (
    <div>
      Amenities:
      {amenities.map((name, id) => {
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
}
