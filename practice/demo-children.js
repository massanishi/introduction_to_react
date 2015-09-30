var MyComponent = React.createClass({
	render: function () {
		var cnt = React.Children.count(this.props.children);
		console.log(cnt);
		React.Children.map(this.props.children, function(child){
			console.log(child);
		});

		return (
			<div>
				{this.props.name}
			</div>
			);
	}
});

React.render(<MyComponent name='frodo' > 
	<p key='firsty'>a child</p> 
	<p key='2'>another</p>
	</MyComponent>, document.getElementById('container'));