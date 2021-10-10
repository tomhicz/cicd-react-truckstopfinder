const knex = require("knex");
const path = require("path");
const db = knex({
  client: "pg",
  connection: process.env.DATABASE_URL || "postgresql://romaineallen@localhost:5432/truckstop",
  searchPath: "public",
});

module.exports = db;
