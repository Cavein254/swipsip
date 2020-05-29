import React, { createContext, useReducer } from "react";
import { adminReducer } from "../reducer/adminReducer";

export const AdminContext = createContext();

const initialCompanyState = {
  isSuccess: false,
  msg: "",
  payload: "",
};

const AdminContextProvider = (props) => {
  const [addCompany, dispatch] = useReducer(adminReducer, initialCompanyState);
  return (
    <AdminContext.Provider value={{ addCompany, dispatch }}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
