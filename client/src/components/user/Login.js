import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { loginUser } from "../../actions/User_actions";
import { Form, Button } from "react-bootstrap";
import "./user.scss";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    payload: "",
    errors: "",
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
    this.props.dispatch(loginUser(dataToSubmit)).then((response) => {
      if (response.payload.success) {
        this.setState({
          success: response.payload.success,
          payload: response.payload,
        });
      } else {
        this.setState({
          success: response.payload.success,
          errors: response.payload.msg,
        });
      }
    });
  };

  loggedInUser = () => {
    if (this.state.success) {
      if (this.state.payload.user.isAdmin) {
        return <Redirect to="/user/admin" />;
      }
      return <Redirect to="/user/profile" />;
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="Container form-data">
        {this.loggedInUser()}
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps)(Login);
