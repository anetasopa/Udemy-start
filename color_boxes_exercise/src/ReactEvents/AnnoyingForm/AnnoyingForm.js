import React, { Component } from 'react';

class AnnoyingForm extends Component {

  handleKeyUp() {
    alert('It is : on key up!');
  }
  
  render() {
    return(
      <div>
        <h3>Try typing in here:</h3>
        <textarea onKeyUp={this.handleKeyUp} /> 
      </div>
    );
  }
}

export default AnnoyingForm;