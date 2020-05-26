import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AdminRoute, LoggedUserRoute } from "./hoc";
import Header from "./components/header/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import Logout from "./components/user/Logout";

import Admin from "./components/admin/Admin";

import AddUser from "./components/admin/AddUser";
import AddProduct from "./components/admin/AddProduct";
import AddCompany from "./components/admin/AddCompany";
import store from "./store";

class App extends React.Component {
  render() {
    const state = store.getState();
    const user = state.User.user;
    console.log(user);
    return (
      <div className="App">
        <>
          <Router>
            <Header />
            <Route exact path="/user/admin" component={Admin} />
            <Route exact path="/" component={Content} />
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/logout" component={Logout} />
            <Route exact path="/user/register" component={Register} />
            <Route exact path="/user/admin/adduser" component={AddUser} />
            <Route exact path="/user/admin/addproduct" component={AddProduct} />
            <Route exact path="/user/admin/addcompany" component={AddCompany} />
          </Router>
          <Footer />
        </>
        {/* <Router>
          <Header />
          <Route exact path="/" component={Content} />
          <Route exact path="/user/admin" component={Admin} />
          <Route exact path="/user/admin/adduser" component={AddUser} />
          <Route exact path="/user/admin/addproduct" component={AddProduct} />
          <Route exact path="/user/admin/addcompany" component={AddCompany} />
        </Router> */}
      </div>
    );
  }
}

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
