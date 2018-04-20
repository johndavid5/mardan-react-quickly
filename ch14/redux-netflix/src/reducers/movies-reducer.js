// movies reducer -- use redux-actions to
// avoid the use of switch/case...
const { handleActions } = require('redux-actions')

const FETCH_MOVIES = 'movies/FETCH_MOVIES'
const FETCH_MOVIE = 'movies/FETCH_MOVIE'

module.exports = {
  fetchMoviesActionCreator: (movies) => ({
    type: FETCH_MOVIES,
    movies
  }),
  fetchMovieActionCreator: (index) => ({
    type: FETCH_MOVIE,
    index
  }),
  reducer: handleActions({
    [FETCH_MOVIES]: (state, action) => {
        let sWho ="FETCH_MOVIES reducer";
        console.log(`${sWho}(): state = `, state, `, action=`, action, `...`);
        let new_state = {
            ...state,
            all: action.movies
        }
        console.log(`${sWho}(): returning new_state = `, new_state, `...`);
        return new_state;
    },
    [FETCH_MOVIE]: (state, action) => {
        let sWho ="FETCH_MOVIE reducer";
        console.log(`${sWho}(): state = `, state, `, action=`, action, `...`);

        let new_state = {
            ...state,
            current: state.all[action.index - 1]
        }

        console.log(`${sWho}(): returning new_state = `, new_state, `...`);
        return new_state;
    }
    //[FETCH_MOVIES]: (state, action) => ({
    //  ...state,
    //  all: action.movies
    //}),
    //[FETCH_MOVIE]: (state, action) => ({
    //  ...state,
    //  current: state.all[action.index - 1]
    //})
  }, {
    movies: [],
    movie: {}
  })
}
