import React, { useState, useEffect } from "react";
import axios from "axios";

export function Dropdown({ locationState, setLocationState, handleChange }) {
  const [isLoading, setLoading] = useState(true);
  const [stateState, setStateState] = useState();
  const [cityState, setCityState] = useState();

  let locationData;
  console.log("locationState.state", locationState.state);
  //fetch locations
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      if (locationState.state !== "null") {
        try {
          const { data: response } = await axios.get(
            `/api/filter/${locationState.state}/${locationState.city}`,
            {
              signal: controller.signal,
            }
          );
          console.log("----------LOCATIONS FETCH---------");
          console.log("RESPONSE", response);
          setCityState(response);
          console.log("TEMPLOCATIONS", cityState);
          console.log("locationState", locationState);
          setLoading(false);
        } catch (e) {
          // handle fetch error
        }
      } else
        try {
          const { data: response } = await axios.get(
            `/api/filter/${locationState.state}/${locationState.city}`,
            {
              signal: controller.signal,
            }
          );
          console.log("----------LOCATIONS FETCH---------");
          console.log("RESPONSE", response);
          setStateState(response);
          console.log("TEMPLOCATIONS", stateState);
          console.log("locationState", locationState);
          setLoading(false);
        } catch (e) {
          // handle fetch error
        }
    })();
    return () => controller?.abort();
  }, []);

  //hooks;
  // useEffect(() => {
  //   if (!isLoading) {
  //     const name = "tempLocations";
  //     const stateCopy = { ...locationState };
  //     for (const option of tempLocations) {
  //       stateCopy[name][option] = false;
  //     }
  //     setSearchState(stateCopy);
  //   }
  // }, [isLoading]);

  function createStateDropdown() {
    const locationData2 = cityState;
    const items = [];
    for (const city of locationData2) {
      let i;
      items.push(
        <option key={i} value={city}>
          {city}
        </option>
      );
      i++;
    }
    return items;
  }

  function onStateDropdown(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
  }

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div>
      <select label="State">{createStateDropdown()}</select>
    </div>
  );
}
