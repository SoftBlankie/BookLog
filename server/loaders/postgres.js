const { Pool } = require('pg');
const Logger = require('./logger');

const pool = new Pool({
  user: 'dbuser',
  host: 'booklog.server.com',
  database: 'booklog_db',
  password: 'secretpassword',
  port: 5432,
});

pool.on('error', (err, client) => {
  Logger.error(`Unexpected error on idle PostgreSQL client : ${err}`);
});

const connection = pool.connect((err, client, done) => {
    if (err) throw err;
    const params = args.length === 2 ? args[0] : [];
    const callback = args.length === 1 ? args[0] : args[1];

    client.query(query, params, (err, res) => {
      done();
      if (err) {
        Logger.error(err.stack);
        return callback({ error: 'Database error.'}, null);
      }
      callback({}, res.rows);
    });
});

module.exports = () => {
  return connection;
}
