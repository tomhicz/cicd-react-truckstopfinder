import React, { useEffect } from "react";
import axios from "axios";

export function Dropdown({ locationState, setLocationState, handleChange }) {
  let locationData;
  console.log("locationState.state", locationState.state);
  //fetch locations
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const { data: response } = await axios.get(
          `/api/filter/${locationState.state}/${locationState.city}`,
          {
            signal: controller.signal,
          }
        );
        locationData = response;
        console.log("locationData", locationData);
      } catch (e) {
        // handle fetch error
      }
    })();
    return () => controller?.abort();
  }, []);

  function createStateDropdown() {
    const locationData2 = [
      "Dwight",
      "Greenup",
      "Greenville",
      "Hamel",
      "Ina",
      "Kankakee",
      "Knoxville",
      "Le Roy ",
      "New Baden",
      "Oglesby",
      "Roscoe",
      "South Holland",
      "South Jacksonville",
      "Utica ",
      "Williamsville",
    ];
    const items = [];
    for (const city of locationData2) {
      let i;
      items.push(
        <option key={i} value={city}>
          {city}
        </option>
      );
      i++;
      //here I will be creating my options dynamically based on
      //what props are currently passed to the parent component
    }
    return items;
  }

  const list = createStateDropdown();

  function onStateDropdown(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
  }
  return (
    <div>
      <select label="State">{list}</select>
    </div>
  );
}
