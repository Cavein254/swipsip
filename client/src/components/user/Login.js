import React from "react";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./user.scss";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
    payload: {},
    isAdmin: "",
    success: "",
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
    Axios.post("http://localhost:5000/api/user/login", dataToSubmit).then(
      (response) => {
        if (response.data.success) {
          this.setState({
            isAdmin: response.data.user.isAdmin,
            payload: response.data.user,
            success: response.data.success,
          });
          console.log(this.state);
        } else {
          this.setState({
            errors: response.data.msg,
          });
          console.log(this.state);
        }
      }
    );
  };
  adminRedirect = () => {
    if (this.state.isAdmin) {
      return <Redirect to="/user/admin" />;
    }
  };

  loggedInUser = () => {
    if (this.state.success) {
      return <Redirect to="/user/profile" />;
    }
  };
  mapErrors = (errors) => {
    errors.map((err, i) => {
      return <h2 Key={i}>{err}</h2>;
    });
  };
  render() {
    // console.log(this.state);
    return (
      <div className="Container form-data">
        {this.adminRedirect}
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
        <h5>{this.state.errors}</h5>
        <h1>{this.state.email}</h1>
        <h1>{this.state.password}</h1>
      </div>
    );
  }
}

export default Login;
