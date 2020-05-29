import React, { createContext, useReducer } from "react";
import { adminReducer } from "../reducer/adminReducer";

export const AdminContext = createContext();
export const ViewUsersContext = createContext();

const initialCompanyState = {
  isSuccess: false,
  msg: "",
  payload: "",
};

const initialUserState = {
  isSuccess: false,
  msg: "",
  payload: [],
};

export const ViewUsersContextProvider = (props) => {
  const [viewUsers, dispatch] = useReducer(adminReducer, initialUserState);
  return (
    <ViewUsersContext.Provider value={{ viewUsers, dispatch }}>
      {props.children}
    </ViewUsersContext.Provider>
  );
};
export const AdminContextProvider = (props) => {
  const [addCompany, dispatch] = useReducer(adminReducer, initialCompanyState);
  return (
    <AdminContext.Provider value={{ addCompany, dispatch }}>
      {props.children}
    </AdminContext.Provider>
  );
};
