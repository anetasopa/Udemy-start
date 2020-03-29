import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `oo${number}`.slice(-3): number);
// 023 -> ...
// 0056 -> 0

class Pokecard extends Component {
  render() {
    // let imgSrc = `${POKE_API} ${padToThree(this.props.id)}.png`;
    return(
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{this.props.name}</h1>
        <img className='image' alt={this.props.name} src={this.props.img} id={padToThree(this.props.id)}/> 
        {/* <img src={imgSrc} alt={this.props.name} /> */}
        <div className='Pokecard-data'>Type: {this.props.type}</div> 
        <div className='Pokecard-data'>Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;