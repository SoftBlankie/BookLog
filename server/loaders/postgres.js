const { Pool } = require('pg');

class Database {
  constructor() {
    this._pool = new Pool({
      user: 'dbuser',
      host: 'booklog.server.com',
      database: 'booklog-db',
      password: 'secretpassword',
      port: 5432,
    });

    this._pool.on('error', (err, client) => {
      Logger.error(`Unexpected error on idle PostgreSQL client : ${err}`);
    });
  }

  query(query, ...args) {
    this._pool.connect((err, client, done) => {
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
  }

  end() {
    this._pool.end();
  }
}

module.exports = new Database();
