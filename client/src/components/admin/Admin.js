import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import AdminHeader from "./AdminHeader";

import "./Admin.scss";

const Admin = () => {
  return (
    <div>
      <AdminHeader />
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
};

export default Admin;
