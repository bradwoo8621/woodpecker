let path = require('path');
let webpack = require('webpack');

let WebpackCleanupPlugin = require('webpack-cleanup-plugin');

var options = {
	entry: {
		// js
		'woodpecker.js': './src/woodpecker.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			include: [
				path.join(__dirname, 'src'),
			],
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins: [
		new WebpackCleanupPlugin()
	],
	externals: {
		// require('jquery') is external and available on the global var jQuery
		'jquery': {
			root: 'jQuery',
			commonjs2: 'jquery',
			commonjs: 'jquery',
			amd: 'jquery'
		},

		'classnames': {
			root: 'classNames',
			commonjs2: 'classnames',
			commonjs: 'classnames',
			amd: 'classnames'
		}
	},
	// debug: true
};
module.exports = options;