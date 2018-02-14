const React = require('react');
const {Link} = require('react-router');

class Content extends React.Component {
	// Use the amazing Twitter Bootstrap UI library
	// http://getbootstrap.com to declare the menu
	// with the proper classes.
	render(){
		return (
        <div>
			<h1>Shemp.University</h1>
	  		<div className="navbar navbar-default">
	  			<ul className="nav nav-pills navbar-nav">
	  				<li className={(this.context.router.isActive('/about'))?'active':''}>
	  					<Link to="/about" activeClassName="active">
	  				     About
	  					</Link>
	  				</li>
	  				<li className={(this.context.router.isActive('/posts'))?'active':''}>
	  					<Link to="/posts" activeClassName="active">
	  				     Blog
	  					</Link>
	  				</li>
            		<li className={(this.context.router.isActive('/contact'))? 'active': ''}>
		              <Link to="/contact" activeClassName="active">
		                Contact Us
		              </Link>
		            </li>
            		<li className={(this.context.router.isActive('/shemp'))? 'active': ''}>
		              <Link to="/shemp" activeClassName="active">
						Shemp
		              </Link>
		            </li>
		            <li>
		              <Link to="/login" activeClassName="active">
		                Login
		              </Link>
		            </li>
	  			</ul>
	  		</div>
			{this.props.children}
        </div>
		);
	}
}

// This is how we define static fields in ES6...
Content.contextTypes = {
	router: React.PropTypes.object.isRequired
}

module.exports = Content;


