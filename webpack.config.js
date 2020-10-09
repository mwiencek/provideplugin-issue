const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index.js',
  plugins: [
    new webpack.ProvidePlugin({
      'l': ['./l', 'default'], // works
      'texp.l': ['./texp', 'l'], // broken
    }),
  ],
};
