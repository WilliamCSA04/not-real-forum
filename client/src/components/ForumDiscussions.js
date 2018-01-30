import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Discussion from './Discussion';

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

    mapDiscussions = () => {
        const discussions = this.state.discussions;
        const discussionsToRender = discussions.map(discussion => {
            return (
                <Discussion 
                    title={discussion.title}
                    categories={discussion.categories}
                    views={discussion.views}
                    commentaries={discussion.commentaries}
                    tags={discussion.tags}
                    createdAt={discussion.createdAt}
                    creator={discussion.creator}
                />
            )
        });
        return discussionsToRender;     
    }

    render() {
        const discussions = this.mapDiscussions();
        return (
            <div className="row">
            {discussions}
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