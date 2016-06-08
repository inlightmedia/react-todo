// This component saves state

var React = require('react');
var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: 'Feed the cat'
				},
				{
					id: 3,
					text: 'Do that thing.'
				},
				{
					id: 4,
					text: 'Wipe the floor.'
				}
			]
		};
	},
	render: function () {
		var {todos} = this.state;
		return (
			<TodoList todos={todos} />
		);
	}
});

module.exports = TodoApp;
