import React, { Component } from 'react';

class Clicker extends Component {

  constructor(props) {
    super(props);
    this.state ={ num: 1 }; 
    this.genRandom = this.genRandom.bind(this);
  }

  genRandom = e => {
    // pick random number 1 - 10
    let randNumber = Math.floor(Math.random() * 10) + 1;

    // update state with new rand
    this.setState({ num: randNumber});
  }

  render() {
    return(
      <div>
        <h1>My number is {this.state.num}</h1>
        {this.state.num === 7 && <h2>You win!!!</h2>}
        {this.state.num === 7 && <button onClick={this.genRandom}>Again - Random Number</button>}
        {this.state.num !== 7 && <button onClick={this.genRandom}>Random Number</button>}
        {/* moze byc to tez napisane wtaki sposob:
        {this.state.num === 7
          ? <h2>You win!!!</h2>
          : <button onClick={this.genRandom}>Random Number</button>
        }  */}
      </div>
    );
  }
}

export default Clicker;