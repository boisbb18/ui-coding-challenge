const path = require('path');
const webpack = require('webpack');
const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client');

module.exports = {
  entry: [
    APP_DIR + '/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR + '/dist/',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['env', 'react', 'stage-3'] },
        }],
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  }
};
