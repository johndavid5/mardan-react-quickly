// Define your reducer function via redux-actions 
// rather than switch statements...creating
// a reducer function with a cleaner, more
// functional form...
const { handleActions } = require('redux-actions');

const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCH_MOVIE';

const initialState = {
	movies: [],
	movie: {}
};

module.exports = {

	// Defines the FETCH_MOVIES action creator
	// that returns an action object...
	fetchMoviesActionCreator: (movies) => ({
		type: FETCH_MOVIES,
		movies
	}),

	fetchMovieActionCreator: (index) => ({
		type: FETCH_MOVIE,
		index
	}),

	// redux-actions::handleActions() function:
	// ---------------------------------------
	// Takes a map-like plain object, where keys
	// are action types and values are functions,
	// thus the function is cherry-picked by the
	// the action type...
	reducer: handleActions({
		[FETCH_MOVIES]: (state, action) => ({
			...state,
			all: action.movies
		}),
		[FETCH_MOVIE]: (state, action) => ({
			...state,
			current: state.all[action.index - 1]
		}),
	}, initialState );

};
