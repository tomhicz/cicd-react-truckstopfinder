import React, { useState } from "react";
import { ResultWrapper } from "../elements/ResultWrapper";
import FuelPrices from "./FuelPrices";
import Amenities from "./Amenities";
import Restaurants from "./Restaurants";

export default function Result(props) {
  //state
  const i = props.result;

  // function filterContacts(id, data) {
  //   return data.ContactMethods.filter((val) => {
  //     if (val.Type.Id === id && val.Type.IsActive === true) {
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  // const tel = i.ContactMethods.filter((val) => {
  //   if (val.Type.Id === 1 && val.Type.IsActive === true) {
  //     return true;
  //   }
  //   return false;
  // });

  // const tel = filterContacts(1, i);
  // const fax = filterContacts(5, i);

  // console.log("tel", tel);
  //hooks

  //handlers

  return (
    <ResultWrapper>
      <div>
        <h3>{i.addresses[0].Name}</h3>
        Exit {i.highwayAndExit.exit} | {i.highwayAndExit.highway} | Store #{i.id}
      </div>
      <div>
        {i.addresses[0].Address1} {i.addresses[0].Address2} {i.addresses[0].City}{" "}
        {i.addresses[0].County} {i.addresses[0].State}
        {i.addresses[0].Zip}
      </div>
      <hr />
      <div>
        Main Phone: {i.contact["Main Phone"]}
        <br />
        Fax: {i.contact.Fax}
        <br />
        Insert truck services here
      </div>
      <FuelPrices fuel={i.fuel_prices} />
      <Amenities amenities={i.amenities} />
      <Restaurants restaurants={i.restaurants} />
    </ResultWrapper>
  );
}
