import React, { Component } from 'react';

class Button extends Component {
  
  render() {
    return(
      <div>
        <h1>Button</h1>
        <button 
          onClick={function() {
            alert('click');
          }}
        >
          Click me!</button>
      </div>
    );
  }
}

export default Button;