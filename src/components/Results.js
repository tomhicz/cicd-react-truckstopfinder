import React, { useEffect, useState } from "react";
import { Box } from "grommet";

import Result from "./results/Result";
//import { query } from "./network";

export default function Results({ locations, currentView, setCurrentView }) {
  //state
  const [results, setResults] = useState([]);

  //hooks
  useEffect(() => {
    setResults(locations);
  }, [locations]);

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
