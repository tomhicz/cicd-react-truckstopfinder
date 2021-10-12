import React, { useState } from "react";
import { ResultWrapper } from "../elements/ResultWrapper";

export default function Result(props) {
  //state
  const i = props.result;

  const tel = i.ContactMethods.filter((val) => {
    if (val.Type.Id === 1 && val.Type.IsActive === true) {
      return true;
    }
    return false;
  });
  console.log("tel", tel);
  //hooks

  //handlers

  return (
    <ResultWrapper>
      <div>
        <h3>{i.Name}</h3>
        Exit {i.Site.ExitNumber} {i.Site.DescriptiveAddress} Store #{i.Number}
      </div>
      <div>
        {i.Addresses[0].Address1} {i.Addresses[0].Address2} {i.Addresses[0].City}{" "}
        {i.Addresses[0].State}
        {i.Addresses[0].Zip}
      </div>
      <hr />
      <div>
        {tel[0].Type.Name}: {tel[0].Data}
      </div>
    </ResultWrapper>
  );
}
