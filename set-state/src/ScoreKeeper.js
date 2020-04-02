import React, { Component } from 'react';

class ScoreKeeper extends Component {

  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.Add1 = this.Add1.bind(this);
    this.Add3 = this.Add3.bind(this);

  }

  Add1() {
    this.setState({ score: this.state.score + 1 });
  }

  // Add3() {
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  // }

  Add3() {
    this.setState(st => { 
      return { score: st.score +1 };
    });
    this.setState(st => { 
      return { score: st.score +1 };
    });
    this.setState(st => { 
      return { score: st.score +1 };
    });
  }

  // incrementScore(curState) {
  //   return { score: curState.score + 1 };
  // }

  // Add3() {
  //   this.setState(incrementScore);
  //   this.setState(incrementScore);
  //   this.setState(incrementScore);
  // }

  render() {
    return(
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.Add1}>Add 1</button>
        <button onClick={this.Add3}>Add 3</button>
      </div>
    );
  }
}

export default ScoreKeeper;