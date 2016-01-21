var path = require('path');

module.exports = {
  entry: [
  	'webpack-dev-server/client?http://localhost:8080',
  	'webpack/hot/only-dev-server',
  	'./src/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
      	test: /\.js$/, 
      	include: path.join(__dirname, 'src'),
      	exclude: /(node_modules|bower_components)/,
      	loaders: ['react-hot', 'babel'],
      }
    ]
  }
};