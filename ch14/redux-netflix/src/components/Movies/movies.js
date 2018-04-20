const React = require('react')

// In ES6 via destructuring assignment...
//const { connect } = require('react-redux')
// In English:
const connect = require('react-redux').connect;

const { Link } = require('react-router')

// Loads mock database from a JSON file (thanks to json-loader)
// into movies...
const movies = require('../../movies.json')

const {
  fetchMoviesActionCreator
} = require('modules/movies.js')

const styles = require('./movies.css')

class Movies extends React.Component {
  
	// Dispatches an action using
	// fetchMoviesActionCreator()(FETCH_MOVIES)
	// with the data from the JSON object movies,
	// which could be substituted for an AJAX/XHR
	// call to an API server...
	//componentWillMount() {
	//  this.props.leFetchMoviesActionCreator(movies)
	//}

	// Comment componentWillMount() and uncomment
	// componentDidMount to use async fetch...which
	// is what you're _supposed_ to do, you silly...

	// componentDidMount() is recommended by the React
	// team for AJAX/XHR calls...
	componentDidMount() {
		const sWho = "Movies::componentDidMount";

		console.log(`${sWho}(): Calling fetch '/src/movies.json'...`);

		fetch('/src/movies.json', {method: 'GET'})
			.then((response)=>{
				console.log(`${sWho}(): then(response)...return response.json().....`);
				return response.json()}
		)
		.then((movies)=>{
			console.log(`${sWho}(): then(movies)...this.props.leFetchMoviesActionCreator(movies=`, movies );
			this.props.leFetchMoviesActionCreator(movies)
		})
	}

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
	    );
  }/* render() */
}/* class Movies */

// Connect the Movies component to the store...
// ...use react-redux.connect() function...
//
// As a result not of exporting Movies
// but of calling connect() with Movies
// and having Provider as a parent, the Movies
// component becomes connected to the store...
//
// Now the Movies component can receive any
// data from the store and dispatch actions.
// But to receive the data in the format you need,
// you must map the state to the component properties
// by creating a simple "mapper" function.  Some folks
// would use an explicitly declared function
// mapStateToProps(), but that would be too
// easy to understand...
//
// Supply an anonymous "mapper" arrow function to connect()...
//
// module.exports = connect( function mapStateToProps(state){
//   return state
// })(Movies)
//
// module.exports = connect( state => state )(Movies)
//
// With this setup, you take the _entire_ application
// state from the store and put it into the properties
// of the Movies component.
//
// But we only need movies.all, not the entire state...

// Using destructuring of state.movies to obfuscate
// as much as possible...
// module.exports = connect(({movies}) => ({
//  movies: movies.all
// }), {
	// To obfuscate further, rename the action method to fetchMovies...
//   fetchMovies: fetchMoviesActionCreator
// })(Movies)

// Or, in English...
module.exports = connect( state => ({
  movies: state.movies.all
}), {
  leFetchMoviesActionCreator: fetchMoviesActionCreator
})(Movies)
