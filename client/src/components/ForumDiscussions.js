import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForumDiscussions extends Component {

    constructor(props){
        super(props);
        this.state = this.props.discussions;
    }

    componentWillMount(){
        const orderFunction = this.props.order;
        this.setState(orderFunction(this.state));
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
    discussions: [{date: 2}, {date: 1}],
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