import React, { Component } from "react";
import baby from "../img/baby.jpeg";
import {Link} from '@reach/router'
import axios from "axios";

class Landing extends Component {
  state = {
    list: [
      //   {
      //     index: 0,
      //     picture: "http://placehold.it/32x32",
      //     name: "Trisha",
      //     time: "12:12:20",
      //     day: "monday",
      //     address: " Glenville",
      //   },
      //   {
      //     index: 0,
      //     picture: "http://placehold.it/32x32",
      //     name: "Trisha",
      //     time: "12:12:20",
      //     day: "monday",
      //     address: " Glenville",
      //   },
      //   {
      //     index: 0,
      //     picture: "http://placehold.it/32x32",
      //     name: "Trisha",
      //     time: "12:12:20",
      //     day: "monday",
      //     address: " Glenville",
      //   },
      //   {
      //     index: 0,
      //     picture: "http://placehold.it/32x32",
      //     name: "Trisha",
      //     time: "12:12:20",
      //     day: "monday",
      //     address: " Glenville",
      //   },
      //   {
      //     index: 1,
      //     picture: "http://placehold.it/32x32",
      //     name: "Deanna",
      //     time: "12:12:20",
      //     day: "monday",
      //     address: " Woodlands",
      //   },
      //   {
      //     index: 2,
      //     picture: "http://placehold.it/32x32",
      //     name: "Katheryn",
      //     time: "12:12:20",
      //     day: "monday",
      //     address: " Bergoo",
      //   },
      //   {
      //     index: 3,
      //     picture: "http://placehold.it/32x32",
      //     name: "Perkins",
      //     time: "12:12:20",
      //     day: "monday",
      //     address: " Indeence",
      //   },
      //   {
      //     index: 4,
      //     picture: "http://placehold.it/32x32",
      //     name: "Brady",
      //     time: "12:12:20",
      //     day: "monday",
      //     address: " Morgan",
      //   },
    ],
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

        {this.state.list.map(({ id, created_at, description, img_sml }) => {

          return (
            <div className="landing-wrapper" key={id}>
              <div className="landing-wrapper__img">

              <Link to={`/img/${index}`}>  <img src={baby}></img></Link>

                <img src={img_sml}></img>
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
