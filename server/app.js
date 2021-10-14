// server/app.js
const express = require("express");
const morgan = require("morgan");
const _ = require("lodash");
const path = require("path");
const db = require("./knex.js");
const { result } = require("lodash");
const app = express();

//const locationSeed = require("../data/import");

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/seed", async (req, res) => {
  try {
    await db("locations").del();
    const locations = await require("../data/import");
    res.status(200).send(locations);
  } catch (err) {
    console.error("Error seeding locations!", err);
    res.sendStatus(500);
  }
});

app.get("/api/delete", async (req, res) => {
  try {
    const locations = await db("locations").del();
    res.status(200).send(locations);
  } catch (err) {
    console.error("Error dropping locations!", err);
    res.sendStatus(500);
  }
});

app.get("/api/locations", async (req, res) => {
  try {
    const locations = await db.select().table("locations");
    res.json(locations);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.get("/api/filter/:state/:city", async (req, res) => {
  try {
    // const locations = await db
    //   .select(
    //     db.raw("addresses ->>'State' as state"),
    //     db.raw("addresses ->>'City' as city"),
    //     db.raw("highwayAndExit ->>'highway' as highway")
    //   )
    //   .table("locations");
    //const test = locations.map((t) => t.state);
    const locations = await db.select().table("locations");

    const stCtyHwy = locations.map((loc) => [
      loc.addresses.State,
      loc.addresses.City,
      loc.highwayAndExit.highway,
    ]);

    if (req.params.state === "null" && req.params.city === "null") {
      const resultState = _.uniq(stCtyHwy.map((st) => st[0]));
      res.json(resultState);
    } else if (req.params.state && req.params.city === "null") {
      const resultCity = [];
      stCtyHwy.forEach((element) => {
        if (element[0] === req.params.state && !resultCity.includes(element[1])) {
          resultCity.push(element[1]);
        }
      });
      res.json(resultCity);
    } else if (req.params.state && req.params.city) {
      const resultHighway = [];
      stCtyHwy.forEach((element) => {
        if (
          element[0] === req.params.state &&
          element[1] === req.params.city &&
          !resultHighway.includes(element[2])
        ) {
          resultHighway.push(element[2]);
        }
      });

      res.json(resultHighway);
    }
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.get("/api/amenities", async (req, res) => {
  try {
    const locations = await db.select().table("locations");
    const amenitiesArr = locations.map((loc) => loc.amenities);
    const result = {};
    amenitiesArr.forEach((el) => _.merge(result, el));
    res.json(result);
  } catch (err) {
    console.error("Error loading amenities!", err);
    res.sendStatus(500);
  }
});

app.get("/api/truck-services", async (req, res) => {
  try {
    const locations = await db.select().table("locations");
    const truckServicesArr = locations.map((loc) => loc.truck_services);
    const result = {};
    truckServicesArr.forEach((el) => _.merge(result, el));
    res.json(result);
  } catch (err) {
    console.error("Error loading truck services!", err);
    res.sendStatus(500);
  }
});

app.get("/api/restaurants", async (req, res) => {
  try {
    const locations = await db.select().table("locations");
    const restaurantsArr = locations.map((loc) => loc.restaurants);
    const result = {};
    restaurantsArr.forEach((el) => _.merge(result, el));
    res.json(result);
  } catch (err) {
    console.error("Error loading restaurants!", err);
    res.sendStatus(500);
  }
});

// app.get("/api/test", async (req, res) => {
//   try {
//     const locations = await db.select().table("locations");
//     res.json(locations);
//   } catch (err) {
//     console.error("Error loading locations!", err);
//     res.sendStatus(500);
//   }
//});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
