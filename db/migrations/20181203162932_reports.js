
exports.up = (knex, Promise) => knex.schema.createTable('reports', (table) => {
  table.increments('id').primary().notNullable();
  table.string('title').notNullable();
  table.string('firstname').notNullable();
  table.string('lastname').notNullable();
  table.string('email').notNullable();
  table.string('telephone').notNullable();
  table.string('lon').notNullable();
  table.string('lat').notNullable();
  table.string('address').notNullable();
  table.string('issue').notNullable();
  table.date('datePosted').notNullable();
});

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('reports');
