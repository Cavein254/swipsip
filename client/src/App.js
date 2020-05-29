import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AdminUser, LoggedIn } from "./hoc";
import { tokenFun, adminFun, isSuccessFun } from "./config/config.js";
import Header from "./components/header/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import Logout from "./components/user/Logout";
import CardList from "./components/content/card/cardlist";
import Unauthorized from "./components/user/unauthorized";

import Admin from "./components/admin/Admin";

import AddUser from "./components/admin/AddUser";
import AddProduct from "./components/admin/AddProduct";
import AddCompany from "./components/admin/AddCompany";

import Playground from "./components/stash";
import { UserContext } from "./context/UserContext";
import RegisterUserContextProvider from "./context/RegisterUserContext";
import AdminContextProvider from "./context/AdminContext";

const admin = adminFun();
const token = tokenFun();
const isSuccess = isSuccessFun();
console.log(admin, token, isSuccess);
const App = () => {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Route exact path="/" component={Content} />
          <Route exact path="/user/login" component={Login} />
          <RegisterUserContextProvider>
            <Route exact path="/user/register" component={Register} />
          </RegisterUserContextProvider>
          <Route exact path="/stash" component={Playground} />
          <Route exact path="/products" component={CardList} />
          <Route exact path="/unauthorized" component={Unauthorized} />

          <LoggedIn
            exact
            path="/user/profile"
            component={Profile}
            isSuccess={isSuccess}
          />
          <LoggedIn
            exact
            path="/user/logout"
            component={Logout}
            isSuccess={isSuccess}
          />

          <AdminContextProvider>
            <AdminUser exact path="/user/admin" component={Admin} />

            <AdminUser
              exact
              path="/user/admin/adduser"
              component={AddUser}
              admin={admin}
            />
            <AdminUser
              exact
              path="/user/admin/addproduct"
              component={AddProduct}
              admin={admin}
            />
            <AdminUser
              exact
              path="/user/admin/addcompany"
              component={AddCompany}
              admin={admin}
            />
          </AdminContextProvider>
        </Router>
        <Footer />
      </>
    </div>
  );
};

export default App;

{
  /* <AdminRoute
  exact
  path="/user/admin"
  component={Admin}
  user={this.user}
/>
<LoggedUserRoute
  exact
  path="/user/profile"
  component={Profile}
  user={this.user}
/>
<LoggedUserRoute
  exact
  path="/"
  component={Content}
  user={this.user}
/> */
}
