import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AuthenticationService from '../services/AuthenticationService';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            confirmpassword: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        AuthenticationService.register(this.state);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        })
    }

    render() {
        return (
            <form className="registerForm">
                <TextField
                    floatingLabelText="first name"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                />
                <TextField
                    floatingLabelText="last name"
                    name="lastname"
                />
                <TextField
                    floatingLabelText="username"
                    name="username"
                />
                <TextField
                    floatingLabelText="email"
                    name="email"
                />
                <TextField
                    floatingLabelText="password"
                    name="password"
                />
                <TextField
                    floatingLabelText="confirm password"
                    name="confirmpassword"
                />
                <RaisedButton 
                    onClick={this.handleSubmit}
                    label="Register"
                />
            </form>
        );
    }
}

export default Register;