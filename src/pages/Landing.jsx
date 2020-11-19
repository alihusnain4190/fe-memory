import React, { Component } from "react";
import baby from "../img/baby.jpeg";
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
        address: " Independence",
      },
      {
        index: 4,
        picture: "http://placehold.it/32x32",
        name: "Brady",
        time: "12:12:20",
        day: "monday",
        address: " Morgandale",
      },
    ],
  };

  render() {
    return (
      <main className="container">
        {this.state.list.map(({ time, address, day }) => {
          return (
            <div className="landing-wrapper">
              <div className="landing-wrapper__img">
                <img src={baby}></img>
              </div>
              <div className="landing-wrapper__h4">
                <h4>Time: {time}</h4>
                <h4>Loc: {address}</h4>
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
