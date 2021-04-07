const dotenv = require('dotenv');

// set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // error could crash process
  throw new Error("Couldn't find .env file");
}

module.exports = {
  port: parseInt(process.env.PORT, 10),

  databaseURL: process.env.POSTGRESQL_URI,

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  api: {
    prefix: '/api',
  }
};
