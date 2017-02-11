const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',  

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
  	'webpack-dev-server/client?http://localhost:8080',
    
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
  	'webpack/hot/only-dev-server',
    
  	'./index.js'
  ],
  output: {
    filename: 'bundle.js',

    path: resolve(__dirname, 'dist'),

    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/'
    
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,

    contentBase: resolve(__dirname, 'dist'),

    publicPath: '/'
  },

  module: {
    rules: [
      { 
      	test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ]
};
