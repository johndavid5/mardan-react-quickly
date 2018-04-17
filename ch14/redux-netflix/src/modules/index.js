// Imports combineReducers from the combineReducers
// property in redux...
const { combineReducers } = require('redux')

// Applies ES6/ES2015 destructuring assignment
// to create a reducer object called movies
// from the reducer property of ./movies.js
//const {
//  reducer: movies
//} = require('./movies')

console.log("Let off some destructuring assignments, Bennett...!");

// In English, this is...
const movies = require('./movies').reducer; 

module.exports = combineReducers({
  movies
  // more reducers go here
})
