class myCoponent extends React.Component({
	render() {

		return 
			(<div>Hello World</div>);
	}
});

React.render(React.createElement(MyComponent, {name: 'fredo'}),
	 document.getElementById('container'));