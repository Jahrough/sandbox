const path = require('path');
const webpack = require('webpack');

 module.exports = {
     entry: './src/components/app/app.js',
     mode: 'development',
     devtool: 'source-map',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
        rules: [
          { 
              test: /\.js$/, 
              exclude: /node_modules/, 
              loader: "babel-loader" 
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
     stats: {
         colors: true
     }
 };
