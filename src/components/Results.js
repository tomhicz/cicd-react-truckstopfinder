import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import _ from "lodash";

import Result from "./results/Result";
//import { query } from "./network";

export default function Results({
  locations,
  setCurrentView,
  filters,
  locationState,
  setLocationState,
  setLocations,
}) {
  //state
  const [results, setResults] = useState([]);

  //hooks
  useEffect(() => {
    const address = Object.values(locationState);
    const res = Object.keys(_.pickBy(filters.restaurants, (value) => value === true));
    const ame = Object.keys(_.pickBy(filters.amenities, (value) => value === true));
    const type = Object.keys(_.pickBy(filters.type, (value) => value === true));
    const truck = Object.keys(_.pickBy(filters.truck_services, (value) => value === true));

    const checker = (arr, target) => target.some((val) => arr.includes(val));
    const checker2 = (arr, target) => target.every((val) => arr.includes(val));
    const results = [];
    const filteredLocations = [];

    locations.forEach((location) => {
      if (address[1] === "-" && address[2] === "-" && location.addresses.State === address[0]) {
        filteredLocations.push(location);
      } else if (
        address[2] === "-" &&
        location.addresses.State === address[0] &&
        location.addresses.City === address[1]
      ) {
        filteredLocations.push(location);
      } else if (
        location.addresses.State === address[0] &&
        location.addresses.City === address[1] &&
        location.highwayAndExit.highway === address[2]
      ) {
        filteredLocations.push(location);
      } else if (address[0] === "-" && address[1] === "-" && address[2] === "-") {
        filteredLocations.push(location);
      }
    });

    console.log(filteredLocations);
    filteredLocations.forEach((location) => {
      if (
        (res[0] === undefined || checker(res, Object.values(location.restaurants))) &&
        (ame[0] === undefined || checker(ame, Object.values(location.amenities))) &&
        (type[0] === undefined || checker(type, [location.type])) &&
        (truck[0] === undefined || checker(truck, Object.values(location.truck_services)))
      ) {
        results.push(location);
      }
    });

    setResults(results);
    setLocations(results);
  }, []);

  //handlers

  return (
    <Box direction="column" background="light-4">
      {results.map((val) => {
        return <Result key={val.id} result={val} />;
      })}
      <Box alignContent="center" direction="row" justify="around" pad="small">
        <button
          key={1}
          onClick={(e) =>
            setCurrentView(
              { view: "Search" },
              setLocationState({
                state: "-",
                city: "-",
                highway: "-",
              })
            )
          }
        >
          Search Again
        </button>
      </Box>
    </Box>
  );
}
