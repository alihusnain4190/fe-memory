import React, { Component } from "react";

class UpdateByID extends Component {
  state = {
    description_img: "",
    time: "",
    date: "",
    address: "",
  };
  handleSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(() => {
      return {
        [name]: value,
      };
    });

    console.log(this.state);
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <h1>Fill Form</h1>
          <div className="family-update-address">
            <label htmlFor="address">
              Address
              <input
                type="text"
                name="address"
                id="address"
                value={this.state.address}
                onChange={(e) => {
                  this.setState({ address: e.target.value });
                }}
              ></input>
            </label>
          </div>
          <div className="family-update-time">
            <label htmlFor="time">
              time
              <input
                type="time"
                name="time"
                id="time"
                value={this.state.time}
                onChange={(e) => {
                  this.setState({ time: e.target.value });
                }}
              ></input>
            </label>
          </div>
          <div className="family-update-date">
            <label htmlFor="date">
              date
              <input
                type="date"
                name="date"
                id="date"
                value={this.state.date}
                onChange={(e) => {
                  this.setState({ date: e.target.value });
                }}
              ></input>
            </label>
          </div>
          <div className="family-update-description">
            <label htmlFor="description">
              description:
              <textarea
                id="description"
                name="description"
                value={this.state.description_img}
                onChange={(e) => {
                  this.setState({ description_img: e.target.value });
                }}
              ></textarea>
            </label>
          </div>
          <button>Submit</button>
        </form>
      </section>
    );
  }
}

export default UpdateByID;
