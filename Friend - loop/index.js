class App extends React.Component {
  render() {
    return(
      <div>
        <Friend 
          name='Kris'
          hobbys={['guitar', 'sing', 'music', 'books']}
        />
        <Friend 
          name='Anet'
          hobbys={['programming', 'movies']}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));