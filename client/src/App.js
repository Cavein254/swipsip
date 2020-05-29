import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AdminUser, LoggedIn } from "./hoc";
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
import ViewUsers from "./components/admin/ViewUsers";

import AddUser from "./components/admin/AddUser";
import AddProduct from "./components/admin/AddProduct";
import AddCompany from "./components/admin/AddCompany";

import Playground from "./components/stash";
import RegisterUserContextProvider from "./context/RegisterUserContext";

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

          <LoggedIn exact path="/user/profile" component={Profile} />
          <LoggedIn exact path="/user/logout" component={Logout} />

          <AdminUser exact path="/user/admin" component={Admin} />

          <AdminUser exact path="/user/admin/adduser" component={AddUser} />
          <AdminUser
            exact
            path="/user/admin/addproduct"
            component={AddProduct}
          />
          <AdminUser
            exact
            path="/user/admin/addcompany"
            component={AddCompany}
          />

          <AdminUser exact path="/user/admin/viewusers" component={ViewUsers} />
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
