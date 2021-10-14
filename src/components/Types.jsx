import React, { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";
import { TruckServices } from "./TruckServices";
import { SearchWrapper } from "../elements";

export function Types() {
  //state
  const [travelStop, setTravelStop] = useState(false);
  const [countryStore, setCountryStore] = useState(false);

  //hooks

  //handlers
  const handleTravelStop = () => {
    setTravelStop(!travelStop);
  };
  const handleCountryStore = () => {
    setCountryStore(!countryStore);
  };

  return (
    <div>
      <Checkbox label="Travel Stop" value={travelStop} onChange={handleTravelStop} />
      <Checkbox label="Country Store" value={countryStore} onChange={handleCountryStore} />
      <p>Is &quot;Travel Stop&quot; checked? {travelStop.toString()}</p>
    </div>
  );
}
