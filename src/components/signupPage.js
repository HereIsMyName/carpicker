import React, { Component } from 'react';
import Signup from "./forms/signup";

class SignupPage extends Component {

    submit = (e,p) => {
        console.log('email: ' + e, '| password: ' + p);
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <Signup submit={this.submit} />
            </div>
        );
    }
}

export default SignupPage;