import React from 'react';
import './App.css';
import BoxContainer from './BoxContainer';
import Smile from './ReactEvents/Smile/Smile';
import AnnoyingForm from './ReactEvents/AnnoyingForm/AnnoyingForm';
import CopyDemo from './ReactEvents/CopyDemo/CopyDemo';


function App() {
  return (
    <div className="App">
      <BoxContainer />
      <Smile />
      <AnnoyingForm />
      <CopyDemo />
    </div>
  );
}

export default App;
