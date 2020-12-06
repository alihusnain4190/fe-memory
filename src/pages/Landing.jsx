import React, { Component } from "react";
import { Link } from "@reach/router";
import Paggination from "../components/Paggination";
import Navbar from "../components/Navbar";
import { getFamilyImage } from "../api/api";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
class Landing extends Component {
  state = {
    list: [],
    isLoading: true,
    page: 1,
  };
  componentDidMount() {
    const page = this.state.page;
    getFamilyImage(page)
      .then((resp) => {
        this.setState({
          list: resp.data.f_img.data,
          totalCount: resp.data.f_img.totalCount,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const page = this.state.page;

    if (prevState.page !== page) {
      getFamilyImage(page)
        .then((resp) => {
          this.setState({
            list: resp.data.f_img.data,
            totalCount: resp.data.f_img.totalCount,
            isLoading: false,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  changePage = (page) => {
    this.setState({ page: page });
  };
  render() {
    const override = css`
      display: block;
     
      margin: 0 auto;
      border-color: #4296f5;
    `;
    const { totalCount, page } = this.state;
    const articlesPerPage = 5;
    const pageCount = Math.ceil(totalCount / articlesPerPage);
    const atStart = page === 1;
    const atEnd = page === pageCount;
    const pages = Array.from({ length: pageCount }).map((item, i) => i + 1);

    const data = this.state.list;
    return (
      <main>
        <Navbar />

        {this.state.isLoading ? (
          <ClipLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={this.state.loading}
          />
        ) : (
          data.map(({ id, created_at, location, description, img_sml }) => {
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
                  <h4> {location}</h4>
                </div>
              </div>
            );
          })
        )}

        {!this.state.isLoading && (
          <Paggination
            page={page}
            startPage={atStart}
            endPage={atEnd}
            pages={pages}
            changePage={this.changePage}
          />
        )}
      </main>
    );
  }
}
export default Landing;
