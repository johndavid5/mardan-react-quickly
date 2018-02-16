// Define your reducer function via switch/case statement,
// which is not recommended...
const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCH_MOVIE';

const initialState = {
	movies: [],
	movie: {}
};

/** the reducer function:
*   @input is initialState, action,
*   @output is the new state...
*/
function reducer(state = initialState, action){
	switch(action.type){
		case FETCH_MOVIES:
			return {
				// ES6 spread operator that passes state objects key by key...
				...state, 
				all: action.movies
			}
		case FETCH_MOVIE:
			return {
				...state,
				current: action.movie
			}
	}
}/* function reducer() */

module.exports = { 
	reducer
}
