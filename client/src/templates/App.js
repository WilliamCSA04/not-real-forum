import React, { Component } from 'react';
import { callApi } from '../actions/api'
import Header from '../components/Header';
class App extends Component {
  
  render() {
    return (
      <div className="grid-container">
        <Header />
      </div>
    );
  }
}
export default App;