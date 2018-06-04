const path = require('path');
const webpack = require('webpack');

 module.exports = {
     entry: [
         'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
         './src/components/app/app.js'
    ],
     mode: 'development',
     context: __dirname,
     devtool: 'source-map',
     output: {
         path: path.resolve(__dirname, 'build'),
         publicPath: '/',
         filename: 'main.bundle.js'
     },
     module: {
        rules: [
          { 
              test: /\.(js|jsx)$/, 
              exclude: /node_modules/, 
              loader: "babel-loader" 
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
          },
          { 
            test: /\.scss$/, 
            exclude: /node_modules/, 
            use: [ 
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" }
            ] 
          }
        ]
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
      stats: {
        colors: true
      }
 };
