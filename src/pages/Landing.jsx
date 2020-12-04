import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import Paggination from "../components/Paggination";
import Navbar from "../components/Navbar";

class Landing extends Component {
  state = {
    list: {},
    isLoading: true,
    page: 1,
  };
  componentDidMount() {
    const page = this.state.page;
    return axios
      .get(`http://be-memory.herokuapp.com/api/f_imgs?p=${page}`)
      .then(({ data: { f_img } }) => {
        console.log(f_img);

        this.setState({
          list: f_img,
          totalCount: f_img.totalCount,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const page = this.state.page;
    if (prevState.page !== page);
    return axios
      .get(`http://be-memory.herokuapp.com/api/f_imgs?p=${page}`)
      .then(({ data: { f_img } }) => {
        // console.log(f_img);

        this.setState({
          list: f_img,
          totalCount: f_img.totalCount,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  changePage = (page) => {
    this.setState({ page: page });
    console.log(this.state.page);
  };
  render() {
    const { totalCount, page } = this.state;
    const articlesPerPage = 10;
    const pageCount = Math.ceil(totalCount / articlesPerPage);
    const atStart = page === 1;
    const atEnd = page === pageCount;
    const pages = Array.from({ length: pageCount }).map((item, i) => i + 1);
    return (
      <main>
        <Navbar />

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

        {!this.state.isLoading && (
          <Paggination
            page={page}
            startPage={atStart}
            endPage={atEnd}
            page={pages}
            changePage={this.changePage}
          />
        )}
      </main>
    );
  }
}
export default Landing;
