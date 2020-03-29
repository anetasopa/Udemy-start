import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', image: 'https://i.pinimg.com/originals/dc/75/b9/dc75b96b4141c0a0f5d2658b084e170b.png', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtel', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRRlHVzcYpeQT1qz7tgzK8hHhxiZqiSzBzQ8fn5ZvClQ5NWhgj', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', image: 'https://img.pokemondb.net/artwork/large/metapod.jpg', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', image: 'https://i.pinimg.com/originals/c8/72/55/c87255e7f1980e4cd255e3fb45ba3dbb.jpg', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', image:'https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', image: 'https://i.pinimg.com/originals/04/49/9b/04499b23327a48c6c23813777cf3341d.jpg', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', image: 'https://images-na.ssl-images-amazon.com/images/I/71LZHbBCm-L._AC_SX425_.jpg', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', image: 'https://img.pokemondb.net/artwork/large/eevee.jpg', type: 'normal', base_experience: 65 },
    ]
  }
  render() {
    return(
      <div className='Pokedex'>
        <h1>Pokedex!</h1>
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