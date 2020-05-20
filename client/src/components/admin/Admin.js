import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddProducts from "./AddProduct";
import ViewProducts from "./ViewProducts";
import ViewUsers from "./ViewUsers";
import AddUser from "./AddUser";
import Transactions from "./Transactions";
import Orders from "./Orders";
import AddCompany from "./AddCompany";
import AdminHeader from "./AdminHeader";

import "./Admin.scss";

class Admin extends React.Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <AdminHeader />
        <Router>
          <Route exact path="/" component={AdminHeader} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/viewusers" component={ViewUsers} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/products" component={ViewProducts} />
          <Route exact path="/addproduct" component={AddProducts} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/addcompany" component={AddCompany} />
        </Router>
        <>
          <h1>Welcome User to Swit Sip Admin Page</h1>
          <Router>
            <Switch>
              <ul>
                <li>
                  <a href="/user/admin/adduser">Add User</a>
                </li>
                <li>
                  <a href="/user/admin/addcompany">Add Company</a>
                </li>
                <li>
                  <a href="/user/admin/addproduct">Add Product</a>
                </li>
                <li>
                  <a href="/user/admin/viewusers">View Users</a>
                </li>
                <li>
                  <a href="/user/admin/products">View Products</a>
                </li>
                <li>
                  <a href="/user/admin/transactions">View Transactions</a>
                </li>
                <li>
                  <a href="/user/admin/orders">View Orders</a>
                </li>
              </ul>
            </Switch>
          </Router>
        </>
      </div>
    );
  }
}

export default Admin;
