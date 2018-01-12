/* eslint-disable */
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const baseConfig = require('./base.config.js');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = merge(baseConfig, {
  output: {
    path: path.join(__dirname, '../build/'),
    filename: '[name].bundle.[chunkhash].js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [
          { loader: "css-loader", options: { minimize: true } },
          {
            loader: "sass-loader",
            options: {
                includePaths: [path.join(__dirname, '../node_modules/foundation-sites/scss/')]
            }
          },
       ],
        // use style-loader in development
        fallback: "style-loader"
      })
    }]
  },

  plugins: [
    new UglifyJsPlugin({
      sourceMap: false,
    }),
    extractSass
  ],
});
