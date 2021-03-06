import React from 'react';
import './App.css';
import  Hand  from './hand.jsx'
import SequenceNavbar from './navbar';
import GameBoard from './gameBoard.jsx'

function App() {
  return (
    <div className="App">
        <SequenceNavbar />
      <div className='board-container'>
        <div className='board'>
          <GameBoard />
        </div>
        <div className='Hand'>
          <Hand />
        </div>
      </div>
    </div>
  );
}

export default App;
