const React = require('react')
const ReactDOM = require ('react-dom')
const ReactRouter = require('react-router')
const History = require('history')

const Content = require('./content.jsx')
const About = require('./about.jsx')
const Contact = require('./contact.jsx')
const Shemp = require('./shemp.jsx')
const Login = require('./login.jsx')
const Post = require('./post.jsx')
const Posts = require('./posts.jsx')

const {withRouter} = require('react-router')

const posts = require('../posts.js')

let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
	// Disable pesky query string e.g., ?_k=v18reh
	// that's there by default to support older browsers
	// and transfer states when navigating.
	// (A life lived by default SUCKS.)
	queryKey: false
});

/* Syntactical Sugar: Object Destructuring Assignment */
let { Router,
		Route,
		Link
} = ReactRouter;

ReactDOM.render((
<Router history={hashHistory}>
  <Route path="/" component={Content}>
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} posts={posts}/>
      <Route path="/posts/id:" component={Post} posts={posts}/>
      <Route path="/contact" component={withRouter(Contact)} />
      <Route path="/shemp" component={Shemp} />
   </Route>
   <Route path="/login" component={Login}/>
</Router>
),
document.getElementById('content')
);

