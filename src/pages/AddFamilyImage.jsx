import React from "react";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { navigate } from "@reach/router";
import Navbar from "../components/Navbar";

class AddFamilyImage extends React.Component {
  state = {
    file: null,
    thumbnailImage: {},
    fullsizeImage: {},
    imagesSent: false,
    description: "",
    location: "",
  };

  resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        80,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  submitFile = (e) => {
    const { file } = this.state;
    e.preventDefault();
    console.log("top log");
    try {
      if (!file) {
        throw new Error("Select a file first!");
      }
      this.resizeFile(file[0])
        .then((res) => {
          const newFile = this.dataURLtoFile(res, "newImage.jpeg");
          const thumbnailForm = new FormData();
          thumbnailForm.append("file", newFile);
          const fullsizeForm = new FormData();
          fullsizeForm.append("file", file[0]);
          return Promise.all([
            axios.post(
              `https://be-memory.herokuapp.com/api/image`,
              thumbnailForm,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            ),
            axios.post(
              `https://be-memory.herokuapp.com/api/image`,
              fullsizeForm,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            ),
          ]);
        })
        .then(([thumbnail, fullsize]) => {
          const img_sml = thumbnail.data.image.key;
          const img_full = fullsize.data.image.key;

          return axios
            .post("https://be-memory.herokuapp.com/api/f_imgs", {
              img_sml,
              img_full,
              description: e.target.description.value,
              location: e.target.location.value,
            })
            .then((resp) => {
              console.log(resp);
              navigate(`/`);
            });
        });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        <Navbar />
        <section className="family-add-form">
          <form onSubmit={this.submitFile}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="location">Location</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={this.state.location}
                  onChange={(e) => {
                    this.setState({ location: e.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="description">description:</label>
              </div>
              <div className="col-75">
                <textarea
                  id="description"
                  name="description"
                  value={this.state.description_img}
                  onChange={(e) => {
                    this.setState({ description_img: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="img">chosse your image:</label>
              </div>
              <div className="col-75">
                <input
                  type="file"
                  onChange={(event) => {
                    this.setState({ file: event.target.files });
                  }}
                ></input>
              </div>
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

export default AddFamilyImage;
