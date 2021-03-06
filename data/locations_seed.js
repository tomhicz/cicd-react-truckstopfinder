const fs = require("fs");
const db = require("../server/knex.js");
const path = require("path");

exports.seed = function () {
  // Deletes ALL existing entries
  return db("locations")
    .del()
    .then(async () => {
      try {
        const locations = JSON.parse(
          fs.readFileSync(path.resolve(__dirname, "..", "data", "locations.json"))
        );
        for (const location of locations) {
          const id = location.Site.SiteId;
          const latitude = location.Site.Latitude;
          const longitude = location.Site.Longitude;
          const name = location.Site.SiteName;

          const result = await db("locations").insert({
            id,
            latitude,
            longitude,
            name,
          });
          console.log(result);
        }
      } catch (err) {
        console.error("Error inserting records", err);
      }
    });
};
