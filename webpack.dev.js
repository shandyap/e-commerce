/* eslint-disable no-undef */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 5000, // Mengatur port ke 5000
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
    hot: true,
  },
});
