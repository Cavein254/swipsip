import React from "react";
import { Form, Button } from "react-bootstrap";
import "./user.scss";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [1, 2, 4, 5],
  };

  isFormValid = ({ email, password }) => email && password;

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    let dataToSubmit = {
      email: this.state.email,
      password: this.state.password,
    };
  };
  render() {
    return (
      <div className="Container form-data">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              name="email"
              onChange={this.handleOnChange}
              Required
            />
            <Form.Text>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              name="password"
              onChange={this.handleOnChange}
              Required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleOnSubmit}>
            Submit
          </Button>
        </Form>
        <h1>{this.state.email}</h1>
        <h1>{this.state.password}</h1>
      </div>
    );
  }
}

export default Login;
