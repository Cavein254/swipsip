import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import store from "../store";

const state = store.getState();
const user = state.User.user;

export const AdminRoute = ({ component: Component, user, ...rest }) => {
  console.log("admin route", user.success);
  if (user.success) {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (user.user.isAdmin) {
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
  }
};

export const LoggedUserRoute = ({ component: Component, user, ...rest }) => {
  console.log("logged in user route", user.success);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.success) {
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
