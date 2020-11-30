import React, { Component } from "react";
import { navigate } from "@reach/router";

import axios from "axios";
import Navbar from "../components/Navbar";
class UpdateByID extends Component {
  state = {
    description_img: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    return axios
      .patch(`https://be-memory.herokuapp.com/api/f_imgs/${this.props.id}`, {
        description: e.target.description.value,
      })
      .then(({ data: { f_img } }) => {
        this.setState({ image: f_img });
        navigate(`/img/${this.props.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <Navbar />
        <section className="family-update-form">
          <form onSubmit={this.handleSubmit}>
            <h1>You can just update pic description</h1>
            <div className="family-update-description">
              <label htmlFor="description">description:</label>
              <textarea
                id="description"
                name="description"
                value={this.state.description_img}
                onChange={(e) => {
                  this.setState({ description_img: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="family-submit">
              <button className="btn submit">Submit</button>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default UpdateByID;
