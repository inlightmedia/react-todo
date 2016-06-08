var React 		= 	require('react');
var ReactDOM 	= 	require('react-dom');

// Initialize Routing
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// The above var is the same as the below but uses an ES6 feature shorthand:
// var Route = require('react-router').Route; var Router = require('react-router').Router; var IndexRoute = require('react-router').IndexRoute; var hashHistory = require('react-router').hashHistory;

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<p>Boilerplate 3 Project</p>,
	document.getElementById('app')
);
