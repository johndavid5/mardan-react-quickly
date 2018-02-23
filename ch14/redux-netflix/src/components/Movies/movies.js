const React = require('react');

const { connect } = require('react-redux');

const { Link } = require('react-router');

// Loads a mock database from a JSON file (thanks to
// json-loader) into movies...
// ... or be real man and use the fetch API to get
// it asynchronously...
const movies = require('../../movies.json');

// Use fetchMoviesActionCreator from our "reducer"...
const {
	fetchMoviesActionCreator
} = require('modules/moviesReducerWithReduxActions.js');

const styles = require('./movies.css');

class Movies extends React.Component {

	//componentWillMount(){
		// Dispatches an action using
		// fetchMoviesActionCreator()(FETCH_MOVIES)
		// with the data from the JSON object movies,
		// which could be substituted for an AJAX/XHR
		// call to an API server...
	//	this.props.fetchMovies(movies);
	//}

	// ComponentDidMount() is recommended by the React team
	// for asynchronous AJAX/XHR calls...after fetching
	// movies asynchronously, dispatch an action using
	// fetchMoviesActionCreator()(FETCH_MOVIES)
	componentDidMount(){

		let sWho = "Movies::componentDidMount";

		fetch('/src/movies.json', {method: 'GET'})
		.then((response)=>{return response.json()})
		.then((movies)=>{
			this.props.fetchMovies(movies);
		});

		console.log(`${sWho}(): styles=`, styles );
	}

	render(){
		const {
			children,	
			movies = [],
			params = {}
		} = this.props;

		/* Passes children as defined in the ReactRouter hierarchy... */
		return (
			<div className={styles.movies}>
				<div className={params.id ? styles.listHidden : styles.list }>
				{movies.map((movie, index) => (
					<Link
					key={index}
					to={`/movies/${index + 1}`}>
					<div 
						className={styles.movie}
						style={{backgroundImage: `url(${movie.cover})`}} />
					</Link>
					)
				)}
				</div>
			{children} 
			</div>
		);

	}/* render() */

}/* class Movies extends React.Component */

/** connect(): maps state to component properties,
* takes the entire state (state) as the only argument and returns
* a plain object with a single property: movies.
*
* connect() connects the components to a store that provides
* access to store data and the fetchMoviesActionCreator()
* action creator from properties...
*/
module.exports = connect(state => ({
	movies: state.movies.all
}), {
	fetchMovies: fetchMoviesActionCreator
})(Movies);

// Or, obfuscate it even more by destructuring
// state.movies...
// module.exports = connect(({movies}) => ({
//	movies: movies.all
// }), {
//	fetchMovies: fetchMoviesActionCreator
// })(Movies);

