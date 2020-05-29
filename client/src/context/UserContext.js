import React, { createContext, useReducer } from "react";
import { UserReducer } from "../reducer/userReducer";

export const UserContext = createContext();

const initialState = {
  isSuccess: false,
  admin: false,
  payload: [],
};

const UserContextProvider = (props) => {
  const [loggedUser, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{ loggedUser, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
