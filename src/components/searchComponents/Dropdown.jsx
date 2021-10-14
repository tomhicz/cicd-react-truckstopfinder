import React, { useEffect } from "react";

export function Dropdown({ locationState, setLocationState, handleChange }) {
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
