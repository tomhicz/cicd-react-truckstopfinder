// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,

    searchPath: "public",

    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./data/import.js",
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
