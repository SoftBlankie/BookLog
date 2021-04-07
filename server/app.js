const config = require('./config');
const loaders = require('./loaders');
const express = require('express');
const Logger = require('./loaders/logger');

async function startServer() {
  const app = express();

  await loaders({ expressApp: app });

  app.listen(config.port, () => {
    Logger.info(`Server listening on port ${config.port}...`)
  });
}

startServer();
