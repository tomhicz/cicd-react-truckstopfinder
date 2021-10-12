exports.up = function (knex) {
  return knex.schema.table("locations", (table) => {
    table.text("state");

    table.text("city");

    table.text("highway");
  });
};

exports.down = function (knex) {
  return knex.schema.table("locations", (table) => {
    table.dropColumn("state");

    table.dropColumn("city");

    table.dropColumn("highway");
  });
};
