import React, { useEffect, useState } from "react";
import { ResultsWrapper } from "../elements/ResultsWrapper";
import Result from "./results/Result";
import { query } from "./network";

export default function Results(props) {
  //state
  const [results, setResults] = useState([]);

  //hooks
  useEffect(() => {
    setResults(props.locations);
  }, [props]);

  //handlers

  return (
    <ResultsWrapper>
      <p>Results which are wrapped</p>
      {results.map((val) => {
        return <Result key={val.id} result={val} />;
      })}
    </ResultsWrapper>
  );
}
