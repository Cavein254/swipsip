import React, { createContext, useReducer } from "react";
import { LoginSuccess, Login } from "./DummyData";
import { UserReducer } from "../reducer/userReducer";

export const UserContext = createContext();

const initialState = {
  isSuccess: false,
  admin: false,
  payload: [],
};

const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
