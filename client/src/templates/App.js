import React, { Component } from 'react';
import Header from '../components/Header';
import ForumDiscussions from '../components/ForumDiscussions';
import { recentsDiscussions } from '../actions/api';
class App extends Component {

  constructor(){
    super();
    this.state = {
      discussions: []
    }
  }
  
  componentWillMount() {
    recentsDiscussions().then(response => {
      this.setState({ discussions: response });
    });
  }
  
  render() {
    const discussions = this.state.discussions;
    return (
      <div className="grid-container">
        <Header />
        <ForumDiscussions discussions={discussions}/>
      </div>
    );
  }
}
export default App;