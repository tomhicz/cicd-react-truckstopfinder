import React from "react";

export default function TruckServicesInfo({ truckServices }) {
  //state

  //hooks

  //handlers

  const truckArr = [];

  for (const [key, value] of Object.entries(truckServices)) {
    truckArr.push(value);
  }

  return (
    <div>
      Truck Services:
      {truckArr.map((name, id) => {
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
}
