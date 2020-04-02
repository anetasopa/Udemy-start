import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    return(
      <div className='die-block'>
          <h1>{this.props.h1}</h1>
          <i className={`Die fas fa-dice-${this.props.face} ${
            this.props.rolling && 'shaking'
          }`} />
      </div>
    );
  }
}

export default Die;