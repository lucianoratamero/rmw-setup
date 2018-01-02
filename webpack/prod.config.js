/* eslint-disable */
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  output: {
    path: path.join(__dirname, '../build/'),
    filename: '[name].bundle.[chunkhash].js',
  },

  plugins: [
    new UglifyJsPlugin({
      sourceMap: false,
    }),
  ],
});
