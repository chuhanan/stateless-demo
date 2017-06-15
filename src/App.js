import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StateLess from './Stateless';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StateLess title="无状态组件" />
      </div>
    );
  }
}

export default App;
