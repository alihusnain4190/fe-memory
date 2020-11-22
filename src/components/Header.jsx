import React from "react";

import { Link } from "@reach/router";
const Header = () => {
  return (
    <div className="header-wrapper">
      <Link to="/" className="header-wrapper__link">
        <h2>Family Memory</h2>
      </Link>
    </div>
  );
};

export default Header;
