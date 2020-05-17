import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddProducts from "./AddProduct";
import ViewProducts from "./ViewProducts";
import ViewUsers from "./ViewUsers";
import AddUser from "./AddUser";
import Transactions from "./Transactions";
import Orders from "./Orders";
import Header from "./Header";

import "./Admin.scss";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route exact path="/" component={Header} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/viewusers" component={ViewUsers} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/products" component={ViewProducts} />
          <Route exact path="/addproduct" component={AddProducts} />
          <Route exact path="/orders" component={Orders} />
        </Router>
      </div>
    );
  }
}

export default Admin;
