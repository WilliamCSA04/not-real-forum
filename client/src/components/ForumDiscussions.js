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
        const orderFunction = this.props.order;
        const discussions = orderFunction(this.state.discussions);
        this.setState({ discussions });
    }

    render() {
        {console.log(this.state)}
        return (
            <div>
               
            </div>
        );
    }
}

ForumDiscussions.defaultProps = {
    discussions: [],
    order: (discussions) => {
        if(discussions.length > 0){
            const ordenedDiscussions = discussions.sort((firstItem, secondItem) => {
                return firstItem.date - secondItem.date;
            })
            return ordenedDiscussions;
        }else{
            return discussions;
        }
    }
}

export default ForumDiscussions;