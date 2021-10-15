import React, { useEffect } from "react";

export function Dropdown({ locationState, setLocationState, handleChange }) {
  //hooks
  //   useEffect(() => {
  //     const stateCopy = { ...locationState };
  //     for (const option of options) {
  //       stateCopy.truck_services[option.label] = false;
  //     }
  //     setSearchState(stateCopy);
  //   }, []);

  function createSelectItems() {
    const items = [];
    for (let i = 0; i <= locationState; i++) {
      items.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
      //here I will be creating my options dynamically based on
      //what props are currently passed to the parent component
    }
  }

  function onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
  }
  return (
    <div>
      <select id="dropdown">
        <option value="N/A">N/A</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
}
