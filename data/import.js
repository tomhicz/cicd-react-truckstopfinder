const fs = require("fs");
const db = require("../server/knex.js");
const path = require("path");

(async () => {
  console.log("Running seeding...");
  try {
    const locations = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "..", "data", "locations.json"))
    );

    await db("locations").del();
    for (const location of locations) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;

      const addresses = JSON.stringify(location.Addresses);
      const highwayAndExit = JSON.stringify({
        highway: location.Site.Highway,
        exit: location.Site.ExitNumber,
      });

      //Filters out the name of the restaurants
      const conceptsMap = location.Site.Concepts.map((concept) => concept.Concept.Name);
      const restaurants = JSON.stringify(conceptsMap);

      //gets the location type
      let type;
      if (location.FacilitySubTypeId === 3) {
        type = "Travel Stop";
      } else if (location.FacilitySubTypeId === 4) {
        type = "Country Store";
      }

      //gets the location contact
      const contactMap = location.ContactMethods.map((contact) => [
        contact.Type.Name,
        contact.Data,
      ]);
      const contact = JSON.stringify(Object.fromEntries(contactMap));

      // gets the location fuel prices
      const fuelMap = location.Site.FuelPrices.map((fuel) => [fuel.DisplayName, fuel.CashPrice]);
      const fuel_prices = JSON.stringify(Object.fromEntries(fuelMap));

      // gets the location Truck Services
      const truckServiceMap = location.CustomFields.map((service) => {
        if (service.CustomField.Section === "Select Truck Services") {
          return service.CustomField.DisplayName;
        }
      });
      const truck_services = JSON.stringify(truckServiceMap.filter((entry) => entry !== undefined));

      // gets the location's Amenities
      const amenityMap = location.CustomFields.map((service) => {
        if (service.CustomField.Section === "Select Amenities") {
          return service.CustomField.DisplayName;
        }
      });
      const amenities = JSON.stringify(amenityMap.filter((entry) => entry !== undefined));

      //Performs insertions
      const result = await db("locations").insert({
        id,
        latitude,
        longitude,
        name,
        addresses,
        highwayAndExit,
        restaurants,
        type,
        contact,
        fuel_prices,
        truck_services,
        amenities,
      });

      console.log(result);
    }
    console.log("DATABASE INSERTIONS COMPLETE!");
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
