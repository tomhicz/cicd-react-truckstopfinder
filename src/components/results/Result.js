import React from "react";
//import { ResultWrapper } from "../../elements/ResultWrapper";
import { Box, Card, CardHeader, CardBody, Grid } from "grommet";

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
    <Card elevation="small" background="light-1" margin="small">
      <CardHeader pad="medium">
        <h3>{i.addresses.Name}</h3>
      </CardHeader>
      <CardBody pad={{ horizontal: "medium", bottom: "medium" }}>
        <Grid
          fill="horizontal"
          rows={["xxsmall", "flex", "flex"]}
          columns={["flex", "flex"]}
          gap="small"
          areas={[
            { name: "address", start: [0, 0], end: [1, 0] },
            { name: "truck", start: [0, 1], end: [0, 1] },
            { name: "gas", start: [1, 1], end: [1, 1] },
            { name: "amenities", start: [0, 2], end: [0, 2] },
            { name: "restaurants", start: [1, 2], end: [1, 2] },
          ]}
        >
          <Box gridArea="address">
            <Box direction="row" justify="between">
              <span>Exit {i.highwayAndExit.exit}</span>
              <span>{i.highwayAndExit.highway}</span>
              <span>Store #{i.id}</span>
            </Box>
            <Box>
              {i.addresses.Address1} {i.addresses.Address2} {i.addresses.City} {i.addresses.County}{" "}
              {i.addresses.State} {i.addresses.Zip}
            </Box>
          </Box>
          <Box gridArea="truck">
            <h3>Contact:</h3>
            Main Phone: {i.contact["Main Phone"]}
            <br />
            Fax: {i.contact.Fax}
            <br />
            <TruckServicesInfo truckServices={i.truck_services} />
          </Box>
          <Box gridArea="gas">
            <FuelPricesInfo fuel={i.fuel_prices} />
          </Box>
          <Box gridArea="amenities">
            <AmenitiesInfo amenities={i.amenities} />
          </Box>
          <Box gridArea="restaurants">
            <RestaurantsInfo restaurants={i.restaurants} />
          </Box>
        </Grid>
      </CardBody>
    </Card>
  );
}
