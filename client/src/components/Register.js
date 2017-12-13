import React, { Component } from 'react';
import Button from './Button';
import '../styles/register.css'

class Register extends Component {
    render() {
        return (
            <div class="registerComponent">
                <form className="registerForm">
                    <label>
                        First Name:
                        <input type="text" name="firstname" />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastname" />
                    </label>
                    <label>
                        Username:
                        <input type="text" name="username" />
                    </label>
                    <label>
                        E-mail:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                </form>
                <Button name="Register" />
            </div>
        );
    }
}

export default Register;