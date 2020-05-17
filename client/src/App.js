import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";

import Admin from "./components/admin/Admin";

import AddUser from "./components/admin/AddUser";
import AddProduct from "./components/admin/AddProduct";
import AddCompany from "./components/admin/AddCompany";
class App extends React.Component {
  state = {
    loggedIn: true,
    isAdmin: false,
  };
  render() {
    return (
      <div className="App">
        {this.state.isAdmin ? (
          <Router>
            <Route exact path="/user/admin" component={Admin} />
          </Router>
        ) : (
          <>
            <Header />
            <Router>
              <Route exact path="/" component={Content} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/user/Profile" component={Profile} />
            </Router>
            <Footer />
          </>
        )}
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
