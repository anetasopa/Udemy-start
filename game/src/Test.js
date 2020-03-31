import React, { Component } from 'react';
import './Test';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe(e) {
    this.setState({ clicked: true });
  }

  render() {
    return(
      <div>
        <h1>{ this.state.clicked ? 'Click' : 'Not click' }</h1>
        <button onClick={this.clickMe}>Click me!</button>
      </div>
    );
  }
}

export default Test;