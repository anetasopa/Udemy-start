import React from 'react';
import './App.css';
import Game from './Game';
import Rando from './Rando';
import Demo from './Demo';
import Button from './Button';
import BrokenClick from './BrokenClick';



function App() {
  return (
    <div className="App">
      <Game />
      <Rando maxNum={7}/>
      <Demo animal= 'cat' food= 'apple' /> 
      <Button />
      <BrokenClick />
    </div>
  );
}

export default App;
