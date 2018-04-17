// Entry point of the application...
const React = require('react')
// To render the Provider component and its
// entire subtree of components, you use
// react-dom's `render()`.  It takes the first
// argument <Provider> and mounts it into
// the element you pass as the second argument
// document.getElementById('app')
const { render } = require('react-dom')
// To make redux work, the hierarchy of components
// needs the Provider component at the top level.
// This component comes from the `react-redux` package
// and injects data from the store into the components.
// Using Provider as the top-level component means
// all children will have the store.  (Neat.)
// => The Provider component takes care of delivering
// data from the store to all the connected
// components, so there's no need to pass
// properties directly. 
const { Provider } = require('react-redux')
// To make Provider work, you need to provide
// the store to its `store` property.  The
// Store is an object that represents the application
// state.  Redux (react-redux) comes with a
// `createStore()` function that takes 
// reducer(s) from ./ch14/redux-netflix/src/modules/index.js
// and returns the Store object.
const { createStore } = require('redux')

/* Imports (combined) reducers from ./modules (./modules/index.js) */
const reducers = require('./modules')
const routes = require('./routes.js')

// You define `Provider` by passing a `Store`
// instance (with reducers) in a JSX format.
module.exports = render((
  <Provider store={createStore(reducers)}>
    {routes}
  </Provider>
), document.getElementById('app'))
