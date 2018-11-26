/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = (app, optionsConfig) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, optionsConfig);
  } else {
    const defaultConfig = require('../../internals/webpack/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, defaultConfig);
  }

  return app;
};
