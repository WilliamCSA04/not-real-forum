import React, { Component } from 'react';
import ForumDiscussions from '../components/ForumDiscussions';
import { recentsDiscussions } from '../actions/api';

class Home extends Component {

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
            <ForumDiscussions discussions={discussions}/>
        );
    }
}

export default Home;