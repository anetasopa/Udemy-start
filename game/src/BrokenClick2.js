import React, { Component } from 'react';

class BrokenClick2 extends Component {

    state = { clicked: false };
    // this.handleClick =  this.handleClick.bind(this);

  handleClick = e => {
    this.setState({ clicked: true });
  }

  render() {
    return(
      <div>
        <h1>Broken click 2</h1>
        <p className={this.state.clicked ? 'click' : 'notClick'}>
          { this.state.clicked ? 'Cliked' : 'Not cliked' }
        </p>
        <button style={{ fontSize: '30px', borderRadius: '5px' }} onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}

export default BrokenClick2;