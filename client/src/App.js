import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Content} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
