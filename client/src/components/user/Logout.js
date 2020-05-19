import React, { Component } from "react";
import { logoutUser } from "../../actions/User_actions";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Logout extends Component {
  state = {
    success: "",
    payload: "",
    errors: [],
  };
  componentDidMount() {
    this.props.dispatch(logoutUser()).then((response) => {
      console.log(response);
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
  }
  onLogoutSuccess = () => {
    if (this.state.success) {
      return <Redirect to="/" />;
    }
  };
  render() {
    return (
      <div>
        {this.onLogoutSuccess()}
        <code>
          {this.state.errors.map((err, i) => {
            return (
              <p>
                <span key={i}>{err}</span>
              </p>
            );
          })}
        </code>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
export default connect(mapStateToProps)(Logout);
