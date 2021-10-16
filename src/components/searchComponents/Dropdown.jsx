import React, { useState, useEffect } from "react";
import axios from "axios";

export function Dropdown({ locationState, setLocationState, handleChange }) {
  const [isLoading, setLoading] = useState(true);
  const [stateState, setStateState] = useState("");
  const [cityState, setCityState] = useState("");
  const [highwayState, setHighwayState] = useState("");

  //let locationData;
  console.log("locationState.state", locationState.state);
  //fetch locations
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      if (locationState.state === "-" && locationState.city === "-") {
        try {
          const { data: response } = await axios.get(
            `/api/filter/${locationState.state}/${locationState.city}`,
            {
              signal: controller.signal,
            }
          );
          console.log("----------LOCATIONS STATE FETCH---------");
          console.log("RESPONSE", response);
          setStateState(response);
          console.log("TEMPLOCATIONS", cityState);
          console.log("locationState", locationState);
          setLoading(false);
        } catch (e) {
          // handle fetch error
        }
      } else if (locationState.state !== "-") {
        try {
          const { data: response } = await axios.get(
            `/api/filter/${locationState.state}/${locationState.city}`,
            {
              signal: controller.signal,
            }
          );
          console.log("----------LOCATIONS CITY FETCH---------");
          console.log("RESPONSE", response);
          setCityState(response);
          console.log("TEMPLOCATIONS", stateState);
          console.log("locationState", locationState);
          setLoading(false);
        } catch (e) {
          // handle fetch error
        }
      } else if (locationState.city !== "-") {
        try {
          const { data: response } = await axios.get(
            `/api/filter/${locationState.state}/${locationState.city}`,
            {
              signal: controller.signal,
            }
          );
          console.log("----------LOCATIONS HIGHWAY FETCH---------");
          console.log("RESPONSE", response);
          setHighwayState(response);
          console.log("TEMPLOCATIONS", stateState);
          console.log("locationState", locationState);
          setLoading(false);
        } catch (e) {
          // handle fetch error
        }
      }
    })();
    return () => controller?.abort();
  }, [setStateState]);

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
    const locationData1 = stateState;
    const items = [];
    for (const state of locationData1) {
      let i;
      items.push(
        <option key={i} value={state}>
          {state}
        </option>
      );
      i++;
    }
    return items;
  }
  function createCityDropdown() {
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
  function createHighwayDropdown() {
    const locationData3 = highwayState;
    const items = [];
    for (const hwy of locationData3) {
      let i;
      items.push(
        <option key={i} value={hwy}>
          {hwy}
        </option>
      );
      i++;
    }
    return items;
  }

  // function onStateDropdown(e) {
  //   console.log("THE VAL", e.target.value);
  //   //here you will see the current selected value of the select input
  // }

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div>
      <select label="State">{createStateDropdown()}</select>
      <select label="City">{createCityDropdown()}</select>
      <select label="Highway">{createHighwayDropdown()}</select>
    </div>
  );
}
