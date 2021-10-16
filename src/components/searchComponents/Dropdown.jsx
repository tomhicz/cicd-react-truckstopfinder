import React, { useState, useEffect } from "react";
import axios from "axios";

export function Dropdown({ locationState, setLocationState, handleDropdown }) {
  const [isLoading, setLoading] = useState(true);
  const [stateState, setStateState] = useState("-");
  const [cityState, setCityState] = useState("-");
  const [highwayState, setHighwayState] = useState("-");
  const [stateList, setStateList] = useState("");
  const [cityList, setCityList] = useState("");
  const [highwayList, setHighwayList] = useState("");

  //let locationData;
  console.log("locationState", locationState);
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
          setStateList(response);
          console.log("locationState", locationState);
          setLoading(false);
        } catch (e) {
          // handle fetch error
        }
      } else if (locationState.state !== "-" && locationState.city === "-") {
        try {
          const { data: response } = await axios.get(
            `/api/filter/${locationState.state}/${locationState.city}`,
            {
              signal: controller.signal,
            }
          );
          console.log("----------LOCATIONS CITY FETCH---------");
          console.log("RESPONSE", response);
          setCityList(response);
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
          setHighwayList(response);
          if (response.length === 1) {
            setHighwayState(response[0]);
          }
          console.log("locationState", locationState);
          setLoading(false);
        } catch (e) {
          // handle fetch error
        }
      }
    })();
    return () => controller?.abort();

  }, [locationState]);
staging

  useEffect(() => {
    handleDropdown("state", stateState);
  }, [stateState]);

  useEffect(() => {
    handleDropdown("city", cityState);
  }, [cityState]);

  useEffect(() => {
    handleDropdown("highway", highwayState);
  }, [highwayState]);

  function createStateDropdown() {
    const locationData1 = stateList;
    const items = [];
    let i = 0;
    for (const state of locationData1) {
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
    const locationData2 = cityList;
    const items = [];
    let i = 0;
    for (const city of locationData2) {
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
    const locationData3 = highwayList;
    const items = [];
    let i = 0;
    for (const hwy of locationData3) {
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
  const handleChange2 = (event) => {
    console.log("Genre Changed", event);
  };
  if (isLoading) {
    return <div></div>;
  }
  return (
    <div>

      <select label="State" onChange={(e) => setStateState(e.target.value)}>
        {createStateDropdown()}
      </select>
      <select label="City" onChange={(e) => setCityState(e.target.value)}>
        {createCityDropdown()}
      </select>
      <select label="Highway" onChange={(e) => setHighwayState(e.target.value)}>
        {createHighwayDropdown()}
      </select>

    </div>
  );
}
