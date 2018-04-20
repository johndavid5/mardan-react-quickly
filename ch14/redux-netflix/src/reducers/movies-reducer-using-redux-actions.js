// Define our movies reducer using
// the handy-dandy 'redux-actions' 
// library to avoid using
// a big-ass switch/case statement.
// Instead, you use a cleaner
// functional form...
//
// handleActions(): Takes a map-like plain
// object, where keys are action types
// and values are functions.  This way,
// only a single function is called per
// action type; in other words, this
// function is cherry-picked by action type.
const { handleActions } = require('redux-actions'}

// Action type naming convention:
// <module_name_lowercase_letters>/<ACTION_NAME_UPPERCASE_LETTERS>
const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCH_MOVIE';

const initialState = {
	movies: [],
	movie: {}
}

module.exports = {
	// Define the FETCH_MOVIES action creator that
	// returns an action object
	fetchMoviesActionCreator: (movies)=>({
		type: FETCH_MOVIES,
		movies
	}),
	fetchMovieActionCreator: (index)=>({
		type: FETCH_MOVIE,
		index
	}),
	// This code looks similar to switch/case,
	// but it's more about mapping functions to
	// actions than selecting them in a potentially
	// huge conditional statement...
	reducer: handleActions({
		[FETCH_MOVIES]: (state, action) => ({
			// Gets all movies in the Movies component...
			...state, // ES6 spread operator that passes
						// the state object key by key...
			all: action.movies
		}),
		[FETCH_MOVIE]: (state, action) => ({
			// Gets the current movie in the
			// Movie component by using index
			// (URL param for movie ID)
			...state,
			current: state.all[action.index - 1]
		}),
	},
 	initialState )
}
