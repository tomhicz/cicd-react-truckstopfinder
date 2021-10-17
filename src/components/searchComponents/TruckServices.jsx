import React, { useState, useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { CheckboxWrapper } from "../../elements";
import axios from "axios";

const Search = (props) => (
  <CheckboxWrapper>
    {props.options.map((option) => (
      <Checkbox
        key={props.options.indexOf(option)}
        label={option}
        onChange={(e) => props.handleChange(e, option, "truck_services", props.isLoading)}
        {...option}
      />
    ))}
  </CheckboxWrapper>
);

export function TruckServices({ searchState, setSearchState, handleChange }) {
  const [isLoading, setLoading] = useState(true);
  const [truckServices, setTruckServices] = useState();

  //fetch truck services
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const { data: response } = await axios.get("/api/truck-services", {
          signal: controller.signal,
        });
        const responseValues = Object.values(response);
        setTruckServices(responseValues);
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
      const name = "truck_services";
      const stateCopy = { ...searchState };
      for (const option of truckServices) {
        stateCopy[name][option] = false;
      }
      setSearchState(stateCopy);
    }
  }, [isLoading]);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <Search
      options={truckServices.sort()}
      handleChange={handleChange}
      isLoading={isLoading}
    ></Search>
  );
}
