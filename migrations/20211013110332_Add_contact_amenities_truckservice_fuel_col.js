exports.up = function (knex) {
  return knex.schema.table("locations", (table) => {
    table.jsonb("fuel_prices");
    table.jsonb("contact");
    table.jsonb("amenities");
    table.jsonb("truck_services");
  });
};

exports.down = function (knex) {
  return knex.schema.table("locations", (table) => {
    table.dropColumn("fuel_prices");
    table.dropColumn("contact");
    table.dropColumn("amenities");
    table.dropColumn("truck_services");
  });
};
