// entry point
const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const sWho = "index.js";

console.log(`${sWho}: process.env = `, process.env );
// Use ES6 destructuring assignments...
const {
	PORT = 3000,
	PWD = __dirname
} = process.env;
// Can pass port like this (at least in *nix,
// in Windows probably hafta set the environment
// variable the old-fashioned way):
// PORT=3000 node ./build/server.js
// Of course, you can always pass PORT
// via command-line arguments, Escamillo...

console.log(`${sWho}: PORT = ${PORT}...`);
console.log(`${sWho}: PWD = ${PWD}...`);

const app = express();

// Define a single GraphQL route that
// will serve all kinds of data
app.use('/q', 
	graphqlHTTP( req => ({
		// schema, // point to ./server/schema.js
		schema: schema, // point to ./server/schema.js
		context: req.session }) )
);


// Define a route to serve the front-end app
// with its static assets from the /dist URL.
// app.use('/dist/:file', (req, res) => {
//	res.sendFile( req.params.file, {
//		root: path.resolve(PWD, 'build', 'public')
//	});
//});

// ...or serve up static files the easy
// way via express.static()...
app.use('/dist',
	express.static(path.resolve(PWD, 'build', 'public'))
);

// Anti-pattern: expose your entire directory
// tree -- including back-end code such as server.js
// because you used ./build rather than
// ./build/public as your base subfolder...
//
// app.use('/dist',
//	express.static(path.resolve(PWD, 'build'))
//);



// Serves the main HTML page for any
// requests that aren't for /dist/* URL's...
//
// It's important to serve up index.html
// for _every_ route -- hence we use the
// '*' wildcard -- except the API endpoint
// and bundle files because when you use the
// HTML5 History API and go to a location using
// a hash-less URL like /movies/8, refreshing
// the page will make the browser query that exact
// location...
app.use('*', (req, res)=>{
	res.sendFile('index.html', {
		root: PWD
	});
	
});

// Use PORT environmental variable,
// e.g.,
// $ PORT=3000 node ./build/server.js
app.listen(PORT, ()=>
	console.log(`Running server on port ${PORT}, Escamillo...`)
);
