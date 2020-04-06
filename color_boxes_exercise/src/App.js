import React from 'react';
import './App.css';
import BoxContainer from './BoxContainer';
import Smile from './ReactEvents/Smile/Smile';
import AnnoyingForm from './ReactEvents/AnnoyingForm/AnnoyingForm';
import CopyDemo from './ReactEvents/CopyDemo/CopyDemo';
import SmileWithProps from './ReactEvents/SmileWithProps/SmileWithProps';
import SmileExperimental from './ReactEvents/SmileExperimental/SmileExperimental';




function App() {
  return (
    <div className="App">
      <BoxContainer />
      <Smile />
      <SmileWithProps />
      <SmileExperimental />
      <AnnoyingForm />
      <CopyDemo />
    </div>
  );
}

export default App;
