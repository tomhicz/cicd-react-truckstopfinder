import React, { useState } from "react";
import { ResultWrapper } from "../elements/ResultWrapper";

export default function Result(props) {
  //state

  //hooks

  //handlers

  return (
    <ResultWrapper>
      {props.result.name} | {props.result.address} | {props.result.tel}
    </ResultWrapper>
  );
}
