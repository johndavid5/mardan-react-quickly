const webpack = require('webpack'); // Import the webpack module...

module.exports = {
	// File to start bundling...typically the main file that loads other files...'
	entry: [
		// Include Webpack Dev Server (WDS)...
		'webpack-dev-server/client/?http://localhost:8080', 
		'./jsx/app.jsx'
	],
	output: {
		// Sets the "ghost" path for WDS to make bundle.js available
		// (it won't write to disk)
		publicPath: 'js/',	
		// Defines path for the bundled files
		path: __dirname + '/js/',
		// Defines a filename for the bundled file you\'ll be using in index.html',
		filename: 'bundle.js'	
	},
	// Specifies that you need proper mapping of compiled
	// source code lines to the JSX source code lines.
	// This is useful for debugging and appears in 
	// DevTools...too bad it's not really yielding
	// an accurate map right now...and causing
	// a crash when using webpack dev server...
	//devtool: '#sourcemap',
	module: {
		loaders: [
			// Specifies the loader to import, then injects CSS
			// into the web page from JavaScript
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			// Specifies the loader that will perform the
			// JSX transformation (and ES6+ if needed)
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loaders: [
					'babel-loader',
					// Include react-hot-loader to automatically
					// enable hot module replacement (HMR) on all
					// JSX files...
					'react-hot-loader'
				]
			}
			
		]
	},
	devServer: {
		// Sets WDS to HMR mode...
		hot: true
	},
	plugins: [
		// Include the HMR plug-in
		new webpack.HotModuleReplacementPlugin()
	]
}
