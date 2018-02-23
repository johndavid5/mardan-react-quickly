const React = require('react');
const {
	Router,
	Route,
	IndexRoute,
	browserHistory
} = require('react-router');

const App = require('components/app/app');
const Movies = require('components/movies/movies.js');
const Movie = require('components/movie/movie.js');

/**
* For Router: provide either browser or hash history to the router
* IndexRoute: the route for the empty URL 
* The individual Movie view needs a movie ID to fetch info about that
* particular movie from the Redux store...
*/
module.exports = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Movies} />
			<Route path="movies" component={Movies}>		
				<Route path=":id" component={Movie} />
			</Route>
		</Route>
	</Router>
);
