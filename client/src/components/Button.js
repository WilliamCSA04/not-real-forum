import React, { Component, Fragment } from 'react';

class Button extends Component {

    render(){
        return(
            <Fragment>
                <input type="button" className={this.props.classesNames} name={this.props.name} value={this.props.value} onClick={this.props.onClick} />
            </Fragment>
        );
    }

}

export default Button;