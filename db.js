const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123s123s',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
