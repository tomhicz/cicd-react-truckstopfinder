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

      const concepts = JSON.stringify(location.Site.Concepts);

      let type;

      if (location.FacilitySubTypeId === 3) {
        type = "Travel Stop";
      } else if (location.FacilitySubTypeId === 4) {
        type = "Country Store";
      }

      const result = await db("locations").insert({
        id,
        latitude,
        longitude,
        name,
        addresses,
        highwayAndExit,
        concepts,
        type,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
