const connection = require('./config');
module.exports = require('knex')({
  client: 'pg',
  connection,
  pool: { min: 0, max: 7 },
});
