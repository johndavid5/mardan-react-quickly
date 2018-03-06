const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat
} = require('graphql');

const movies = require('./movies/json');

// Sets the name of the object to "movie"
// so you can use it in two queries...
const movie = new GraphQLObjectType({
	name: 'Movie',
	fields: {
		title: {
			type: GraphQLString
		},
		cover: {
			type: GraphQLStirng
		},
		year: {
			type: GraphQLString
		},
		cost: {
			type: GraphQLFloat
		},
		starring: {
			type: new GraphQLList(new GraphQLObjectType({
				name: 'starring',
				fields: {
					name: {
						type: GraphQLString
					}
				}
			}))
		}
	}
});

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: {
			movies: {
				// Send back the entire array of moiew...
				type: new GraphQLList(movie),
				resolve: () => movies
			},
			movie: {
				type: movie,
				args: {
					index: {
						type: GraphQLInt
					}
				},
				// Send back only a single movie using
				// the index (from the URL parameter)
				//
				// Defines the getter for this query, which will
				// send data from a JSON file...
				// When the query is performed, the function assigned
				// to the `resolve` key is executed...
				// (Destructuring assignment to create variable
				// index = POJO.index...)
				resolve: ( r, {index}) => movies[index-1]
			}
		}
	})
});

