const React = require('react');
const ReactDOM = require('react-dom');
const MyRouter = require('./my_router.jsx');


const mapping = {
	'#profile': <div >Profile (<a href="#">home</a>)</div>,
	'#accounts': <div >Accounts (<a href="#">home</a>)</div>,
	'#shemp': <div >Shemp <img src="/common/images/corny-cassanovas-0107.png" title="Corny Cassanovas"/>(<a href="#">home</a>)</div>,
	'*': <div ><h2>Dashboard</h2><br/>
		<a href="#profile">Profile</a>
		<br/>
		<a href="#accounts">Accounts</a>
		<br/>
		<a href="#shemp">Shemp</a>
		</div>
};

ReactDOM.render(
	<MyRouter mapping={mapping}/>,
	document.getElementById('content')
);
