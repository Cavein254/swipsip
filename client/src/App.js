import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./component/about";
import Home from "./component/home";
import Login from "./component/registerlogin";
import Register from "./component/registerlogin/register";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
