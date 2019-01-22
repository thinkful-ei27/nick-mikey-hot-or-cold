import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Answer from './components/answer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Answer />
      </div>
    );
  }
}

export default App;
