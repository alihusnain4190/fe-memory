import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";

class Landing extends Component {
  state = {
    list: [],
    isLoading: true,
  };
  componentDidMount() {
    return (
      axios
        .get(`http://localhost:9090/api/f_imgs`)
        .then(({ data: { f_img } }) => {
          this.setState({ list: f_img, isLoading: false });
        })
        .catch((err) => {
          console.log(err);
        })
    );
  }
  render() {
    return (
      <main>
        {this.state.isLoading
          ? "loadgin page"
          : this.state.list.map(
              ({ id, created_at, location, description, img_sml }) => {
                const a = new Date(created_at);
                const year = a.getFullYear();
                const month = a.getMonth();

                return (
                  <div className="landing-wrapper" key={id}>
                    <div className="landing-wrapper__img">
                      <Link to={`/img/${id}`}>
                        <img
                          src={`https://family-image.s3.eu-west-2.amazonaws.com/${img_sml}`}
                        ></img>
                      </Link>
                    </div>
                    <div className="landing-wrapper__h4">
                      <h4>Month: {month}</h4>
                      <p>year: {year}</p>
                      <h4>LOC: {location}</h4>
                    </div>
                  </div>
                );
              }
            )}
      </main>
    );
  }
}
export default Landing;
