import React, { Component } from "react";

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
  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const [
      username,
      firstname,
      lastname,
      email,
      password,
      password1,
      errors,
    ] = this.state;
  };
  render() {
    return (
      <form>
        <h1>Register</h1>
        <input
          name="username"
          value={this.state.username}
          onChange={(e) => this.handleChange(e)}
          id="username"
          type="username"
          placeholder="Enter Username"
        />
        <br />
        <input
          name="firstname"
          value={this.state.firstname}
          onChange={(e) => this.handleChange(e)}
          id="firstname"
          type="firstname"
          placeholder="Enter Firstname"
        />
        <br />
        <input
          name="lastname"
          value={this.state.lastname}
          onChange={(e) => this.handleChange(e)}
          id="lastname"
          type="lastname"
          placeholder="Enter Lastname"
        />
        <br />
        <input
          name="password"
          value={this.state.password}
          onChange={(e) => this.handleChange(e)}
          id="password"
          type="password"
          placeholder="Enter password"
        />
        <br />
        <input
          name="password1"
          value={this.state.password1}
          onChange={(e) => this.handleChange(e)}
          id="password1"
          type="password1"
          placeholder="Confirm password"
        />
        <br />
        <button
          type="submit"
          // onClick={this.submitForm}
        >
          Register
        </button>
      </form>
    );
  }
}

export default Register;
