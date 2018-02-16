// Combining reducers...the preferred pattern...

// Import `combineReducers()` from the `combineReducers`
// property in redux.
const { combineReducers } = require('redux');

// Applies ES6/ES2015 destructuring assignment
// to create a reducer object called `movies` from
// the `reducer` property of ./movies.js
const {
	reducer: movies
} = require('./moviesReducerWithReduxActions');

// `movies` reducer is imported
//  and then passed into the combineReducers()
//  function as a property of a plain object with
//  the key "movies"...
//
// ...declare a separate part of the store
// and call it 'movies'...

// Export the combined reducer movies...
//module.exports = combineReducers({
//	movies
	// more reducers can go here...
//});

my combineReducersArg = {
	movies
	// more reducers can go here...
}

console.log("./src/modules/index.js: Returning combineReducers( ", combineReducersArg, " )..."); 

module.exports = combineReducers(
	combineReducersArg
);
