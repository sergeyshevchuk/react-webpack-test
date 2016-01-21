module.exports = {
  entry: ['./app/main.js'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
      	test: /\.js$/, 
      	exclude: /(node_modules|bower_components)/,
      	loader: 'babel',
      	query: {
        	presets: ['es2015', 'react']
      	} 
      }
    ]
  }
};