import React, { useEffect } from "react";

const Search = (props) => (
  <div>
    <button key={1} onClick={(e) => props.handleClick(e, "view")}>
      Search
    </button>
  </div>
);

export function Button({ locationState, setLocationState, handleClick, currentView }) {
  //console.log("curView from Button", currentView);

  return (
    <div>
      <Search handleClick={handleClick}></Search>
    </div>
  );
}
