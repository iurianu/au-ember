'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoprefixer: {
      cascade: false,
    },
    sassOptions: {
      sourceMap: false,
      extension: 'scss',
      includePaths: ['node_modules/@appuniversum/appuniversum'],
    },
  });

  return app.toTree();
};
