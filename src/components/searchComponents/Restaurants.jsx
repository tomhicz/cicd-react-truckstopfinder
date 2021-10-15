import React, { useState, useEffect } from "react";
import { Checkbox } from "./Checkbox";
import axios from "axios";

const Search = (props) => (
  <div>
    {props.options.map((option) => (
      <Checkbox
        key={props.options.indexOf(option)}
        label={option}
        onChange={(e) => props.handleChange(e, option, "truck_services", props.isLoading)}
        {...option}
      />
    ))}
  </div>
);

export function Restaurants({ searchState, setSearchState, handleChange }) {
  const [isLoading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState();

  //fetch restaurants
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const { data: response } = await axios.get("/api/restaurants", {
          signal: controller.signal,
        });
        const responseValues = Object.values(response);
        setRestaurants(responseValues);
        setLoading(false);
      } catch (e) {
        // handle fetch error
      }
    })();
    return () => controller?.abort();
  }, []);

  //hooks;
  useEffect(() => {
    if (!isLoading) {
      const name = "restaurants";
      const stateCopy = { ...searchState };
      for (const option of restaurants) {
        stateCopy[name][option] = false;
      }
      setSearchState(stateCopy);
    }
  }, [isLoading]);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div>
      <Search options={restaurants} handleChange={handleChange} isLoading={isLoading}></Search>
    </div>
  );
}
