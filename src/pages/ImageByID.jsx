import { Link, navigate } from "@reach/router";
import React, { Component } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
class ImageByID extends Component {
  state = {
    image: {},
    isLoading: true,
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
  handleDelete = () => {
    return Promise.all([
      axios.delete(
        `https://be-memory.herokuapp.com/api/image/${this.state.image.img_full}`
      ),
      axios.delete(
        `https://be-memory.herokuapp.com/api/image/${this.state.image.img_sml}`
      ),
      axios.delete(
        `https://be-memory.herokuapp.com/api/f_imgs/${this.props.id}`
      ),
    ])
      .then(([first, second, database]) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { description, img_full, location, created_at } = this.state.image;
    const a = new Date(created_at);
    const year = a.getFullYear();
    const month = a.getMonth();

    return (
      <main>
        <Navbar />
        {this.state.isLoading ? (
          <p>is Loading</p>
        ) : (
          <section className="family">
            <div className="family-img-wrapper">
              <img
                src={`https://family-image.s3.eu-west-2.amazonaws.com/${img_full}`}
              ></img>
            </div>
            <div className="family-p-wrapper">
              <p>{description}</p>
            </div>
            <div className="family-h3-wrapper">
              <span>
                Year <h3>{year}</h3>
              </span>
              <span className="family-h3-wrapper-margin-left">
                Month <h3>{month}</h3>
              </span>
            </div>
            <div className="family-h4-wrapper">
              <span>
                Location: <h4>{location}</h4>
              </span>
            </div>
            <div className="family-button-wrapper">
              <div>
                <button onClick={this.handleDelete} className="btn">
                  Remove image
                </button>
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
