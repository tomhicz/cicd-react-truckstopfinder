import React from "react";
//import { ResultWrapper } from "../../elements/ResultWrapper";
import { Box } from "grommet";

import FuelPricesInfo from "./FuelPricesInfo";
import AmenitiesInfo from "./AmenitiesInfo";
import RestaurantsInfo from "./RestaurantsInfo";
import TruckServicesInfo from "./TruckServicesInfo";

export default function Result(props) {
  //state
  const i = props.result;

  //hooks

  //handlers

  return (
    <Box elevation="small">
      <Box>
        <h3>{i.addresses.Name}</h3>
        Exit {i.highwayAndExit.exit} | {i.highwayAndExit.highway} | Store #{i.id}
      </Box>
      <Box>
        {i.addresses.Address1} {i.addresses.Address2} {i.addresses.City} {i.addresses.County}{" "}
        {i.addresses.State}
        {i.addresses.Zip}
      </Box>
      <hr />
      <div>
        Main Phone: {i.contact["Main Phone"]}
        <br />
        Fax: {i.contact.Fax}
        <br />
        <TruckServicesInfo truckServices={i.truck_services} />
      </div>
      <FuelPricesInfo fuel={i.fuel_prices} />
      <AmenitiesInfo amenities={i.amenities} />
      <RestaurantsInfo restaurants={i.restaurants} />
    </Box>
  );
}
