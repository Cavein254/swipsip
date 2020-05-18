import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../../actions/User_actions";
import { Form, Button } from "react-bootstrap";
import "./user.scss";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    age: 0,
    password: "",
    password1: "",
    errors: [],
    success: "",
    payload: {},
  };
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    let dataToSubmit = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password1: this.state.password1,
      age: this.state.age,
    };

    this.props.dispatch(registerUser(dataToSubmit)).then((response) => {
      if (response.payload.success) {
        this.setState({
          success: response.payload.success,
          payload: response.payload,
        });
      } else {
        this.setState({
          success: response.payload.success,
          errors: this.state.errors.concat(response.payload.msg),
        });
      }
    });
  };
  render() {
    return (
      <div className="form-wrapper">
        <Form ClassName="form-data">
          <Form.Group controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              name="username"
              onChange={this.handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleOnChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicNumber">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Age"
              name="age"
              onChange={this.handleOnChange}
            />
            <Form.Text>
              Please note you have to be over 18 to register
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleOnChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="password1"
              onChange={this.handleOnChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleOnSubmit}>
            Submit
          </Button>
        </Form>
        {this.state.errors.map((err, i) => {
          return <h2 key={i}>{err}</h2>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps)(Register);
