class App extends React.Component {
  render() {
    return(
      <div>
        <Hello 
          to='Andzela'
          from='USA'
          bangs={4}
        />
        <Hello 
          to='Ali'
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));