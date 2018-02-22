const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCH_MOVIE';

const initialState = {
	movies: [],
	movie: {}
};

function reducer(state = initialState, action ){
	switch(action.type){	
		case FETCH_MOVIES:
			return {	
				...state,  // ES6 spread operator that passes
						   // the state object key by key...
				all: action.movies // Saves or changes the list
								   // of all movies in the store
			}
		case FETCH_MOVIE:
			return {	
				...state,  
				current: action.movie // Saves or changes a certain
									  // movie in the store
			}
	}/* switch */
}

module.exports = {
	reducer
}
