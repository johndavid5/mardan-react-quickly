// Main app entry point...
const React = require('react');
const { render } = require('react-dom');

// Provider component--use at top level to inject
// data from the store into components...thus all
// children will have the store...
const { Provider } = require('react-redux');

// Use createStore() function that will take reducers
// and return the Store object...
const { createStore } = require('react-redux');

// Our reducers...enumerated in ./modules/index.js
// via the plug-in Node pattern...also known as
// splitting reducers...
const reducers = require('./modules');

// Our routes enumerated in ./routes.js...
const routes = require('./routes');

// Render Provider component and subtree via
// react-dom's render()...
module.exports = render((
	<Provider store={createStore(reducers)}>
		{routes}
	</Provider>
), document.getElementById('app')
);
