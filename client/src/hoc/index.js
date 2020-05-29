import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { switSipFun } from "../config/config";

export const AdminUser = ({
  component: Component,
  user,
  isSuccess,
  ...rest
}) => {
  const admin = switSipFun().admin;
  console.log(admin);
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
  const isSuccess = switSipFun().isSuccess;
  console.log(isSuccess);
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
