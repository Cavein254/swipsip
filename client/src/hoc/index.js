import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { adminFun, isSuccessFun } from "../config/config";

export const AdminUser = ({
  component: Component,
  user,
  isSuccess,
  ...rest
}) => {
  const admin = adminFun();
  console.log("AdminUser user ----", admin);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (admin) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/unauthorized",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export const LoggedIn = ({ component: Component, user, ...rest }) => {
  const isSuccess = isSuccessFun();
  console.log("logged in user route", isSuccess);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isSuccess) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/unauthorized",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
