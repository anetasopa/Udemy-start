import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';
class CoinComponent extends Component {

  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://www.fleur-de-coin.com/images/currency/KM200/KM188_2002b.jpg' },
      { side: 'tails', imgSrc: 'https://www.eurocoinhouse.com/media/catalog/product/cache/3/image/600x600/9df78eab33525d08d6e5fb8d27136e95/A/T/AT16-2EURO2.jpg' }
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
      popupOpen: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 :0 ),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 :0 ),
      }
      // let newState = {
      //   ...st,
      //   currCoin: newCoin,
      //   nFlips: st.nFlips + 1
      // }
      // if (newCoin.side === 'heads') {
      //   newState.nHeads += 1;
      // } else {
      //   newState.nTails += 1;
      // }
      // return newState;
    });
  } 

  handleClick(e) {
    this.flipCoin();

    this.setState(st => {
      return {
        popupOpen: !this.state.popupOpen
      };
    })
  }

  render() {
    console.log("RENDER", this.state);  

    return(
      <div className='CoinCointeiner'>
        {this.state.popupOpen ? <b>popup</b> : null}
        <h2>Let's Filip A Coin!</h2>
        <button onClick={this.handleClick}>Flip me!</button>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
      </div>
    );
  }
}

export default CoinComponent;