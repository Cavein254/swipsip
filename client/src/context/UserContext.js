import React, { createContext, useState, useEffect } from "react";
import { LoginSuccess, Login } from "./DummyData";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    isSucess: false,
    admin: false,
    payload: [],
  });
  const loggedInUser = ({ isSuccess, admin, payload }) => {
    setUser({ isSuccess, admin, payload });
  };
  // loggedInUser(LoginSuccess);
  useEffect(() => {
    loggedInUser(LoginSuccess);
  }, []);
  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
