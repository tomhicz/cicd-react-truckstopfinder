import React, { useEffect, useState } from "react";
import { ResultsWrapper } from "../elements/ResultsWrapper";
import Result from "./Result";
import { query } from "./network";

export default function Results(props) {
  //state
  const [results, setResults] = useState([]);
  useEffect(() => {
    console.log("results", props.locations[0]);
    setResults(props.locations);
  }, [props]);
  //
  // const resArr = [
  //   { name: "stop 1", address: "2001 abc st", tel: "0805550001" },
  //   { name: "stop 2", address: "2002 abc st", tel: "0805550002" },
  //   { name: "stop 3", address: "2003 abc st", tel: "0805550003" },
  // ];
  //const [results, setResults] = useState([]);
  //hooks
  // useEffect(() => {
  //   async function fetchData() {
  //     const queryResults = await query();
  //     console.log(queryResults instanceof Array);
  //     console.log("query", queryResults);
  //     // You can await here
  //     setResults(queryResults);
  //   }
  //   fetchData();
  // }, []);

  //handlers
  // {results.map((val) => {
  //   return <Result key={val.SiteId} result={val} />;
  // })}

  return (
    <ResultsWrapper>
      <p>Results which are wrapped</p>
      {results.map((val) => {
        return <Result key={val.id} result={val} />;
      })}
    </ResultsWrapper>
  );
}
