import React, { Component } from "react";
import baby from "../img/baby.jpeg";
import { Link } from "@reach/router";
import axios from "axios";

class Landing extends Component {
  state = {
    list: [],
    isLoading: true,
  };
  componentDidMount() {
    return axios
      .get(`https://be-memory.herokuapp.com/api/f_imgs`)
      .then(({ data: { f_img } }) => {
        this.setState({ list: f_img, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <main>
        {this.state.isLoading
          ? "loadgin page"
          : this.state.list.map(({ id, created_at, description, img_sml }) => {
              return (
                <div className="landing-wrapper" key={id}>
                  <div className="landing-wrapper__img">
                    <Link to={`/img/${id}`}>
                      <img src={img_sml}></img>
                    </Link>
                  </div>
                  <div className="landing-wrapper__h4">
                    <h4>Time: {created_at}</h4>
                    <p>Loc: {created_at}</p>
                    {/* <h4>Day: {day}</h4> */}
                  </div>
                </div>
              );
            })}
      </main>
    );
  }
}
export default Landing;
