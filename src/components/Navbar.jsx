import React, { Component } from "react";
import { Link } from "@reach/router";
class Navbar extends Component {
  state = {
    option: {},
  };
  render() {
    return (
      <nav className="navbar-wrapper">
        <div className="navbar-btn-wrapper">
          <Link to="/addimg">
            <button className="btn">Add Image</button>
          </Link>
        </div>
        <div className="navbar-btn-wrapper">
          <Link to="/todo">
            <button className="btn">TODO</button>
          </Link>
        </div>

        <div className="navbar-btn-wrapper">
          <Link to="/todo/add">
            <button className="btn">Add Todo</button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
