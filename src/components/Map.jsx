import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocations } from "../slices/locationsSlice";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import axios from "axios";

const countryStore = new window.google.maps.MarkerImage(
  "https://freesvg.org/img/Wagonwheel2.png",
  null /* size is determined at runtime */,
  null /* origin is 0,0 */,
  null /* anchor is bottom center of the scaled image */,
  new window.google.maps.Size(32, 32)
);

// const travelStop = new window.google.maps.MarkerImage(
//   "https://freesvg.org/img/Wagonwheel2.png",
//   null /* size is determined at runtime */,
//   null /* origin is 0,0 */,
//   null /* anchor is bottom center of the scaled image */,
//   new window.google.maps.Size(32, 32)
// );

// withGoogleMap takes a react component and returns one. We call these "Higher Order Components"
const MyMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: 25.7392, lng: -104.9903 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker) => (
      <Marker key={marker.key} {...marker} onRightClick={() => props.onMarkerRightClick(marker)} />
    ))}
    <Marker
      icon={countryStore}
      key="marker_1"
      position={{
        lat: 47.444,

        lng: -122.176,
      }}
    />

    {/* <Marker
      key="marker_1"
      icon={{
        url: "https://cdn.mindbowser.com/custom_marker_pin.svg",

        anchor: new google.maps.Point(17, 46),

        scaledSize: new google.maps.Size(37, 37),
      }}
      position={{
        lat: 47.444,

        lng: -122.176,
      }}
    /> */}
  </GoogleMap>
));

// We use object destructuring here to shorten our code
export default function Map() {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations);

  useEffect(async () => {
    if (locations.length === 0) {
      const { data: response } = await axios.get("/api/locations");
      console.log("locations", response);
    }
    console.log("Locations use effect");
  }, []);

  return (
    <MyMap
      className="test"
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      onMapLoad={() => {}}
      onMapClick={() => {}}
      markers={locations}
      onMarkerRightClick={() => {}}
    />
  );
}
