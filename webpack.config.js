'use strict';

var path = require('path');

module.exports = {
	entry: './js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			}
			// , {
			// 	test: /\.scss$/, 
			// 	loader: 'style!css!sass?outputStyle=expanded'
			// }
		]
	}
}