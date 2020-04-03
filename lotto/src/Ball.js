import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
  render() {
    console.log(this.props.num);
    return(
      <div className='Ball'>{this.props.num}</div>
    );
  }
}

export default Ball;