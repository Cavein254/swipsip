import React from "react";
import Login from "./Login";
import Navigation from "./NavBar";
import Search from "./Search";

function Header() {
  return (
    <div>
      <Login />
      <Search />
      <Navigation />
    </div>
  );
}

export default Header;
