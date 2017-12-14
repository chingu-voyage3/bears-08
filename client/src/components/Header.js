import React, { Component } from 'react';
import Appbar from 'material-ui/AppBar';

class Header extends Component {
    render() {
        return (         
        <Appbar
            title={this.props.name}
        />  
        );
    }
}

export default Header;