const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./base.config.js');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Settings
const dist = path.resolve(__dirname, 'build');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/components/app/app.js'
  ],
  mode: 'development',
  context: __dirname,
  devtool: 'inline-source-map',
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
  plugins: [new webpack.HotModuleReplacementPlugin()],
  stats: {
    colors: true
  }
};
