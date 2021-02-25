const expressLoader = require('./express');

module.exports = async function({ expressApp }) {
  await expressLoader({ app: expressApp });
  console.log('Express Initialized');
};
