// Enumerate the reducers here...

const { combineReducers } = require('redux');

// Apply ES6/ES2015 destructuring assignment to create
// a reducer object called movies from the 
// reducer property of ./movies.js
const {
	reducer: movies
} = require('./movies');

// Each reducer can change data in the store...
// ...to make safe, divide the application state
// into separate parts, then combine them into
// a single store...use redux::combineReducers()
// to combine multiple reducers...
module.exports = combineReducers({
	// declare a separate part of the store
	// and call it "movies"  Every action that the
	// reducer from ./movies is responsible for
	// will touch only this part and nothing else.
	movies 
	// you may combine other reducers here
});
