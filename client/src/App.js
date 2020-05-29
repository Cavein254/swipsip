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

import AddUser from "./components/admin/AddUser";
import AddProduct from "./components/admin/AddProduct";
import AddCompany from "./components/admin/AddCompany";

import Playground from "./components/stash";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { state } = useContext(UserContext);
  const isSuccess = state.isSuccess;
  const admin = state.isAdmin;
  console.log(isSuccess, admin);
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Route exact path="/" component={Content} />
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/register" component={Register} />
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

          <AdminUser exact path="/user/admin" component={Admin} admin={admin} />

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
