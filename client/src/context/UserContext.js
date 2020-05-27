import React, { createContext, useState } from "react";
import { LoginSuccess, Login } from "./DummyData";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    isSucess: false,
    admin: false,
    payload: [],
  });
  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
