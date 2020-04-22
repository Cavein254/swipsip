import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/user_actions";

class RegisterLogin extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };
  displayErrors = (errors) =>
    errors.map((err, i) => {
      return <p key={i}>{err}</p>;
    });
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();

    let userData = {
      email: this.state.email,
      password: this.state.password,
    };

    if (this.isFormValid(this.state)) {
      this.setState({ errors: [] });
      this.props.dispatch(loginUser(userData)).then((response) => {
        if (response.payload.success) {
          this.props.history.push("/");
        } else {
          this.setState({
            errors: this.state.errors.concat(
              "Login failed. Check email and password"
            ),
          });
        }
      });
    } else {
      this.setState({
        errors: this.state.errors.concat("Form is not valid"),
      });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Login</h2>
          <form className="col s12">
            <div className="row">
              <div>
                <input
                  name="email"
                  value={this.state.email}
                  onChange={this.handleOnChange}
                  id="email"
                  type="email"
                  className="validate"
                />
                <label htmlFor="email">Email</label>
                <span
                  className="helper-text"
                  data-error="Incorrect Email"
                  data-success="right"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  name="password"
                  value={this.state.password}
                  onChange={this.handleOnChange}
                  id="password"
                  type="password"
                  className="validate"
                />
                <label htmlFor="password">Password</label>
                <span
                  className="helper-text"
                  data-error="Incorrect Password"
                  data-success="right"
                />
              </div>
            </div>

            {this.state.errors.length > 0 && (
              <div>{this.displayErrors(this.state.errors)}</div>
            )}

            <div className="row">
              <div className="col s12">
                <button
                  className="btn waves-effect red lighten-2"
                  type="submit"
                  name="action"
                  onClick={this.submitForm}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
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
