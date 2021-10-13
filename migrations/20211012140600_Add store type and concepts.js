exports.up = function (knex) {
  return knex.schema.table("locations", (table) => {
    table.jsonb("restaurants");

    table.text("type");
  });
};

exports.down = function (knex) {
  return knex.schema.table("locations", (table) => {
    table.dropColumn("restaurants");

    table.dropColumn("type");
  });
};
