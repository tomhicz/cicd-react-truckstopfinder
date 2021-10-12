// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
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

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
