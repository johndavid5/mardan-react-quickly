/* With react-router, you can declare
* a hierarchy of components per browser
* location.
*/
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

/* Every route can be declared by a couple
 * of nested `Route` components, each of which
 * takes two properties:
 *
 * 1. path -- URL path or location that can contain URL parameters:
 *    for example /movies:/id for 
 *    http://localhost:8080/movies/1021.
 *    Using / can define a path regardless
 *    of the parent route path: for example,
 *    /:id for localhost:8080/1012.
 * 2. component - Reference to the component
 *    that will be rendered when a user goes to
 *    a path/location.  All the parent components
 *    up to `Provider` will be rendered as well.
 *    For example, going to localhost:8080/movies/1021
 *    in this file will render Movie, Movies, and App.
 *    EGON: In that order?
*/
// You need to show a collection of movie covers
// at both the root and /movies locations.
//
// In addition, you need to show the details of a
// given movie at the /movies/:id location.
//
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
