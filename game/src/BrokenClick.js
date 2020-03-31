import React, { Component } from 'react';
import './BrokenClick.css';

class BrokenClick extends Component {

  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ clicked: true });
  }

  render() {
    return(
      <div>
        <h1>Broken button</h1>
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

export default BrokenClick;