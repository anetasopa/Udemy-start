import React, { Component } from 'react';
import './ButtonList.css';

class ButtonList extends Component {

  static defaultProps = {
    colors: ['green', 'red', 'yellow', 'blue']
  };

  constructor(props) {
    super(props);
    this.state = { color: 'pink' };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(newColor) {
    console.log(`newColor is: ${newColor}`);
    this.setState({ color: newColor });
  }

  render() {
    return(
      <div style={{ backgroundColor: this.state.color, marginTop: 30 }}>
        {this.props.colors.map(c => {
          const colorObj = { backgroundColor: c };
          return <button className='ButtonList' style={colorObj} onClick={() => this.changeColor(c)}>Click on me!</button>
        })}
      </div>
    );
  }
}

export default ButtonList;