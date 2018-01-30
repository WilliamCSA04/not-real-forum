import React, { Component } from 'react';
import Header from '../components/Header';
import ForumDiscussions from '../components/ForumDiscussions';
class App extends Component {
  
  render() {
    return (
      <div className="grid-container">
        <Header />
        <ForumDiscussions/>
      </div>
    );
  }
}
export default App;