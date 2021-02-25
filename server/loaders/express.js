const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../api');
const config = require('../config');

module.exports = ({ app }) => {
  // for reverse proxy, shows real origin IP in logs
  app.enable('trust proxy');

  // enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // middleware to transform raw string of req.body into json
  app.use(bodyParser.json());

  // load API routes
  app.use(config.api.prefix, routes());
};
