import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Logout extends Component {
  state = {
    success: "",
    payload: "",
    errors: [],
  };

  render() {
    return (
      <div>
        <p>Logged out</p>
      </div>
    );
  }
}

export default Logout;
