import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import UserContextProvider from "./context/UserContext";
import ProductContextProvider from "./context/ProductContext";

ReactDOM.render(
  <UserContextProvider>
    <ProductContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductContextProvider>
  </UserContextProvider>,
  document.getElementById("root")
);
