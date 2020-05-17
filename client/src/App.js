import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/header/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";

import Admin from "./components/admin/Admin";

class App extends React.Component {
  state = {
    isAdmin: true,
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
      </div>
    );
  }
}

export default App;
