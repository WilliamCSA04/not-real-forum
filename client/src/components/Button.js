import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import "../scss/Button.scss"

class Button extends Component {

    render(){
        return(
            <Fragment>
                <input type="button" className={`btn ${this.props.classesNames}`} name={this.props.name} value={this.props.value} onClick={this.props.onClick} />
            </Fragment>
        );
    }

}

Button.propTypes = {
    classesNames: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string,
}

export default Button;