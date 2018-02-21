// Main app entry point...
const React = require('react'); 
const { render } = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('react-redux');
// Imports (combined) reducers from ./modules
// (./modules/index.js)...
const reducers = require('./modules');
const routes = require('./routes');

// Use react-dom's render() to render
// Provider component
// and its entire subtree of components...
// It takes the first argument and mounts
// it into the second argument... 
//
// Hierarchy of components needs the
// `Provider` component at the top
// level...it injects data from the
// store into all child components...
//
// Define Provider by passing a Store
// instance (with reducers)...
//
// The Provider component takes care of
// delivering data from the store to all
// the connected components, so there's no
// need to pass properties directly.  But
// a few parts are missing, such as routes,
// reducers, and actions...
module.exports = render((
	<Provider store={createStore(reducers)}>
		{routes}
	</Provider>
), document.getElementById('app'))
