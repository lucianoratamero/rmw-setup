/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const DotenvPlugin = require('webpack-dotenv-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: { sourceMap: true }
          },
          {
            loader: "sass-loader",
            options: {
                sourceMap: true,
                includePaths: [path.join(__dirname, '../node_modules/foundation-sites/scss/')]
            }
          },
        ],
      },
    ]
  },

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
