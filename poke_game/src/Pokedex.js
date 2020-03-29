import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className='Pokedex-winner'>WINNING Hand</h1>;
    } else {
      title = <h1 className='Pokedex-loser'>LOSING Hand</h1>;
    }
    return(
      <div className='Pokedex'>
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map((p) => (
            <Pokecard key={p.id} id={p.id} name={p.name} img={p.image} type={p.type} exp={p.base_experience} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;