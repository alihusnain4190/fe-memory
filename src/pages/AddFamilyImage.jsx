import React, { Component } from "react";

class AddFamilyImage extends Component {
  state = {
    description_img: "",
    time: "",
    date: "",
    address: "",
    img: "",
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
      <section className="family-update-form">
        <form onSubmit={this.handleSubmit}>
          <h1>Add photo</h1>
          <div className="family-update-address">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={this.state.address}
              onChange={(e) => {
                this.setState({ address: e.target.value });
              }}
            ></input>
          </div>
          <div className="family-update-time">
            <label htmlFor="time">time</label>
            <input
              type="time"
              name="time"
              id="time"
              value={this.state.time}
              onChange={(e) => {
                this.setState({ time: e.target.value });
              }}
            ></input>
          </div>
          <div className="family-update-date">
            <label htmlFor="date">date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={this.state.date}
              onChange={(e) => {
                this.setState({ date: e.target.value });
              }}
            ></input>
          </div>
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
          <div className="family-update-imge">
            <label htmlFor="img">Image:</label>
            <input
              type="file"
              id="img"
              name="img"
              value={this.state.img}
              onChange={(e) => {
                this.setState({ img: e.target.value });
              }}
            ></input>
          </div>
          <div className="family-submit">
            <button className="btn submit">Submit</button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddFamilyImage;