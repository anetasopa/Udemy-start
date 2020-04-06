import React, { Component } from 'react';

class SmileExperimental extends Component {

  static defaultProps = {
    message: [
      'This is SmileExperimental',
    ]
  }

  dispenseWisdom = () => {
    let { message } = this.props;
    let rIndex = Math.floor(Math.random() * message.length);
      alert(message[rIndex]);
  }

  render() {
    return(
      <div 
        className='smile' 
        onMouseEnter={this.dispenseWisdom.bind(this)} 
        style={{fontSize: 50}}> 
        😀
      </div>
    );
  }
}

export default SmileExperimental;