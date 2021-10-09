import React, { useState } from "react";
import { ResultsWrapper } from "../elements/ResultsWrapper";
import Result from "./Result";

export default function Results() {
  //state
  const resArr = [
    { name: "stop 1", address: "2001 abc st", tel: "0805550001" },
    { name: "stop 2", address: "2002 abc st", tel: "0805550002" },
    { name: "stop 3", address: "2003 abc st", tel: "0805550003" },
  ];
  const [results, setResults] = useState(resArr);
  //hooks

  //handlers

  return (
    <ResultsWrapper>
      <p>Results which are wrapped</p>
      {results.map((val, index) => {
        console.log(val.name);
        return <Result key={index} result={val} />;
      })}
    </ResultsWrapper>
  );
}
