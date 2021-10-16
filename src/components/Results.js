import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import _ from "lodash";

import Result from "./results/Result";
//import { query } from "./network";

export default function Results({ locations, currentView, setCurrentView }) {
  //state
  const [results, setResults] = useState([]);

  //hooks
  useEffect(() => {

    // for (const key in props.filters) {
    //   console.log("TEST", key);
    //   console.log(Object.keys(_.pickBy(props.filters[key], (value) => value === true)));
    // }
    const res = Object.keys(_.pickBy(props.filters.restaurants, (value) => value === true));
    const ame = Object.keys(_.pickBy(props.filters.amenities, (value) => value === true));
    const type = Object.keys(_.pickBy(props.filters.type, (value) => value === true));
    const truck = Object.keys(_.pickBy(props.filters.truck_services, (value) => value === true));

    const checker = (arr, target) => target.some((val) => arr.includes(val));
    const results = [];
    console.log("REST", type, props.locations[0]);

    props.locations.forEach((location) => {
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
  }, [props]);


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
