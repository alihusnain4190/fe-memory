import React, { useState } from "react";

import { Link, navigate } from "@reach/router";
import { useAuth } from "../context/authContext";
const Header = () => {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      error("Failed to logout");
    }
  };
  if (currentUser) {
    return (
      <div className="header-wrapper">
        {/* <strong>Email:{currentUser.email}</strong> */}
        <Link to="/" className="header-wrapper__link">
          <h2>Family Memory</h2>
        </Link>
        <div>
          <button className="btn logout-btn" onClick={handleLogout}>
            logout
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header-wrapper">
        <Link to="/" className="header-wrapper__link">
          <h2>Family Memory</h2>
        </Link>
      </div>
    );
  }
};

export default Header;
