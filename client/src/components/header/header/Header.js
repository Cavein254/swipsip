import React from "react";
import Top from "../top/Top";
import Navigation from "../NavBar";
import Search from "../Search";

import "./header.scss";

function Header() {
  return (
    <div className="heading">
      <Top />
      <Search />
      <Navigation />
    </div>
  );
}

export default Header;
