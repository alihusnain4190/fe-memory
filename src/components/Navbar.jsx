import React, { Component } from "react";
import {Link} from '@reach/router'
class Navbar extends Component {
  state = {
    option: {},
  };
  render() {
    return (
      <nav>
        <div className="filter-wrapper">
          <select
            onChange={(e) => {
              this.setState({ option: e.target.value });
            }}
          >
            <option>--filterBy</option>
            <option>Location</option>
            <option>time</option>
          </select>
        </div>
        <div className="navbar-btn-wrapper">
         <Link to="/addimg" > <button className="btn">Add Image</button></Link>
        </div>
        <div className="navbar-btn-wrapper">
          <button className="btn">TODO</button>
          <button className="btn">Self image</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
