import React, { createContext, Component } from "react";
import { LoginSuccess, Login } from "./DummyData";

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    isSuccess: LoginSuccess.data2.success,
    admin: LoginSuccess.data1.user.isAdmin,
    payload: LoginSuccess.data1,
  };

  render() {
    return (
      <UserContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
