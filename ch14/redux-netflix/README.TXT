./build
  ./build/index.js
  ./build/styles.css
./images
   ...
./node_modules
   ...
./src
  ./src/components
    ./src/components/App /* For the layout component */
      ./src/components/App/app.css
      ./src/components/App/app.js
    ./src/components/Movie /* For individual movie view components. */
      ./src/components/Movie/movie.css
      ./src/components/Movie/movie.js
    ./src/components/Movies /* For the grid of movies. */
      ./src/components/Movies/movies.css
      ./src/components/Movies/movies.js
    ./src/modules
      ./src/modules/index.js /* will combine and expose reducers */
      ./src/modules/movies.js /* redux reducers to fetch movies
                              * and a single movie's data
							  */
	./src/index.js /* Entry point of the project that defines
				   * a Redux provider with reducers.
				   */
	./src/movies.json /* Movie data. */
	./src/routes.js /* React Router routes */
	./index.html
	./package.json
	./webpack.config.js
