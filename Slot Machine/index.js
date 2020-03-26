class App extends React.Component {
	render() {
		return (
			<div style={{ backgroundColor: "#FFF8DC" }}>
        <h1 style={{ textAlign: "center" }}>Slot Machine!</h1>
				<Machine 
          s1="🐵"
          s2="🐵"
          s3="🐵"
        />
        <Machine 
          s1="🍓"
          s2="🐵"
          s3="🌜"
        />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
