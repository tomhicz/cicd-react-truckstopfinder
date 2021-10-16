import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import _ from "lodash";

import Result from "./results/Result";
//import { query } from "./network";

export default function Results({ locations, currentView, setCurrentView, filters }) {
  //state
  const [results, setResults] = useState([]);

  //hooks
  useEffect(() => {
    const res = Object.keys(_.pickBy(filters.restaurants, (value) => value === true));
    const ame = Object.keys(_.pickBy(filters.amenities, (value) => value === true));
    const type = Object.keys(_.pickBy(filters.type, (value) => value === true));
    const truck = Object.keys(_.pickBy(filters.truck_services, (value) => value === true));

    const checker = (arr, target) => target.some((val) => arr.includes(val));
    const results = [];
    console.log("REST", type, locations[0]);

    locations.forEach((location) => {
      if (
        (res[0] === undefined || checker(res, Object.values(location.restaurants))) &&
        (ame[0] === undefined || checker(ame, Object.values(location.amenities))) &&
        (type[0] === undefined || checker(type, [location.type])) &&
        (truck[0] === undefined || checker(truck, Object.values(location.truck_services)))
      ) {
        results.push(location);
      }
    });

    console.log("FILTER", results);
    setResults(results);
  }, []);

  //handlers

  return (
    <Box direction="column" background="light-4">
      {results.map((val) => {
        return <Result key={val.id} result={val} />;
      })}
      <Box alignContent="center" direction="row" justify="around" pad="small">
        <button key={1} onClick={(e) => setCurrentView({ view: "Search" })}>
          Search Again
        </button>
      </Box>
    </Box>
  );
}
