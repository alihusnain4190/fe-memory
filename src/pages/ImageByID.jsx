import { Link } from "@reach/router";
import React, { Component } from "react";
import baby from "../img/baby.jpeg";
import axios from "axios";
class ImageByID extends Component {
  state = {
    image: {},
    isLoading: true,
    index: 0,
    image_description:
      "this is baby image which we took in stockport when baby was playing",
    name: "Trisha",
    time: "12:12:20",
    day: "monday",
    date: "12-dec-2005",
    address: " Glenville",
  };
  componentDidMount() {
    return axios
      .get(`https://be-memory.herokuapp.com/api/f_imgs/${this.props.id}`)
      .then(({ data: { f_img } }) => {
        this.setState({ image: f_img, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { description, img_full } = this.state.image;

    return (
      <main>
        {this.state.isLoading ? (
          <p>is Loading</p>
        ) : (
          <section className="family">
            <div className="family-img-wrapper">
              <img src={img_full}></img>
            </div>
            <div className="family-p-wrapper">
              <p>{description}</p>
            </div>
            <div className="family-h3-wrapper">
              <span>
                Time <h3>{this.state.time}</h3>
              </span>

              <span>
                {/* Date <h3>{this.state.date}</h3> */}
              </span>
            </div>
            <div className="family-h4-wrapper">
              <span>
                {/* Day: <h4>{this.state.day}</h4> */}
              </span>
              <span>
                {/* Address: <h4>{this.state.address}</h4> */}
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
        )}
      </main>
    );
  }
}

export default ImageByID;
