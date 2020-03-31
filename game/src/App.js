import React from 'react';
import './App.css';
import Game from './Game';
import Rando from './Rando';
import Demo from './Demo';
import Button from './Button';
import BrokenClick from './BrokenClick';
import Test from './Test.js';
import BrokenClick2 from './BrokenClick2';

function App() {
  return (
    <div className="App">
      <Game />
      <Rando maxNum={7}/>
      <Demo animal= 'cat' food= 'apple' /> 
      <Button />
      <BrokenClick />
      <Test />
      <BrokenClick2 />
    </div>
  );
}

export default App;
