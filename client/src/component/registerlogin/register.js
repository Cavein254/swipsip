import React, { Component } from "react";
import { registerUser } from "../../actions/user_actions";

class Register extends Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password1: "",
    errors: [],
  };
  displayErrors = (errors) =>
    errors.map((err, i) => {
      return <p key={i}>{err}</p>;
    });
  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };
  isFormEmpty = ({
    username,
    firstname,
    lastname,
    email,
    password,
    password1,
  }) => {
    return (
      !username.length ||
      !firstname.length ||
      !lastname.length ||
      !email.length ||
      !password.length ||
      !password1.length
    );
  };
  isPasswordValid = ({ password, password1 }) => {
    if (password || (6 && password1 < 6)) {
      this.setState({
        errors: this.state.errors.concat(
          "Password must be more than 6 characters"
        ),
      });
    } else if (password !== password1) {
      this.setState({
        errors: this.state.errors.concat("Passwords did not match"),
      });
    } else {
      return true;
    }
  };

  isFormValid = () => {
    let errors = [];
    let error = "";
    if (this.isFormEmpty(this.state)) {
      error = { msg: "Fields cannot be blank" };
      this.setState({ errors: errors.concat(error) });
    } else if (!this.isPasswordValid(this.state)) {
      this.setState({
        errors: this.state.errors.concat("Password error"),
      });
    }
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    let userData = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password1: this.state.password1,
    };
    if (this.isFormValid()) {
      this.setState({
        errors: [],
      });
      this.props.dispatch(registerUser(userData)).then((res) => {
        if (res.payload.success) {
          console.log(res);
          this.props.history.push("/login");
        } else {
          this.setState({
            errors: this.state.errors.concat("Registration failed"),
          });
        }
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <h2>Register</h2>
          <form>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              //   required
            />
            <br />
            <input
              type="text"
              placeholder="Enter Firstname"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
              //   required
            />
            <br />
            <input
              type="text"
              placeholder="Enter Lastname"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
              //   required
            />
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              //   required
            />
            <br />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              //   required
            />
            <br />
            <input
              type="password"
              placeholder="confirm password"
              name="password1"
              value={this.state.password1}
              onChange={this.handleChange}
              //   required
            />
            <br />
            {this.state.errors.length > 0 && (
              <div>{this.displayErrors(this.state.errors)}</div>
            )}
            <button onSubmit={this.handleOnSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
