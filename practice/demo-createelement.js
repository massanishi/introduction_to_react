var MyComponent = React.createClass({
	render: function () {

		return 
			React.createElement(
				"div",
				null,
				this.props.name
				);
	}
});

React.render(React.createElement(MyComponent, {name: 'fredo'}),
	 document.getElementById('container'));