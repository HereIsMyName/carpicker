import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Button, Input } from 'semantic-ui-react';
import validator from 'validator';
import FormError from "./form-error.js";
import '../../styles/formStyles.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  clearError = () => {
    const errclr = this.state;
    errclr.error = {};
    this.setState({errclr});
  }

  handleSubmit = () => {
    const email = this.state.email, 
      pass = this.state.password;
    this.clearError();
    const check = this.validate(email, pass);
    this.setState({ check });
    if (Object.keys(check).length === 0) {  
      this.props.submit(email, pass);
    } 
  };

  validate = (e, p) => {
    const error = this.state.error;
    if (!validator.isEmail(e)) error.email = "Invalid Email";
    if (!p) error.password = "Please enter a password";
    else if(p.length < 5) error.password ="Password must be more than 4 characters";
    return error;
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field error={!!this.state.error.email}>
            <label htmlFor="email">Email</label>
            <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="example@mail.com" />
            {this.state.error.email && <FormError text={this.state.error.email} />}
          </Form.Field>
          <Form.Field error={!!this.state.error.password}>
            <label htmlFor="password">Password</label>
            <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" />
            {this.state.error.password && <FormError text={this.state.error.password} />}
          </Form.Field>
          <Button primary>Submit</Button>
          <br /><br />
          <span>New User?</span>
          <Link to="/signup">Sign Up</Link>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
