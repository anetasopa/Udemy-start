import React, { Component } from 'react';

class Demo extends Component {
  
  constructor(props) { 
    super(props);
    this.state = { color: 'red' };
  }

  render(){
    return(
      <div>
        <h1>Demo</h1>
        <p>{this.props.animal}</p>
        <p>{this.props.food}</p>
        <p>{this.state.color}</p>
      </div>
    );
  }
}

export default Demo;