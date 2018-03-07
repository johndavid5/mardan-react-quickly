const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const axios = require('axios');
const clean = require('clean-tagged-string').default
//const movies = require('../../movies.json')

// Imports an action creator...
const {
  fetchMoviesActionCreator
} = require('modules/movies.js')

const styles = require('./movies.css')

class Movies extends React.Component {

  componentWillMount() {
	const query = clean`{
		movies {
			title,
			cover
		}
	}`

	// Dispatches an action to update the store
    // with the response from the server.
	axios.get(`/q?query=${query}`).then(response=>{
		this.props.fetchMovies(response)
	});
  }


  // Render the Movies component using data from
  // properties, which comes from the Redux store...
  render() {
    const {
      children,
      movies = [],
      params = {}
    } = this.props

    return (
      <div className={styles.movies}>
        <div className={params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link
              key={index}
              to={`/movies/${index + 1}`}>
              <div
                className={styles.movie}
                style={{backgroundImage: `url(${movie.cover})`}} />
            </Link>
          ))}
        </div>
        {children}
      </div>
    )
  }
}

// The connect() function takes 2 arguments:
// the first maps the store to component properties,
// and the second maps action creators to component
// properties.  After that, the component has two new
// properties: `this.props.movies` and `this.props.fetchMovies()`.
//
// Lets you dispatch an action provided by 
// the action creator...
module.exports = connect(({movies}) => ({
  movies: movies.all
}), {
  fetchMovies: fetchMoviesActionCreator
})(Movies)
