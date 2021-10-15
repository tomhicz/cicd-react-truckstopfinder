import React, { useState } from "react";
import { ResultWrapper } from "../../elements/ResultWrapper";
import FuelPrices from "./FuelPrices";
import Amenities from "./Amenities";
import Restaurants from "./Restaurants";
import TruckServicesInfo from "./TruckServicesInfo";

export default function Result(props) {
  //state
  const i = props.result;

  //hooks

  //handlers

  return (
    <ResultWrapper>
      <div>
        <h3>{i.addresses.Name}</h3>
        Exit {i.highwayAndExit.exit} | {i.highwayAndExit.highway} | Store #{i.id}
      </div>
      <div>
        {i.addresses.Address1} {i.addresses.Address2} {i.addresses.City} {i.addresses.County}{" "}
        {i.addresses.State}
        {i.addresses.Zip}
      </div>
      <hr />
      <div>
        Main Phone: {i.contact["Main Phone"]}
        <br />
        Fax: {i.contact.Fax}
        <br />
        <TruckServicesInfo truckServices={i.truck_services} />
      </div>
      <FuelPrices fuel={i.fuel_prices} />
      <Amenities amenities={i.amenities} />
      <Restaurants restaurants={i.restaurants} />
    </ResultWrapper>
  );
}
