const React = require('react')

const { connect } = require('react-redux')

const { Link } = require('react-router')

//const {
//  fetchMovieActionCreator
//} = require('modules/movies.js')
//

const {
  fetchMovieActionCreator
} = require('reducers/movies-reducer.js')

// Imports a CSS file...
const styles = require('./movie.css')

class Movie extends React.Component {

  componentWillMount() {
    this.props.leFetchMovieActionCreator(this.props.params.id)
  }

  // Dispatches only when the URL param changes...
  componentWillUpdate(next) {
    if (this.props.params.id !== next.params.id) {
      this.props.leFetchMovieActionCreator(next.params.id)
    }
  }

  render() {

    const sWho = "Movie::render";
    console.log(`${sWho}(): this.props = `, this.props );

    const {
      movie = {
        starring: []
      }
    } = this.props

	// Applies styles to elements inline...
    return (
      <div
        className={styles.movie}
        style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>
        <div
          className={styles.cover}
          style={{backgroundImage: `url(${movie.cover})`}} />
        <div className={styles.description}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.year}>{movie.year}</div>
          <div className={styles.starring}>
            {movie.starring.map((actor = {}, index) => (
              <div
                key={index}
                className={styles.actor}>
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link
          className={styles.closeButton}
          to="/movies">
          ←
        </Link>
      </div>
    )
  }
}

// In case we want it in English...
// See https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
const mapStateToProps = state => {

  const sWho = "mapStateToProps";

  console.log(`${sWho}(): state=`, state);

  let map_out = {
    movie: state.movies.current
  }

  console.log(`${sWho}(): Moe, retoynin' map_out=`, map_out );

  return map_out;
}

// Maps the data from the reducer to
// the property...
//module.exports = connect(({movies}) => ({
//  movie: movies.current
//}), {
//  leFetchMovieActionCreator: fetchMovieActionCreator
//})(Movie)

// Or, in English...
module.exports = connect(
    mapStateToProps,
    {
    leFetchMovieActionCreator: fetchMovieActionCreator
})(Movie)
