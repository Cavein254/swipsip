import React from "react";
import Top from "./top/Top";
import Navigation from "./NavBar";
import Search from "./Search";

function Header() {
  return (
    <div>
      <Top />
      <Search />
      <Navigation />
    </div>
  );
}

export default Header;
