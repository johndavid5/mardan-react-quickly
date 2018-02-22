// In lieue of a switch/case in our reducer function,
// let's use `handleActions()` from `redux-actions`.
// It takes a map-like plain object, where keys are action types
// and values are functions.  This way, only a single function is
// called per action type; in other words, this function is
// cherry-picked by action type.
const { handleActions } = require('redux-actions');

const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCH_MOVIE';

const initialState = {
	movies: [],
	movie: {}
}

module.exports = {

	// Defines the FETCH_MOVIES action creator
	// that returns an action object...
	//
	// An action is a plain old JavaScript
	// object with a required `type` property
	// plus any other properties (e.g., data
	// fetched via the fetch API) that are needed...
	fetchMoviesActionCreator: (movies) => ({
		type: FETCH_MOVIES,
		movies
	}),
	// Defines the FETCH_MOVIE action creator
	// that returns an action object...
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
	}, intitialState );
	
};
