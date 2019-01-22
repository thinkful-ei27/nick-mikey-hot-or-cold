import React, { Component } from 'react';

import './App.css';
import Header from './components/header';
import Answer from './components/answer';
import Guess from './components/guess';
import Hangman from './components/hangman';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Answer />
        <Guess />
        <Hangman />
      </div>
    );
  }
}

export default App;
