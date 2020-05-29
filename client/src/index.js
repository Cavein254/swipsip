import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ProductContextProvider from "./context/ProductContext";
import UserContextProvider from "./context/UserContext";
import {
  AdminContextProvider,
  ViewUsersContextProvider,
} from "./context/AdminContext";

ReactDOM.render(
  <ProductContextProvider>
    <UserContextProvider>
      <AdminContextProvider>
        <ViewUsersContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ViewUsersContextProvider>
      </AdminContextProvider>
    </UserContextProvider>
  </ProductContextProvider>,
  document.getElementById("root")
);
