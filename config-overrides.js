const path = require('path');

module.exports = {
  webpack: function (config, env) {
    config.resolve.extensions = [...config.resolve.extensions, '.js', '.jsx'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };

    return config;
  },
};
