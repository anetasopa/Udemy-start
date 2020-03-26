class Friend extends React.Component {
  render() {
    const {name, hobbys} = this.props;
    console.log(this.props.hobbys);

    return(
      <div>
        <div>
          <h1>{name}</h1>
          <ul>
            {hobbys.map(h => <li>{h}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}