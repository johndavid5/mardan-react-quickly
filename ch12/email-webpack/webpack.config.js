module.exports = {
	// File to start bundling...typically the main file that loads other files...'
	entry: './jsx/app.jsx',
	output: {
		// Defines path for the bundled files
		path: __dirname + '/js/',
		// Defines a filename for the bundled file you\'ll be using in index.html',
		filename: 'bundle.js'	
	},
	// Specifies that you need proper mapping of compiled
	// source code lines to the JSX source code lines.
	// This is useful for debugging and appears in 
	// DevTools.
	devtool: '#sourcemap',
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
				loaders: ['babel-loader']
			}
			
		]
	}
}
