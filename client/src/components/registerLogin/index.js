import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/user_action";

class RegisterLogin extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  submitForm = (e) => {
    e.preventDefault();

    let dataToSubmit = {
      email: this.state.email,
      password: this.state.password,
    };

    if (this.isFormValid(this.state)) {
      this.setState({ errors: [] });
      this.props.dispatch(loginUser(dataToSubmit)).then((res) => {
        console.log("response", res);
        if (res.payload.success) {
          this.props.history.push("/");
        } else {
          this.setState({ errors: this.state.errors.concat(res.payload.msg) });
        }
      });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  displayErrors = (errors) =>
    errors.map((err, index) => {
      return (
        <div key={index}>
          <p>{errors}</p>
          <br />
        </div>
      );
    });
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input
            name="email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
            id="email"
            type="email"
            placeholder="Enter Email"
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
          {this.state.errors.length > 0 && (
            <div>{this.displayErrors(this.state.errors)}</div>
          )}
          <button type="submit" onClick={this.submitForm}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(RegisterLogin);
