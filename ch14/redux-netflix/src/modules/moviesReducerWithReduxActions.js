// In lieue of a switch/case in our reducer function,
// let's use `handleActions()` from `redux-actions`.
// It takes a map-like plain object, where keys are action types
// and values are functions.  This way, only a single function is
// called per action type; in other words, this function is
// cherry-picked by action type.
const { handleActions } = require('redux-actions');

// It's common to name actions using uppercase letters
// preceded by the module name in lowercase letters.
// You can omit the module name if you're sure duplicates
// will never occur.
const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCH_MOVIE';

const initialState = {
	movies: [],
	movie: {}
}

module.exports = {

	//
	// * To change data in the store, you use actions.
	//
	// * To clarify, an action can be anything, not just
	//   user input in a browser.
	//
	// * Actions are the only sources of information
	//   for the store; this data is sent from an app
	//   to the store.
	//
	// * Actions are executed via `store.dispatch()`
	//   or via a `connect()` helper.
	//
	// * Every action is represented by a plain old
	//   JavaScript object that has at least one property:
	//   type.  It can have as many other properties as you
	//   want, usually to pass data into the store.
	//	

	/** Defines the FETCH_MOVIES action creator
	*   that returns an action object...
	*/
	fetchMoviesActionCreator: (movies) => ({
		type: FETCH_MOVIES,
		movies
	}),

	/** Defines the FETCH_MOVIE action creator
	* that returns an action object...
	*/
	fetchMovieActionCreator: (index) => ({
		type: FETCH_MOVIE,
		index	
	}),

	// Map action types to functions that return the new state...
	reducer: handleActions({
		[FETCH_MOVIES]: (state, action) => ({
			...state, // Use ES6 spread operator that passes the 
						// state object key by key...
			all: action.movies // Gets all movies in the Movies component...
		}),
		[FETCH_MOVIE]: (state, action) => ({
			...state,
			// Gets the current movie in the Movie
			// component by using index (URL parameter
			// for movie ID)...
			current: state.all[action.index-1]
		})
	}, initialState ),
	
};
