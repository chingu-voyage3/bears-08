import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button nameClass="button">
                {this.props.name}
            </button>
        );
    }
}

export default Button;