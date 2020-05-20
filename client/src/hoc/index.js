import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import store from "../store";

const state = store.getState();
const user = state.User.user;

export const AdminRoute = ({ component: Component, user, ...rest }) => {
  console.log(user.success);
  if (user.success) {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (user.user.isAdmin) {
            return <Component {...rest} {...props} />;
          }
        }}
      />
    );
  } else {
    //   <Redirect to = {
    //       {
    //           pathname='/unauthorized',
    //           state: {
    //               from:props.location
    //           }
    //       }
    //   } />
    console.log("pass");
  }
};

export const LoggedUserRoute = ({ component: Component, user, ...rest }) => {
  console.log(user.success);
  if (user.success) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...rest} {...props} />;
        }}
      />
    );
  } else {
    //   <Redirect to = {
    //       {
    //           pathname='/unauthorized',
    //           state: {
    //               from:props.location
    //           }
    //       }
    //   } />
    console.log("pass");
  }
};
