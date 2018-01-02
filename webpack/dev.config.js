/* eslint-disable */
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const DotenvPlugin = require('webpack-dotenv-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',

  plugins: [
    new UglifyJSPlugin({
      test: /\.js($|\?)/i,
      exclude: /\/node_modules/,
      parallel: true,
      sourceMap: true,
    }),
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env',
    }),
  ],
});
