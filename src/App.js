import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Curse';
import {High} from './High'
import {Curse} from './Curse'

class App extends Component {
  render() {
    return (
      <div className="App">
      <High/>
      <Curse/>
      </div>

    );
  }
}

export default App;
