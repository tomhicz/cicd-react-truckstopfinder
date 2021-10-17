import React, { useState, useEffect } from "react";
import axios from "axios";
import { DropdownWrapper } from "../../elements";

export function Dropdown({ locationState, setLocationState, handleDropdown }) {
  const [isLoading, setLoading] = useState(true);
  const [stateState, setStateState] = useState("-");
  const [cityState, setCityState] = useState("-");
  const [highwayState, setHighwayState] = useState("-");
  const [stateList, setStateList] = useState(["State"]);
  const [cityList, setCityList] = useState(["City"]);
  const [highwayList, setHighwayList] = useState(["Highway"]);

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
          setCityList(["City"]);
          setHighwayList(["Highway"]);
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
          console.log("locationState", locationState);
          setLoading(false);
        } catch (e) {
          // handle fetch error
        }
      }
    })();
    return () => controller?.abort();
  }, [locationState]);

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
    const items = [];
    let i = 1;
    for (const state of stateList) {
      items.unshift(
        <option selected="State" key={i} value={state}>
          {state}
        </option>
      );
      i++;
    }
    items.push(
      <option selected="State" key={0} value={"-"}>
        {"State"}
      </option>
    );
    return items.sort();
  }
  function createCityDropdown() {
    const items = [];
    let i = 1;
    for (const city of cityList) {
      items.unshift(
        <option key={i} value={city}>
          {city}
        </option>
      );
      i++;
    }
    items.push(
      <option selected="City" key={0} value={"-"}>
        {"City"}
      </option>
    );
    return items.sort();
  }
  function createHighwayDropdown() {
    const items = [];
    let i = 1;
    for (const hwy of highwayList) {
      items.push(
        <option key={i} value={hwy}>
          {hwy}
        </option>
      );
      i++;
    }
    items.push(
      <option selected="Highway" key={0} value={"-"}>
        {"Highway"}
      </option>
    );
    return items.sort();
  }

  if (isLoading) {
    return <div></div>;
  }
  return (
    <DropdownWrapper>
      <select onChange={(e) => setStateState(e.target.value)}>{createStateDropdown()}</select>
      <select onChange={(e) => setCityState(e.target.value)}>{createCityDropdown()}</select>
      <select onChange={(e) => setHighwayState(e.target.value)}>{createHighwayDropdown()}</select>
    </DropdownWrapper>
  );
}
