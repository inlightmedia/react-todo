var React = require('react');
var TodoItem = require('TodoItem');

var TodoList = React.createClass({
	render: function() {
		var {todos} = this.props;
		var renderTodos = () => {
			return todos.map((todo) => {
				return ( //each item in repeat array must have a key property with a unique identifier
 					<TodoItem key={todo.id} {...todo}/>     				
				);
			});
		};

		return (
			<div>
   				{renderTodos()}
   			</div>
		);
	}
});

module.exports = TodoList;
