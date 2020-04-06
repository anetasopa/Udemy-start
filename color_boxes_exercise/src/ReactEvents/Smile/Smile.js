import React, { Component } from 'react';
import './Smile.css';

class Smile extends Component {

  dispenseWisdom() {
    let message = [
      'I hover over the mouse with a smiley face',
    ];

    let rIndex = Math.floor(Math.random() * message.length);
      alert(message[rIndex]);
  }

  render() {
    return(
      <div className='smile' onMouseEnter={this.dispenseWisdom} style={{fontSize: 50}}> 😀</div>
    );
  }
}

export default Smile;