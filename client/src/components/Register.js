import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AuthenticationService from '../services/AuthenticationService';
import '../styles/register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            match: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.passMatch = this.passMatch.bind(this);
    }

    handleSubmit(event) {
        AuthenticationService.register(this.state);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    passMatch(password, passConf) {
        if (password !== passConf) {
            this.setState({
                match: false
            });
        } else {
            this.setState({
                match: true
            });
        }
    }

    render() {
        return (
            <form className="registerForm">
                <TextField
                    floatingLabelText="first name"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                    type="text"
                />
                <TextField
                    floatingLabelText="last name"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    type="text"
                />
                <TextField
                    floatingLabelText="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    type="text"
                />
                <TextField
                    floatingLabelText="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                />
                <TextField
                    floatingLabelText="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                />
                <TextField
                    floatingLabelText="confirm password"
                    name="confirmpassword"
                    value={this.state.confirmpassword}
                    onChange={this.handleChange}
                    type="password"
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