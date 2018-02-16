import React, { Component } from 'react';
import Header from '../components/Header';
import Home from './Home';
class App extends Component {
  
  render() {
    return (
      <div className="grid-container">
        <Header />
        <Home />
      </div>
    );
  }
}
export default App;