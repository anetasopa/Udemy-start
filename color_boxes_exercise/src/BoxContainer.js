import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {

  static defaultProps = {
    colors: ['red', 'grey', 'blue', 'yellow', 'green'],
    numBoxes: 18
  }

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(
      () => <Box colors={this.props.colors}/>
    )
    return(
      <div className='BoxContainer'>{boxes}</div>
    );
  }
}

export default BoxContainer;