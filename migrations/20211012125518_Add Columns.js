exports.up = function (knex) {
  return knex.schema.table("locations", (table) => {
    table.jsonb("addresses");

    table.jsonb("highwayAndExit");
  });
};

exports.down = function (knex) {
  return knex.schema.table("locations", (table) => {
    table.dropColumn("addresses");

    table.dropColumn("highwayAndExit");
  });
};
