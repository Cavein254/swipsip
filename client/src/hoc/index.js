import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

export const AdminUser = ({
  component: Component,
  user,
  admin,
  isSuccess,
  ...rest
}) => {
  console.log("Admin user ", admin);
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

export const LoggedIn = ({
  component: Component,
  user,
  isSuccess,
  ...rest
}) => {
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
