import React, { createContext, Component } from "react";
import { LoginSuccess, Login } from "./DummyData";

export const userContext = createContext();

class UserContextProvider extends Component {
  state = {
    isSuccess: LoginSuccess.data1.success,
    admin: LoginSuccess.data1.user.isAdmin,
    payload: LoginSuccess.data1,
  };

  render() {
    return (
      <userContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </userContext.Provider>
    );
  }
}

export default UserContextProvider;
