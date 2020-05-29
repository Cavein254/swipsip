import React, { createContext, useReducer } from "react";
import { UserReducer } from "../reducer/userReducer";

export const RegisterUserContext = createContext();

const initialState = {
  isSuccess: false,
  msg: "",
};

const RegisterUserContextProvider = (props) => {
  const [registeredUser, dispatch] = useReducer(UserReducer, initialState);
  return (
    <RegisterUserContext.Provider value={{ registeredUser, dispatch }}>
      {props.children}
    </RegisterUserContext.Provider>
  );
};

export default RegisterUserContextProvider;
