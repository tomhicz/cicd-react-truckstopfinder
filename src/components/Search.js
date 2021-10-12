import React from "react";
import { Checkbox } from "../components/Checkbox";
import { SearchWrapper } from "../elements";

export default function Search() {
  //state
  const [checkedOne, setCheckedOne] = React.useState(false);

  //hooks

  //handlers
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  return (
    <SearchWrapper>
      <Checkbox label="Value 1" value={checkedOne} onChange={handleChangeOne} />
      <p>Is &quot;My Value&quot; checked? {checkedOne.toString()}</p>
    </SearchWrapper>
  );
}
