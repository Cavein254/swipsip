import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./registerLogin";
import Register from "./registerLogin/register";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
