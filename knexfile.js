// Update with your config settings.
const path = require("path");

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,

    searchPath: "public",

    migrations: {
      directory: path.resolve(__dirname, "./migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "./data"),
    },
  },

  staging: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    searchPath: "public",
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./data/",
    },
  },
};
