class App extends React.Component {
	render() {
		return (
			<div>
				<Hello />
				<JSXDemo />
				<NumPicker />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
