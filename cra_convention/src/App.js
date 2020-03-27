import React from 'react';
import './App.css';
import Dog from './Dog';
import pug from './pobrane.jpeg';

function App() {
  return (
    <div className="App">
      <Dog />
      <div>It is div but it isn't in Dog component</div>
      <img className='pug-image' src={pug}/>
    </div>
  );
}

export default App;
