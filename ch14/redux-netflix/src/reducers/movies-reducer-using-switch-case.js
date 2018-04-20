const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const FETCH_MOVIE = 'movies/FETCH_MOVIE';

const initialState = {
	movies: [],
	movie: {}
}

function reducer(state = initialState, action ){
	switch(action.type){
		case FETCH_MOVIES:
			return { 
				// ES6 spread operator that passes 
				// the state object key by key...
				...state, 
			
				// Saves or changes the list of all
				// movies in the store...
				all: action.movies
			}

		case FETCH_MOVIE:
			return {
				...state,				
				// Saves or changes a certain
				// movie in the store...
				//current: action.movie
				current: state.all[action.index - 1]
			}
		
	}
}

module.exports = {
	// Exports an object with the reducer
	// method using ES6 syntax...
	reducer
}
