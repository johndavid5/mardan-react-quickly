// Import CSS -- via style and css loaders
// will be imported and injected into the web
// page...
require('../css/main.css');

// Imports React for <> syntax: React.createElement()...
const React = require('react');
const ReactDOM = require('react-dom');
const Content = require('./content.jsx');

ReactDOM.render(
	<Content />,
	document.getElementById('content')
);
