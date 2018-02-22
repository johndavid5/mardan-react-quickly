const { combineReducers } = require('redux');
const {
	reducer: movies
} = require('./moviesReducerWithReduxActions.js');

module.exports = combineReducers({
	movies
	// you may combine other reducers here, Escamillo...
});
