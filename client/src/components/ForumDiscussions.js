import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForumDiscussions extends Component {

    constructor(props){
        super(props);
        this.state = {
            discussions: this.props.discussions,
        };
    }

    componentWillMount(){
        if(this.props.discussions.length > 1){
            const orderFunction = this.props.order;
            const discussions = orderFunction(this.props.discussions);
            this.setState({ discussions });
        }
    }

    render() {
        return (
            <div>
               
            </div>
        );
    }
}

ForumDiscussions.defaultProps = {
    discussions: [],
    order: (discussions) => {
        const ordenedDiscussions = discussions.sort((firstItem, secondItem) => {
            return firstItem.date - secondItem.date;
        })
        return ordenedDiscussions; 
    }
}

export default ForumDiscussions;