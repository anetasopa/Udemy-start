class App extends React.Component {
  render() {
    return(
      <div>
        <Hello to="Al" from="USA" />
        <Hello to="Aneta" from="Polen" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

