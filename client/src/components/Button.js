import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../scss/Button.scss"

class Button extends Component {

    render(){
        return(
            <input type="button" 
                className={`btn ${this.props.classesNames}`} 
                name={this.props.name} 
                value={this.props.value} 
                onClick={this.props.onClick}
            />
        );
    }

}

Button.propTypes = {
    classesNames: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string,
}

Button.defaultProps = {
    classesNames: ""
}

export default Button;