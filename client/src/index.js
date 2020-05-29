import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ProductContextProvider from "./context/ProductContext";
import UserContextProvider from "./context/UserContext";

ReactDOM.render(
  <ProductContextProvider>
    <UserContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserContextProvider>
  </ProductContextProvider>,
  document.getElementById("root")
);
