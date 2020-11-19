import React, { Component } from "react";
import baby from "../img/baby.jpeg";
import {Link} from '@reach/router'
class Landing extends Component {
  state = {
    list: [
      {
        index: 0,
        picture: "http://placehold.it/32x32",
        name: "Trisha",
        time: "12:12:20",
        day: "monday",
        address: " Glenville",
      },
      {
        index: 0,
        picture: "http://placehold.it/32x32",
        name: "Trisha",
        time: "12:12:20",
        day: "monday",
        address: " Glenville",
      },
      {
        index: 0,
        picture: "http://placehold.it/32x32",
        name: "Trisha",
        time: "12:12:20",
        day: "monday",
        address: " Glenville",
      },
      {
        index: 0,
        picture: "http://placehold.it/32x32",
        name: "Trisha",
        time: "12:12:20",
        day: "monday",
        address: " Glenville",
      },
      {
        index: 1,
        picture: "http://placehold.it/32x32",
        name: "Deanna",
        time: "12:12:20",
        day: "monday",
        address: " Woodlands",
      },
      {
        index: 2,
        picture: "http://placehold.it/32x32",
        name: "Katheryn",
        time: "12:12:20",
        day: "monday",
        address: " Bergoo",
      },
      {
        index: 3,
        picture: "http://placehold.it/32x32",
        name: "Perkins",
        time: "12:12:20",
        day: "monday",
        address: " Indeence",
      },
      {
        index: 4,
        picture: "http://placehold.it/32x32",
        name: "Brady",
        time: "12:12:20",
        day: "monday",
        address: " Morgan",
      },
    ],
  };

  render() {
    return (
      <main>
        {this.state.list.map(({ index,time, address, day }) => {
          return (
            <div className="landing-wrapper">
              <div className="landing-wrapper__img">
              <Link to={`/img/${index}`}>  <img src={baby}></img></Link>
              </div>
              <div className="landing-wrapper__h4">
                <h4>Time: {time}</h4>
                <p>Loc: {address}</p>
                <h4>Day: {day}</h4>
              </div>
            </div>
          );
        })}
      </main>
    );
  }
}
export default Landing;
