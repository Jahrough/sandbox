const path = require('path');
const webpack = require('webpack');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Settings
const baseConfig = require('./base.config.js');
const dist = path.resolve(__dirname, 'build');

module.exports = {
  entry: ['./src/components/app/app.js'],
  mode: 'production',
  context: __dirname,
  output: {
    path: dist,
    publicPath: '/',
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      include: /\/src/,
      exclude: /\/node_modules/
    })
  ],
  stats: {
    colors: true
  }
};
