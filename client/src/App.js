import React, { Component } from 'react';
import Header from './components/Header';
import Register from './components/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <Header name="bearbnb"/>
        <Register />
      </div>
    );
  }
}

export default App;
