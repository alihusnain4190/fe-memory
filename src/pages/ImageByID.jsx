import { Link } from "@reach/router";
import React, { Component } from "react";
import baby from "../img/baby.jpeg";

class ImageByID extends Component {
  state = {
    index: 0,
    image_description:
      "this is baby image which we took in stockport when baby was playing",
    name: "Trisha",
    time: "12:12:20",
    day: "monday",
    date: "12-dec-2005",
    address: " Glenville",
  };
  render() {
    console.log(this.props.id);
    return (
      <section className="family">
        <div className="family-img-wrapper">
          <img src={baby}></img>
        </div>
        <div className="family-p-wrapper">
          <p>{this.state.image_description}</p>
        </div>
        <div className="family-h3-wrapper">
          <span>
            Time <h3>{this.state.time}</h3>
          </span>

          <span>
            Date <h3>{this.state.date}</h3>
          </span>
        </div>
        <div className="family-h4-wrapper">
          <span>
            Day: <h4>{this.state.day}</h4>
          </span>
          <span>
            Address: <h4>{this.state.address}</h4>
          </span>
        </div>
        <div className="family-button-wrapper">
          <div>
            <button className="btn">Remove image</button>
          </div>
          <div>
            <Link to={`/update/${this.props.id}`}>
              <button className="btn">Update</button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageByID;
