import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from '../images/logo.svg';
import '../css/App.css';
import { callApi } from '../actions/api'
class App extends Component {
  state = {
    response: ''
  };
  componentDidMount() {
    callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}
export default App;