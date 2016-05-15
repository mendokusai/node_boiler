var path = require('path');

const webpack = require ('webpack');

module.exports = {
  entry: {
    path: './src/js/entry.js'
  },
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}
