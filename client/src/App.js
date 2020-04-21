import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./component/about";
import Login from "./component/registerlogin";

function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
