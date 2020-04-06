import React, { Component } from 'react';
import './Smile.css';

class Smile extends Component {

  constructor(props) {
    super(props);
    this.dispenseWisdom = this.dispenseWisdom.bind(this);
  }

  dispenseWisdom() {
    console.log('this is...', this);
    let message = [
      'This is Smile',
    ];

    let rIndex = Math.floor(Math.random() * message.length);
      alert(message[rIndex]);
  }

  render() {
    return(
      <div 
        className='smile' 
        onMouseEnter={this.dispenseWisdom} 
        style={{fontSize: 50}}> 
        😀
      </div>
    );
  }
}

export default Smile;