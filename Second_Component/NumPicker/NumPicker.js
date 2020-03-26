function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
	render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = 
        <div>
          <h2>Congrats</h2>
          <img src='https://cdn.pixabay.com/photo/2017/05/03/23/39/ok-2282499_960_720.png'/> 
        </div>
    } else {
      msg = 
        <h2>Unlucky</h2>
    }
      return (
        <div>
          <h1>Your number is: {num}</h1>
          {/* <p>{num === 7 ? 'Congrats!' : 'Unlucky'}</p> */}
          {/* {
            num === 7
            ? <img src='https://cdn.pixabay.com/photo/2017/05/03/23/39/ok-2282499_960_720.png'/> 
            : null
          } */}
          {msg}
        </div>
      );
	}
}
ReactDOM.render(<NumPicker />, document.getElementById('root'));