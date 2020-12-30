import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import Button from './modules/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Hello</Button>
          Learn 
      </header>
    </div>
  );
}

export default App;
