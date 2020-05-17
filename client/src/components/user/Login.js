import React from "react";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./user.scss";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
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
    Axios.post("/api/user/login", dataToSubmit).then(
      (response) => response.data
    );
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
              required
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
              required
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
