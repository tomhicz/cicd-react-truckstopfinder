exports.up = function (knex) {
  return knex.schema.table("locations", (table) => {
    table.jsonb("concepts");

    table.text("type");
  });
};

exports.down = function (knex) {
  return knex.schema.table("locations", (table) => {
    table.dropColumn("concepts");

    table.dropColumn("type");
  });
};
