import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './forms/login';


class LoginPage extends Component {

    submit = (e, p) => {
        // let data = {email: e, password: p}; 
        this.props.addUsers(e, p);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm submit={this.submit} />
            </div>
        );
    }
}


export default LoginPage;