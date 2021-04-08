const expressLoader = require('./express');
const postgresLoader = require('./postgres');
const Logger = require('./logger');

module.exports = async function({ expressApp }) {
  const postgresConnection = await postgresLoader();
  Logger.info('PostgreSQL loaded and connected');

  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');
};
