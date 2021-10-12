const fs = require("fs");
const db = require("../server/knex.js");
const path = require("path");

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "..", "data", "locations.json"))
    );
    for (const location of locations) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;
      const addresses = JSON.stringify(location.Addresses);

      const highwayAndExit = JSON.stringify({
        highway: location.Site.highway,
        exit: location.Site.exitNumber,
      });

      const result = await db("locations").insert({
        id,
        latitude,
        longitude,
        name,
        addresses,
        highwayAndExit,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
