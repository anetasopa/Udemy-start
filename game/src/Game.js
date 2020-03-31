import React, { Component } from 'react';

class Game extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      score: 999,
      gameOver: false
    };
  }

  render() {
    return(
      <div>
        <h1>Game</h1>
        <p>Your scour is: {this.state.score}</p>
      </div>
    )
  }
}

export default Game;