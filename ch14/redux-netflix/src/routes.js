const React = require('react')
const {
  Router,
  Route,
  IndexRoute,
  browserHistory
} = require('react-router')
const App = require('components/app/app')
const Movies = require('components/movies/movies.js')
const Movie = require('components/movie/movie.js')

// IndexRoute: the route for the empty URL
//
// Provide either browser or hash history
// to the router:
//   history={browserHistory}
//
//  <Route path=":id"...> Define the movie ID
//  URL parameter with a colon -- :id 
module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Movies} />
      <Route path="movies" component={Movies}>
        <Route path=":id" component={Movie} />
      </Route>
    </Route>
  </Router>
)
